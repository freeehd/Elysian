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
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-rich-black-100 dark:bg-rich-black-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <SpotlightCard key={service.name} className="h-full" spotlightColor="rgba(0, 128, 128, 0.2)">
              <div className="flex flex-col h-full">
                <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                  <ServiceImage src={service.image} alt={service.name} />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <service.Icon className="w-6 h-6 text-teal mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  </div>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-teal hover:text-caribbean transition-colors relative z-10"
                  >
                    {service.cta}
                    <svg
                      className="ml-2 w-4 h-4"
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
      <div className="absolute inset-0 bg-grey-800 dark:bg-rich-black-300 flex items-center justify-center">
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

