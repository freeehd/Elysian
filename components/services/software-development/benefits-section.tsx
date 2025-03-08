"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

const benefits = [
  {
    title: "Durable firmware",
    description: "Our firmware ensures enhanced security, swift connectivity, expanded storage, and peak performance.",
  },
  {
    title: "Premium-grade coding",
    description:
      "Access meticulously crafted code rigorously tested to meet project specifications and compliance standards, including MISRA C, C++, and more.",
  },
  {
    title: "Robust Security Measures",
    description:
      "Employing fortified network protocols, robust data encryption, and formidable firewalls, we ensure continuous security and peace of mind for your operations.",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

