'use client'

import { FadeInSection } from '@/components/FadeInSection'
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Link2, Shield, FileCode2, FileText } from 'lucide-react'

const services = [
  {
    title: "API Designing",
    description: "We design precise, scalable APIs, adhering to industry best practices to ensure seamless interoperability and future-proofing.",
    icon: Code2,
    gradient: "from-violet-600 to-violet-800"
  },
  {
    title: "API Integration",
    description: "We seamlessly integrate advanced APIs into your infrastructure, enhancing efficiency and enabling smooth data exchange.",
    icon: Link2,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    title: "API Versioning & Lifecycle Management",
    description: "We manage API versions efficiently, ensuring smooth transitions with minimal disruption and controlled deprecation.",
    icon: FileCode2,
    gradient: "from-indigo-600 to-indigo-800"
  },
  {
    title: "API Security & Authentication",
    description: "We secure your APIs against unauthorized access and data breaches, ensuring robust security and regulatory compliance.",
    icon: Shield,
    gradient: "from-violet-600 to-violet-800"
  },
  {
    title: "API Documentation",
    description: "We provide clear, user-friendly API documentation to accelerate adoption and simplify integration.",
    icon: FileText,
    gradient: "from-blue-600 to-blue-800"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-[#3584C0]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            As a leading API development firm, we offer comprehensive services to meet your specific needs
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

