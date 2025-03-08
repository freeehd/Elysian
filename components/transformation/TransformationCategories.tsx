"use client"

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { LayoutGrid, CircuitBoard, Cpu, BarChart3 } from "lucide-react"

const categories = [
  {
    title: "Digital Strategy Development",
    description:
      "We create robust digital strategies that align with your business goals. By outlining clear paths for transformation, we ensure your initiatives are focused and effective.",
    icon: LayoutGrid,
  },
  {
    title: "Technology Integration",
    description:
      "We seamlessly integrate cutting-edge technologies into your existing infrastructure. Our team ensures that new tools enhance performance and scalability without disrupting your operations.",
    icon: CircuitBoard,
  },
  {
    title: "Process Automation",
    description:
      "We optimize your operations with automated processes designed to increase efficiency and reduce costs. By identifying areas for automation, we help streamline workflows and boost productivity.",
    icon: Cpu,
  },
  {
    title: "Data Analytics and Insights",
    description:
      "We leverage data to provide actionable insights that inform decision-making. Our analytics solutions drive strategic initiatives and ensure your business remains competitive and innovative.",
    icon: BarChart3,
  },
]

export function TransformationCategories() {
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
                Transformation
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

