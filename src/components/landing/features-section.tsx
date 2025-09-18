"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Music, 
  Mic, 
  Wand2, 
  Download, 
  Share, 
  Palette,
  Clock,
  Headphones,
  Star
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Text-to-Music AI",
    description: "Simply describe the music you want and our AI will create it. From 'upbeat jazz' to 'melancholic piano ballad'.",
    badge: "Core Feature"
  },
  {
    icon: Mic,
    title: "Custom Lyrics",
    description: "Add your own lyrics or let AI generate them. Create songs with meaning that resonates with your audience.",
    badge: "Popular"
  },
  {
    icon: Palette,
    title: "Multiple Genres",
    description: "From classical to electronic, rock to ambient. Our AI understands and creates music across all genres.",
    badge: "Versatile"
  },
  {
    icon: Clock,
    title: "Instant Generation",
    description: "No more waiting hours for inspiration. Generate professional-quality tracks in under 30 seconds.",
    badge: "Fast"
  },
  {
    icon: Download,
    title: "High-Quality Export",
    description: "Download your music in high-quality formats. Perfect for streaming, videos, or professional use.",
    badge: "Pro Quality"
  },
  {
    icon: Share,
    title: "Easy Sharing",
    description: "Share your creations with the world. Built-in sharing tools make it easy to showcase your music.",
    badge: "Social"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
            <Star className="h-4 w-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to create
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              amazing music
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform provides all the tools you need to bring your musical ideas to life,
            regardless of your experience level.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-violet-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-violet-50 text-violet-700 dark:bg-violet-900 dark:text-violet-300">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Headphones className="h-4 w-4" />
            <span>Join thousands of creators making music with AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}