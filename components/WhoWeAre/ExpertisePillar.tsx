/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Shield, Radio, Code2, Briefcase } from 'lucide-react'
import { FadeInSection } from '@/components/FadeInSection'
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    title: "Communication Pioneers",
    description: "From analogue telephony to cutting-edge mobile networks, our experts have witnessed the evolution. They've connected continents, bridged cultures, and made the world a smaller, more interconnected place.",
    icon: Radio
  },
  {
    title: "Cybersecurity Guardians",
    description: "In the shadows of cyberspace, they stand sentinel. Their battle scars are invisible, but their victories are tangible. They've thwarted threats, secured networks, and ensured digital sovereignty.",
    icon: Shield
  },
  {
    title: "Software Architecture",
    description: "We specialize in crafting robust and forward-thinking software architectures. Our seasoned software architect possesses deep technical knowledge and decades of experience across all relevant domains. Welcome to a future where architecture isn't just a blueprint—it's the bedrock of success.",
    icon: Code2
  },
  {
    title: "Consultancy",
    description: "Elysian Innovations is your trusted partner in navigating the complex landscape of technology and regulation. We specialize in crafting tailored strategies to drive digital transformation, optimize business operations, and ensure compliance with government regulations.",
    icon: Briefcase
  }
]

export function ExpertisePillars() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            Our Pillars of <span className="text-[#3584C0]">Expertise</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pillars.map((pillar, index) => (
            <FadeInSection key={pillar.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#3584C0] bg-opacity-10 rounded-xl flex items-center justify-center">
                        <pillar.icon className="w-8 h-8 text-[#3584C0]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {pillar.description}
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

