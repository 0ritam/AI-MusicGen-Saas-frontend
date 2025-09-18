"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, Music, Sparkles, Zap, Download } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  isAuthenticated: boolean;
}

export function HeroSection({ isAuthenticated }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-violet-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Music Generation
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Create{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Amazing Music
            </span>{" "}
            in Seconds
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into professional-quality music using advanced AI. 
            No musical experience required – just describe what you want to hear.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {isAuthenticated ? (
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                <Link href="/dashboard">
                  <Music className="h-5 w-5 mr-2" />
                  Go to Dashboard
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                  <Link href="/auth/sign-up">
                    <Zap className="h-5 w-5 mr-2" />
                    Start Creating Music
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                  <Link href="/auth/sign-in">
                    Sign In
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-violet-100 dark:bg-violet-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Generation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced AI creates unique music from your text descriptions</p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Generate professional music tracks in just seconds</p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Own Your Music</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Download and use your generated music however you want</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
        <div className="w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 dark:opacity-10">
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}