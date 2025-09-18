"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Check, Zap, Crown, Rocket, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for trying out AI music generation",
    icon: Zap,
    badge: null,
    features: [
      "3 songs per month",
      "30-second tracks",
      "Standard quality",
      "Basic genres",
      "Community support"
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for content creators and professionals",
    icon: Crown,
    badge: "Most Popular",
    features: [
      "100 songs per month",
      "Full-length tracks (up to 5 min)",
      "High-quality audio",
      "All genres & styles",
      "Custom lyrics support",
      "Commercial license",
      "Priority support",
      "No watermarks"
    ],
    buttonText: "Start Pro Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams and large-scale projects",
    icon: Rocket,
    badge: "Best Value",
    features: [
      "Unlimited songs",
      "Extended tracks (up to 10 min)",
      "Studio-quality audio",
      "Custom AI training",
      "API access",
      "Team collaboration",
      "White-label options",
      "Dedicated support",
      "Custom integrations"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Star className="h-4 w-4 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose your
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              creative plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core AI music generation features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-violet-500 dark:border-violet-400 scale-105 hover:scale-110' 
                  : 'border hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <CardHeader className="text-center pb-8">
                {/* Icon */}
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-violet-500 to-indigo-600' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                  }`} />
                </div>

                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>

                <CardDescription className="mt-4 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant}
                  size="lg"
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white border-0' 
                      : ''
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              Commercial license included
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              No setup fees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}