"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Monitor, FolderGit2, Shield, Network } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const services = [
  {
    icon: Rocket,
    title: "ERP Implementation",
    description: "Customized implementation of leading ERP systems such as SAP, Oracle, Microsoft Dynamics, and more.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Analysis and optimization of business processes to ensure maximum efficiency and effectiveness",
  },
  {
    icon: Monitor,
    title: "Integration Services",
    description:
      "Seamless integration of ERP systems with existing software applications, databases, and third-party services.",
  },
  {
    icon: FolderGit2,
    title: "Customization and Development",
    description: "Tailored customization and development services to adapt ERP solutions to your unique requirements.",
  },
  {
    icon: Shield,
    title: "Training and Support",
    description:
      "Comprehensive training and ongoing support to empower your team and maximize the benefits of ERP implementation.",
  },
  {
    icon: Network,
    title: "Upgrade and Migration Services",
    description:
      "Upgrade and migration services to ensure your ERP system remains up-to-date and aligned with your business objectives.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">OUR SERVICES</span>
          </h2>
          <p className="mb-16 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Our offerings encompass a wide array of solutions, including but not limited to:
          </p>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-teal to-caribbean">
                <CardContent className="p-0">
                  <div className=" text-white p-8 h-full">
                    <service.icon className="w-12 h-12 mb-6 text-white" />
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-white/90 text-lg">{service.description}</p>
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

