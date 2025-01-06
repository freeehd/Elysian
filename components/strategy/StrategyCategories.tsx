'use client'

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Map, Cpu, Shield } from 'lucide-react'

const categories = [
  {
    title: "IT Infrastructure Assessment",
    description: "We perform comprehensive assessments of your current IT infrastructure to identify strengths, weaknesses, and opportunities for improvement. This essential step ensures our strategies are based on a thorough understanding of your existing setup.",
    icon: Search
  },
  {
    title: "Roadmap Development",
    description: "Following our assessments, we develop detailed IT roadmaps that outline the necessary steps to achieve your strategic objectives. These roadmaps provide a clear direction, ensuring all initiatives align with your business goals.",
    icon: Map
  },
  {
    title: "Technology Selection and Integration",
    description: "We assist in selecting the right technologies tailored to your business needs and integrate them seamlessly into your existing systems. Our expertise ensures you adopt innovative solutions that boost efficiency and performance.",
    icon: Cpu
  },
  {
    title: "Future-Proofing Strategies",
    description: "Our strategies are crafted with an eye toward the future. We anticipate technological advancements and market trends, ensuring your IT infrastructure remains adaptable and resilient in a changing environment.",
    icon: Shield
  }
]

export function StrategyCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Categories of <span className="text-blue-600">Strategizing</span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <FadeInSection key={category.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 bg-opacity-10 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

