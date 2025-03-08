"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Monitor, Lock } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Rocket,
    title: "Enterprise Software Development",
    description:
      "At Elysian Innovation, we specialize in tailored enterprise software development that meets your specific business needs. With a proven track record, we focus on optimizing operations, enhancing efficiency, and ensuring success through our comprehensive ERP software solutions.",
  },
  {
    icon: Settings,
    title: "Software Support & Maintenance",
    description:
      "We provide proactive monitoring and timely upgrades to optimize your software's performance, minimizing downtime and significantly boosting productivity levels.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "Elysian Innovation excels in crafting exceptional designs that bring your business ideas to life, ensuring a memorable user experience. From initial concept sketches and wireframes to refined high-fidelity designs and interactive prototypes, we cover all your UI/UX needs.",
  },
  {
    icon: Lock,
    title: "Product Testing & QA",
    description:
      "We handle comprehensive testing, continuous monitoring, and ongoing maintenance for your products. With our expertise in managing these critical aspects, you can focus on revenue growth, assured of secure and optimized performance.",
  },
]

export function OfferingSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <h2 className="mb-4 text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            As an industry leader in application modernization, we deliver a full range of services to support your
            objectives. Our services include:
          </p>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2">
          {offerings.map((offering) => (
            <FadeInSection key={offering.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal to-caribbean">
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{offering.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

