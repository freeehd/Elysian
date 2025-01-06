'use client'

import Image from "next/image"
import Link from "next/link"
import { FadeInSection } from "./FadeInSection"

const services = [
  {
    title: "API Development & Integration",
    description: "Streamline your digital ecosystem with seamless API solutions that connect systems, automate workflows, and enhance operational efficiency.",
    image: "/images/api-development.jpg",
    href: "/services/api-development"
  },
  {
    title: "Application Modernization",
    description: "Transform legacy applications into modern, scalable solutions leveraging cutting-edge technologies and cloud-native architectures.",
    image: "/images/app-modernization.jpg",
    href: "/services/app-modernization"
  },
  {
    title: "DevOps",
    description: "Accelerate delivery and improve reliability with our comprehensive DevOps solutions, automating deployment and optimizing workflows.",
    image: "/images/devops.jpg",
    href: "/services/devops"
  },
  {
    title: "Resource Augmentation",
    description: "Scale your team efficiently with our skilled professionals, providing flexible staffing solutions for your project needs.",
    image: "/images/resource-augmentation.jpg",
    href: "/services/resource-augmentation"
  },
  {
    title: "Cloud",
    description: "Leverage cloud capabilities with our comprehensive services including assessment, migration, disaster recovery, and performance optimization.",
    image: "/images/cloud.jpg",
    href: "/services/cloud"
  },
  {
    title: "Managed Services",
    description: "Optimize operations and reduce costs with our managed services, providing expert oversight and maintenance of your IT infrastructure.",
    image: "/images/managed-services.jpg",
    href: "/services/managed-services"
  },
  {
    title: "Software Development",
    description: "Create powerful, scalable software solutions tailored to your business needs, built with modern technologies and best practices.",
    image: "/images/software-development.jpg",
    href: "/services/software-development"
  },
  {
    title: "Infrastructure Solutions",
    description: "Build robust, scalable infrastructure foundations that support your business growth and digital transformation initiatives.",
    image: "/images/infrastructure.jpg",
    href: "/services/infrastructure"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              OUR <span className="text-[#6fabd8] dark:text-[#6fabd8]">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging advanced technologies and industry expertise, we deliver comprehensive solutions designed to accelerate innovation and drive sustainable growth.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <div className="group">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <Link 
                  href={service.href}
                  className="text-[#7C3AED] hover:text-[#6D28D9] font-medium inline-flex items-center"
                >
                  Learn More
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

