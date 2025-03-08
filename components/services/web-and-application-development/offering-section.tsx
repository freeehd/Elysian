"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Pen, Smartphone, Monitor, Palette, FolderCog } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Pen,
    title: "Custom Web Development",
    description:
      "Create a unique online presence with our bespoke web development services. We tailor every aspect of your website to reflect your brand and engage your audience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Reach your customers on the go with our mobile app development services. We design and develop high-performance mobile apps for iOS and Android platforms.",
  },
  {
    icon: Monitor,
    title: "Web Application Development",
    description:
      "Transform your business processes with powerful web applications. Our team specializes in building secure, scalable, and high-performing web applications tailored to your requirements.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Deliver exceptional user experiences with our UI/UX design services. We focus on creating visually stunning and highly intuitive interfaces that keep users engaged.",
  },
  {
    icon: FolderCog,
    title: "Maintenance and Support",
    description:
      "Keep your websites and applications running smoothly with our maintenance and support services. We provide ongoing support to address any issues and implement updates.",
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
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">OUR OFFERING</span>
          </h2>
          <p className="mb-16 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            As a premier Web and Application Development firm, Elysian offers a comprehensive range of solutions
            tailored to your unique digital needs. Our services include, but are not limited to:
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

