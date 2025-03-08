"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Network, Monitor, Lock, Folder } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "We help you leverage the power of the cloud to improve efficiency, scalability, and cost-effectiveness. We integrate on-premises infrastructure with public and private clouds. Elysian also implements robust DR solutions to ensure business continuity.",
  },
  {
    icon: Network,
    title: "Network Design and Management",
    description:
      "Build a secure and efficient network infrastructure with our expert design and management services. We ensure your network is reliable, scalable, and secure.",
  },
  {
    icon: Monitor,
    title: "Data Center Services",
    description:
      "Optimize your data center operations with our comprehensive services. We provide everything from design and deployment to ongoing management and support.",
  },
  {
    icon: Lock,
    title: "IT Security",
    description:
      "Protect your IT infrastructure from evolving threats with our robust security solutions. We offer comprehensive security services to safeguard your data and systems.",
  },
  {
    icon: Folder,
    title: "Managed IT Services",
    description:
      "Focus on your core business while we manage your IT infrastructure. Our managed services ensure your systems are always up-to-date, secure, and performing optimally.",
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
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Offering</span>
          </h2>
          <p className="mb-16 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            We specialize in delivering top-notch Infrastructure Services designed to address your specific
            requirements. Our broad range of services encompasses, but is not limited to:
          </p>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

