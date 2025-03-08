"use client"

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Settings2, Shield, Cpu, Users } from "lucide-react"

const categories = [
  {
    title: "Business Process Optimization",
    description:
      "We streamline operations and enhance efficiency through our optimization services. By identifying bottlenecks and recommending improvements, we implement solutions that significantly boost productivity across your organization.",
    icon: Settings2,
  },
  {
    title: "Risk Management and Compliance",
    description:
      "We ensure your IT systems meet industry regulations and standards through thorough risk assessments. Our team develops effective mitigation strategies and supports you in maintaining compliance throughout your operations.",
    icon: Shield,
  },
  {
    title: "Technology Implementation",
    description:
      "We facilitate the seamless integration of new technologies into your existing infrastructure. Our team manages the entire implementation process, from planning to execution, ensuring minimal disruption to your daily operations.",
    icon: Cpu,
  },
  {
    title: "Change Management",
    description:
      "We enable smooth transitions with our change management expertise. By supporting your team through organizational changes, we equip them to effectively embrace new technologies and processes.",
    icon: Users,
  },
]

export function ConsultingCategories() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Categories of{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Consulting</span>
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

