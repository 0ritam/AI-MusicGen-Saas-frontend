import { inngest } from "./client";
import { db } from "~/server/db";
import { env } from "~/env";


export const generateSong = inngest.createFunction(
  { id: "generate-song", concurrency: {
    limit: 1,
    key: "event.data.userId"
  },
  onFailure: async({event, error: _error}) => {
    const eventData = event?.data?.event?.data as { songId?: string };
    const songId = eventData?.songId;
    if (songId) {
      await db.song.update({
        where:{
          id: songId,
          
        },
        data: {
            status: "failed",
        },
      })
    }
  }
},
  
  { event: "generate-song-event" },
  async ({ event, step }) => {
    const { songId } = event.data as {
      songId: string;
      userId: string;
    };
    
    const{userId, credits, endpoint, body} = await step.run("check-credits", async () => {
      const song = await db.song.findUniqueOrThrow({
        where: { 
          id: songId 
        },
        select: {
          user: {
            select: {
              id: true,
              credits: true,
            }
          },
          prompt: true,
          lyrics : true,
          fullDescribedSong : true,
          describedLyrics : true,
          instrumental : true,
          guidanceScale : true,
          inferStep : true,
          audioDuration : true,
          seed: true,
        }
      });

      type RequestBody = {
        gudiance_scale?: number;
        infer_steps?: number;
        audio_duration?: number;
        seed?: number;
        full_described_song?: string;
        prompt?: string;
        lyrics?: string;
        described_lyrics?: string;
        instrumental?: boolean;
      }

      let endpoint = "";
      let body: RequestBody = {};

      const commonParams = {
        gudiance_scale: song.guidanceScale ?? undefined,
        infer_step: song.inferStep ?? undefined,
        audio_duration: song.audioDuration ?? undefined,
        seed: song.seed   ?? undefined,
        instrumental: song.instrumental ?? undefined,

      };

      //Description of a song is prioritized over lyrics
      if(song.fullDescribedSong){
        endpoint = env.GENERATE_FROM_DESCRIPTION;
        body = {
          ...commonParams,
          full_described_song: song.fullDescribedSong,
        }
      }



      //Cusstom mode : lyrics + prompt
      else if(song.prompt && song.lyrics){
        endpoint = env.GENERATE_WITH_LYRICS;
        body = {
          ...commonParams,
          prompt: song.prompt,
          lyrics: song.lyrics,
        }
      }


      //custom mode; prompt + described lyrics

      else if(song.prompt && song.describedLyrics){
        endpoint = env.GENERATE_FROM_DESCRIBED_LYRICS;
        body = {
          ...commonParams,
          prompt: song.prompt,
          described_lyrics: song.describedLyrics,
        }
      }

      return{ userId : song.user.id, credits: song.user.credits, endpoint: endpoint, body: body };
    }
  )
  if (credits > 0) {
      //gebnerate th song
      await step.run("set-status-processing", async () => {
        return await db.song.update({
          where: { id: songId },
          data: {
            status: "processing",
          },
        });
      });

    console.log('Making request to Modal API...');
    console.log('Endpoint:', endpoint);
    console.log('Request body:', JSON.stringify(body, null, 2));

    const response = await step.fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log('Modal API request completed');
    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    // Parse the response immediately after the fetch
    let responseData = null;
    if (response.ok) {
      try {
        responseData = (await response.json()) as {
          s3_key: string;
          cover_image_s3_key: string;
          categories: string[];
        };
        console.log('Modal response data:', responseData);
      } catch (error) {
        console.error('Failed to parse JSON response:', error);
      }
    } else {
      const errorText = await response.text();
      console.error('Modal API error:', response.status, errorText);
    }

    await step.run("update-song-result", async () => {

          await db.song.update({
          where: {
            id: songId,
          },
          data: {
            s3Key: responseData?.s3_key,
            thumbnailS3Key: responseData?.cover_image_s3_key,
            status: response.ok ? "processed" : "failed",
          },
        });

        if(responseData && responseData.categories.length > 0){
          await db.song.update({
            where: { id: songId },
            data: {
              categories: {
                connectOrCreate: responseData.categories.map(
                  (categoryName) => ({
                    where: { name: categoryName },
                    create: { name: categoryName },
                  }),
                ),
              },
            },
          });
        }
    })

    return await step.run("deduct-cerdit", async() => {
      if(!response.ok) return;

      return await db.user.update({
        where: { id: userId },
        data: {
          credits: { decrement: 1 },
        },
      })
    })
    } else{
      //set song start "not enough credits"
      await step.run("set-status-no-credits", async () => {
        return await db.song.update({
          where: { id: songId },
          data: {
            status: "no credits",
          },
        });
      });
    };
  }
);