"use client"

import { Box, Settings, GitBranch, Cloud, Cog, Code, Server } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "./FadeInSection"

const services = [
  {
    title: "API Development & Integration",
    description:
      "Streamline your digital ecosystem with seamless API solutions that connect systems, automate workflows, and enhance operational efficiency.",
    href: "/services/api-development",
    icon: Box,
  },
  {
    title: "Application Modernization",
    description:
      "Transform legacy applications into modern, scalable solutions leveraging cutting-edge technologies and cloud-native architectures.",
    href: "/services/app-modernization",
    icon: Settings,
  },
  {
    title: "DevOps",
    description:
      "Accelerate delivery and improve reliability with our comprehensive DevOps solutions, automating deployment and optimizing workflows.",
    href: "/services/devops",
    icon: GitBranch,
  },
  {
    title: "Web and Application Development",
    description:
      "Build cutting-edge web and mobile applications tailored to your business needs, leveraging the latest technologies and best practices.",
    href: "/services/web-and-application-development",
    icon: Code,
  },
  {
    title: "Cloud",
    description:
      "Leverage cloud capabilities with our comprehensive services including assessment, migration, disaster recovery, and performance optimization.",
    href: "/services/cloud",
    icon: Cloud,
  },
  {
    title: "Managed Services",
    description:
      "Optimize operations and reduce costs with our managed services, providing expert oversight and maintenance of your IT infrastructure.",
    href: "/services/managed-services",
    icon: Cog,
  },
  {
    title: "Software Development",
    description:
      "Create powerful, scalable software solutions tailored to your business needs, built with modern technologies and best practices.",
    href: "/services/software-development",
    icon: Code,
  },
  {
    title: "Infrastructure Solutions",
    description:
      "Build robust, scalable infrastructure foundations that support your business growth and digital transformation initiatives.",
    href: "/services/infrastructure",
    icon: Server,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              OUR{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging advanced technologies and industry expertise, we deliver comprehensive solutions designed to
              accelerate innovation and drive sustainable growth.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <div className="group bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-caribbean/10 dark:from-teal/5 dark:to-caribbean/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="mb-4 flex-grow relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal to-caribbean rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{service.description}</p>
                </div>
                <Link
                  href={service.href}
                  className="text-teal hover:text-caribbean dark:text-teal-400 dark:hover:text-caribbean-400 font-medium inline-flex items-center mt-auto relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:ml-3 transition-all duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
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

