"use client"

import { FadeInSection } from "@/components/FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Link2, Shield, FileCode2, FileText } from "lucide-react"

const services = [
  {
    title: "API Designing",
    description:
      "We design precise, scalable APIs, adhering to industry best practices to ensure seamless interoperability and future-proofing.",
    icon: Code2,
    gradient: "from-teal to-caribbean",
  },
  {
    title: "API Integration",
    description:
      "We seamlessly integrate advanced APIs into your infrastructure, enhancing efficiency and enabling smooth data exchange.",
    icon: Link2,
    gradient: "from-teal to-caribbean",
  },
  {
    title: "API Versioning & Lifecycle Management",
    description:
      "We manage API versions efficiently, ensuring smooth transitions with minimal disruption and controlled deprecation.",
    icon: FileCode2,
    gradient: "from-teal to-caribbean",
  },
  {
    title: "API Security & Authentication",
    description:
      "We secure your APIs against unauthorized access and data breaches, ensuring robust security and regulatory compliance.",
    icon: Shield,
    gradient: "from-teal to-caribbean",
  },
  {
    title: "API Documentation",
    description: "We provide clear, user-friendly API documentation to accelerate adoption and simplify integration.",
    icon: FileText,
    gradient: "from-teal to-caribbean",
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

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl">
            As a leading API development firm, we offer comprehensive services to meet your specific needs
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient}`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

