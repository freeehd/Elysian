'use client'

import { FadeInSection } from '@/components/FadeInSection'
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Efficiency",
    description: "A single codebase simplifies management and reduces effort."
  },
  {
    title: "Enhanced Security",
    description: "APIs enforce security protocols, controlling access without exposing entire databases."
  },
  {
    title: "Cost Efficient",
    description: "Fewer resources are needed for development and maintenance, cutting costs."
  },
  {
    title: "Improved Agility",
    description: "APIs provide quick data access and support dynamic development with caching and authorization."
  },
  {
    title: "Better Control",
    description: "Define detailed access policies for precise management."
  },
  {
    title: "Consistency",
    description: "Ensure a reliable experience with uniform features and availability for all users."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="flex items-center gap-8 mb-16">
            <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-indigo-600" />
            <div>
              <h2 className="text-4xl font-bold text-gray-800">
                Accelerate Innovation
              </h2>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <FadeInSection key={benefit.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

