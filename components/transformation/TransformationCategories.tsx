'use client'

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { LayoutGrid, CircuitBoard, Cpu, BarChart3 } from 'lucide-react'

const categories = [
  {
    title: "Digital Strategy Development",
    description: "We create robust digital strategies that align with your business goals. By outlining clear paths for transformation, we ensure your initiatives are focused and effective.",
    icon: LayoutGrid
  },
  {
    title: "Technology Integration",
    description: "We seamlessly integrate cutting-edge technologies into your existing infrastructure. Our team ensures that new tools enhance performance and scalability without disrupting your operations.",
    icon: CircuitBoard
  },
  {
    title: "Process Automation",
    description: "We optimize your operations with automated processes designed to increase efficiency and reduce costs. By identifying areas for automation, we help streamline workflows and boost productivity.",
    icon: Cpu
  },
  {
    title: "Data Analytics and Insights",
    description: "We leverage data to provide actionable insights that inform decision-making. Our analytics solutions drive strategic initiatives and ensure your business remains competitive and innovative.",
    icon: BarChart3
  }
]

export function TransformationCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Categories of <span className="text-[#3584C0]">Transformation</span>
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
                        <category.icon className="w-6 h-6 text-[#3584C0]" />
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

