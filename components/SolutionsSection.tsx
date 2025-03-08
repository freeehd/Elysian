"use client"

import { Network, Server, Target } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const solutions = [
  {
    title: "Automation Excellence",
    description:
      "Transform your business operations with our state-of-the-art automation solutions. We optimize workflows, reduce operational costs, and accelerate digital transformation, enabling you to focus on strategic growth initiatives.",
    icon: Network,
    href: "/solutions/automation",
  },
  {
    title: "Data Infrastructure",
    description:
      "Experience enterprise-grade data center solutions that elevate your operational capabilities. Our robust infrastructure services ensure data security, business continuity, and seamless scalability to meet your evolving needs.",
    icon: Server,
    href: "/solutions/datacenter",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Unify your business processes with our comprehensive enterprise solutions. From financial management to supply chain optimization, we provide integrated tools that drive efficiency, visibility, and informed decision-making.",
    icon: Target,
    href: "/solutions/erp",
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
            ELYSIAN SOLUTIONS
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover innovative solutions that drive business transformation and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-caribbean/20 dark:from-teal/10 dark:to-caribbean/10 rounded-xl transform scale-[0.98] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="bg-white dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative z-10 h-full flex flex-col">
                <div className="mb-6 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal to-caribbean rounded-lg flex items-center justify-center shadow-md">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900 dark:text-white">{solution.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                  {solution.description}
                </p>

                <Link
                  href={solution.href}
                  className="inline-flex items-center text-teal hover:text-caribbean dark:text-teal-400 dark:hover:text-caribbean-400 font-medium group-hover:translate-x-1 transition-transform duration-300"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

