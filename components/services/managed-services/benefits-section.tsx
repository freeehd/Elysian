"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

const benefits = [
  {
    title: "Cost Efficiency",
    description:
      "Small businesses benefit from managed services' lower initial costs compared to starting from scratch. Avoiding the financial burden of hiring, training, and acquiring equipment is advantageous for new ventures.",
  },
  {
    title: "Scalability",
    description:
      "Managed services facilitate flexible system expansion or upgrades without the need for hiring and training additional staff. They ensure swift adaptation to changing resource requirements, surpassing in-house team responsiveness.",
  },
  {
    title: "Minimized Downtime",
    description:
      "Managed services efficiently handle the complex challenge of minimizing downtime, which in-house teams may lack the capacity or expertise to address effectively. Proactive prevention of downtime reduces associated costs.",
  },
  {
    title: "Data Compliance",
    description:
      "With managed services, you can conduct thorough reports and audits to ensure your organization meets all regulatory requirements, saving countless hours for your in-house team over the long term.",
  },
  {
    title: "Reduced Risk",
    description:
      "Managed IT services proactively minimize the risk of breaches by identifying vulnerabilities and implementing effective defenses to mitigate potential risks.",
  },
  {
    title: "Enhanced IT Expertise",
    description:
      "By leveraging managed services, businesses gain access to a dedicated team of IT professionals with specialized skills and knowledge. This expertise ensures that IT systems are managed and optimized to industry best practices.",
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
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

