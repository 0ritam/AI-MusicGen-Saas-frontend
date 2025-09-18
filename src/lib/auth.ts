import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "~/server/db";
import { Polar } from "@polar-sh/sdk";
import {
  polar,
  checkout,
  portal,
  usage,
  webhooks,
} from "@polar-sh/better-auth";
import { env } from "~/env";

const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
});

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "d72d829a-4021-4f14-acb7-c3e677f2b300",
              slug: "small",
            },
            {
              productId: "0acb582e-d10b-46d6-a9b0-5426ce45efdf",
              slug: "medium",
            },
            {
              productId: "5a189f8b-47b5-483f-983f-3c4622b99d88",
              slug: "large",
            },
          ],
          successUrl: "/",
          authenticatedUsersOnly: true,
        }),
        portal(),
        usage(),
        webhooks({
          secret: env.POLAR_WEBHOOK_SECRET,
          onOrderPaid: async (order) => {
            const externalCustomerId = order.data.customer.externalId;

            if (!externalCustomerId) {
              console.error("No external customer ID found.");
              throw new Error("No external customer id found.");
            }

            const productId = order.data.productId;

            let creditsToAdd = 0;

            switch (productId) {
              case "d72d829a-4021-4f14-acb7-c3e677f2b300":
                creditsToAdd = 10;
                break;
              case "0acb582e-d10b-46d6-a9b0-5426ce45efdf":
                creditsToAdd = 25;
                break;
              case "5a189f8b-47b5-483f-983f-3c4622b99d88":
                creditsToAdd = 50;
                break;
            }

            await db.user.update({
              where: { id: externalCustomerId },
              data: {
                credits: {
                  increment: creditsToAdd,
                },
              },
            });
          },
        }),
      ],
    }),
  ],
});
