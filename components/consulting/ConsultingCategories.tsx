'use client'

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Settings2, Shield, Cpu, Users } from 'lucide-react'

const categories = [
  {
    title: "Business Process Optimization",
    description: "We streamline operations and enhance efficiency through our optimization services. By identifying bottlenecks and recommending improvements, we implement solutions that significantly boost productivity across your organization.",
    icon: Settings2
  },
  {
    title: "Risk Management and Compliance",
    description: "We ensure your IT systems meet industry regulations and standards through thorough risk assessments. Our team develops effective mitigation strategies and supports you in maintaining compliance throughout your operations.",
    icon: Shield
  },
  {
    title: "Technology Implementation",
    description: "We facilitate the seamless integration of new technologies into your existing infrastructure. Our team manages the entire implementation process, from planning to execution, ensuring minimal disruption to your daily operations.",
    icon: Cpu
  },
  {
    title: "Change Management",
    description: "We enable smooth transitions with our change management expertise. By supporting your team through organizational changes, we equip them to effectively embrace new technologies and processes.",
    icon: Users
  }
]

export function ConsultingCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Categories of <span className="text-[#3584C0]">Consulting</span>
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
                      <div className="w-12 h-12 bg-purple-600 bg-opacity-10 rounded-xl flex items-center justify-center">
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

