"use client"

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Map, Cpu, Shield } from "lucide-react"

const categories = [
  {
    title: "IT Infrastructure Assessment",
    description:
      "We perform comprehensive assessments of your current IT infrastructure to identify strengths, weaknesses, and opportunities for improvement. This essential step ensures our strategies are based on a thorough understanding of your existing setup.",
    icon: Search,
  },
  {
    title: "Roadmap Development",
    description:
      "Following our assessments, we develop detailed IT roadmaps that outline the necessary steps to achieve your strategic objectives. These roadmaps provide a clear direction, ensuring all initiatives align with your business goals.",
    icon: Map,
  },
  {
    title: "Technology Selection and Integration",
    description:
      "We assist in selecting the right technologies tailored to your business needs and integrate them seamlessly into your existing systems. Our expertise ensures you adopt innovative solutions that boost efficiency and performance.",
    icon: Cpu,
  },
  {
    title: "Future-Proofing Strategies",
    description:
      "Our strategies are crafted with an eye toward the future. We anticipate technological advancements and market trends, ensuring your IT infrastructure remains adaptable and resilient in a changing environment.",
    icon: Shield,
  },
]

export function StrategyCategories() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Categories of{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                Strategizing
              </span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <FadeInSection key={category.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                        <category.icon className="w-6 h-6 text-teal dark:text-teal-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
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

