"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Monitor, LayoutGrid, Network } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Rocket,
    title: "Infrastructure Support",
    description: "Enable your teams to focus on strategic initiatives rather than routine infrastructure tasks.",
  },
  {
    icon: Settings,
    title: "Application Support",
    description:
      "ASaaS encompasses a range of support activities, including troubleshooting, bug fixes, performance monitoring, and updates.",
  },
  {
    icon: Monitor,
    title: "Cloud Migration",
    description:
      "Seamless transition of an organization's digital assets, applications, and data to cloud environments.",
  },
  {
    icon: LayoutGrid,
    title: "Design and Implementation Services",
    description:
      "We leverage a vendor agnostic approach and provide design and implementation services for servers, storage, virtualization, containerization, database, middleware.",
  },
  {
    icon: Network,
    title: "Network Services",
    description:
      "We offer top-quality network services and our certified engineers and round-the-clock monitoring system guarantee your infrastructure is healthy, highly available, and performing well.",
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
            Elysian Innovation provides a wide range of customized solutions designed to align with your specific goals.
            Our services include:
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

