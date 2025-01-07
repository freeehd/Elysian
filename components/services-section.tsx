'use client'

import { Box, Settings, GitBranch, Cloud, Cog, Code, Server } from 'lucide-react'
import Link from 'next/link'
import { FadeInSection } from "./FadeInSection"

const services = [
  {
    title: "API Development & Integration",
    description: "Streamline your digital ecosystem with seamless API solutions that connect systems, automate workflows, and enhance operational efficiency.",
    href: "/services/api-development",
    icon: Box
  },
  {
    title: "Application Modernization",
    description: "Transform legacy applications into modern, scalable solutions leveraging cutting-edge technologies and cloud-native architectures.",
    href: "/services/app-modernization",
    icon: Settings
  },
  {
    title: "DevOps",
    description: "Accelerate delivery and improve reliability with our comprehensive DevOps solutions, automating deployment and optimizing workflows.",
    href: "/services/devops",
    icon: GitBranch
  },
  {
    title: "Web and Application Development",
    description: "Build cutting-edge web and mobile applications tailored to your business needs, leveraging the latest technologies and best practices.",
    href: "/services/web-and-application-development",
    icon: Code
  },
  {
    title: "Cloud",
    description: "Leverage cloud capabilities with our comprehensive services including assessment, migration, disaster recovery, and performance optimization.",
    href: "/services/cloud",
    icon: Cloud
  },
  {
    title: "Managed Services",
    description: "Optimize operations and reduce costs with our managed services, providing expert oversight and maintenance of your IT infrastructure.",
    href: "/services/managed-services",
    icon: Cog
  },
  {
    title: "Software Development",
    description: "Create powerful, scalable software solutions tailored to your business needs, built with modern technologies and best practices.",
    href: "/services/software-development",
    icon: Code
  },
  {
    title: "Infrastructure Solutions",
    description: "Build robust, scalable infrastructure foundations that support your business growth and digital transformation initiatives.",
    href: "/services/infrastructure",
    icon: Server
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
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging advanced technologies and industry expertise, we deliver comprehensive solutions designed to accelerate innovation and drive sustainable growth.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-[#6fabd8] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{service.description}</p>
                <Link 
                  href={service.href}
                  className="text-[#3584C0] hover:text-[#6D28D9] dark:text-[#3584C0] dark:hover:text-[#C4B5FD] font-medium inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

