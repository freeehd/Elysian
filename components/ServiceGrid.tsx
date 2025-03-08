"use client"

import { BarChartIcon, LayoutIcon, LoopIcon, RocketIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { useState } from "react"
import SpotlightCard from "./ui/SpotlightCard"

const services = [
  {
    name: "Strategic Consulting",
    Icon: BarChartIcon,
    description:
      "Our expert consultants analyze your unique challenges, developing tailored solutions to boost efficiency and drive growth.",
    href: "/consulting",
    cta: "Learn More",
    image: "/images/service/1.png",
  },
  {
    name: "Future-Proof Strategy",
    Icon: LayoutIcon,
    description:
      "Navigate change with our data-driven strategies. We help you craft a robust vision aligned with your goals.",
    href: "/strategy",
    cta: "Explore Strategy",
    image: "/images/service/2.png",
  },
  {
    name: "Digital Transformation",
    Icon: LoopIcon,
    description:
      "Reimagine your business for the digital age. We integrate people, processes, and technology seamlessly.",
    href: "/transformation",
    cta: "Transform Now",
    image: "/images/service/3.png",
  },
  {
    name: "Innovation Consulting",
    Icon: RocketIcon,
    description:
      "Strategic innovation consulting to help your business stay ahead in the rapidly evolving technological landscape.",
    href: "/consulting",
    cta: "Innovate Today",
    image: "/images/service/4.png",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-teal-300/50 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            WHAT <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">WE DO</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide innovative solutions to help businesses thrive in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <SpotlightCard
              key={service.name}
              className="h-full border border-gray-100 dark:border-rich-black-300"
              spotlightColor="rgba(0, 128, 128, 0.15)"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                  <ServiceImage src={service.image} alt={service.name} />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal to-caribbean rounded-lg flex items-center justify-center mr-3 shadow-sm">
                        <service.Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  </div>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-teal hover:text-caribbean dark:text-teal-400 dark:hover:text-caribbean-400 transition-colors relative z-10 group"
                  >
                    {service.cta}
                    <svg
                      className="ml-2 w-4 h-4 group-hover:ml-3 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-grey-800/80 to-rich-black-300/80 dark:from-rich-black-200 dark:to-rich-black-300 flex items-center justify-center">
        <span className="text-grey-500 dark:text-grey-400">Image not available</span>
      </div>
    )
  }

  return (
    <>
      {/* Next.js Image (primary approach) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 hover:scale-110"
          onError={() => setError(true)}
        />
      </div>
    </>
  )
}

