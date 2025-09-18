"use client";

import { Card, CardContent, CardDescription, CardHeader } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "SC",
    content: "This platform revolutionized my content creation process. I can generate background music for my videos in minutes instead of hours of searching for royalty-free tracks.",
    rating: 5,
    highlight: "Saved 10+ hours per week"
  },
  {
    name: "Marcus Rodriguez",
    role: "Indie Game Developer",
    avatar: "MR",
    content: "The quality of music generated is incredible. I've used AI music for my entire game soundtrack and players constantly ask about the composer. It's that good!",
    rating: 5,
    highlight: "Professional quality"
  },
  {
    name: "Emma Thompson",
    role: "Podcast Producer",
    avatar: "ET",
    content: "As someone with zero musical background, I was amazed at how easy it is to create intro music that perfectly matches my podcast's vibe. The AI really understands mood and style.",
    rating: 5,
    highlight: "No music experience needed"
  },
  {
    name: "David Kim",
    role: "Marketing Agency Owner",
    avatar: "DK",
    content: "We use this for all our client campaigns now. Custom music for each brand that perfectly captures their essence. Our clients love the unique, on-brand audio experiences.",
    rating: 5,
    highlight: "Perfect for branding"
  },
  {
    name: "Lisa Park",
    role: "YouTuber",
    avatar: "LP",
    content: "I've tried many AI music tools, but this one is different. The music has soul and emotion, not just technically correct notes. My audience engagement has increased significantly.",
    rating: 5,
    highlight: "Emotional depth"
  },
  {
    name: "Alex Johnson",
    role: "Music Producer",
    avatar: "AJ",
    content: "Even as a professional producer, I use this for ideation and demos. It's like having a creative partner that never runs out of ideas. Absolutely game-changing for the industry.",
    rating: 5,
    highlight: "Industry professional approved"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            <Star className="h-4 w-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by creators
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied creators who have transformed their projects with AI-generated music.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-6 w-6 text-violet-200 dark:text-violet-800" />
                  <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed pl-5 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </div>

                {/* Highlight Badge */}
                <Badge variant="outline" className="bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900 dark:to-indigo-900 text-violet-800 dark:text-violet-200 border-violet-200 dark:border-violet-700">
                  ✨ {testimonial.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Happy Creators</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              1M+
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Songs Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              4.9/5
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-1">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}