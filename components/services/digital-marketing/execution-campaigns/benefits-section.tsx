"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

const benefits = [
  {
    title: "Rapid Implementation",
    description:
      "Our execution-focused approach ensures your marketing initiatives are implemented quickly and efficiently, allowing you to capitalize on market opportunities.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our content and copywriting services deliver compelling, on-brand messaging that captures attention and drives engagement with your target audience.",
  },
  {
    title: "Performance Optimization",
    description:
      "We continuously monitor and optimize your campaigns, making data-driven adjustments to improve performance and maximize your return on investment.",
  },
  {
    title: "Measurable Results",
    description:
      "Our campaigns are designed with clear KPIs and comprehensive tracking, providing transparent reporting and demonstrable ROI for your marketing spend.",
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

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="mb-16 flex items-center gap-8">
            <div className="h-16 w-2 bg-gradient-to-b from-teal to-caribbean" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Benefits</span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <FadeInSection key={benefit.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
