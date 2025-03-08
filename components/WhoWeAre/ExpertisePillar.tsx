/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Shield, Radio, Code2, Briefcase } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    title: "Communication Pioneers",
    description:
      "From analogue telephony to cutting-edge mobile networks, our experts have witnessed the evolution. They've connected continents, bridged cultures, and made the world a smaller, more interconnected place.",
    icon: Radio,
  },
  {
    title: "Cybersecurity Guardians",
    description:
      "In the shadows of cyberspace, they stand sentinel. Their battle scars are invisible, but their victories are tangible. They've thwarted threats, secured networks, and ensured digital sovereignty.",
    icon: Shield,
  },
  {
    title: "Software Architecture",
    description:
      "We specialize in crafting robust and forward-thinking software architectures. Our seasoned software architect possesses deep technical knowledge and decades of experience across all relevant domains. Welcome to a future where architecture isn't just a blueprint—it's the bedrock of success.",
    icon: Code2,
  },
  {
    title: "Consultancy",
    description:
      "Elysian Innovations is your trusted partner in navigating the complex landscape of technology and regulation. We specialize in crafting tailored strategies to drive digital transformation, optimize business operations, and ensure compliance with government regulations.",
    icon: Briefcase,
  },
]

export function ExpertisePillars() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 dark:text-white">
            Our Pillars of{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Expertise</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <FadeInSection key={pillar.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                        <pillar.icon className="w-8 h-8 text-teal dark:text-teal-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{pillar.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{pillar.description}</p>
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

