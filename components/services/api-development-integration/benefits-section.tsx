"use client"

import { FadeInSection } from "@/components/FadeInSection"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Efficiency",
    description: "A single codebase simplifies management and reduces effort.",
  },
  {
    title: "Enhanced Security",
    description: "APIs enforce security protocols, controlling access without exposing entire databases.",
  },
  {
    title: "Cost Efficient",
    description: "Fewer resources are needed for development and maintenance, cutting costs.",
  },
  {
    title: "Improved Agility",
    description: "APIs provide quick data access and support dynamic development with caching and authorization.",
  },
  {
    title: "Better Control",
    description: "Define detailed access policies for precise management.",
  },
  {
    title: "Consistency",
    description: "Ensure a reliable experience with uniform features and availability for all users.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <div className="flex items-center gap-8 mb-16">
            <div className="w-2 h-16 bg-gradient-to-b from-teal to-caribbean" />
            <div>
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                Accelerate{" "}
                <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <FadeInSection key={benefit.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

