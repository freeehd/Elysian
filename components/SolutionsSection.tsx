'use client'

import { Network, Server, Target } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: "Automation Excellence",
    description: "Transform your business operations with our state-of-the-art automation solutions. We optimize workflows, reduce operational costs, and accelerate digital transformation, enabling you to focus on strategic growth initiatives.",
    icon: Network,
    href: "/solutions/automation"
  },
  {
    title: "Data Infrastructure",
    description: "Experience enterprise-grade data center solutions that elevate your operational capabilities. Our robust infrastructure services ensure data security, business continuity, and seamless scalability to meet your evolving needs.",
    icon: Server,
    href: "/solutions/datacenter"
  },
  {
    title: "Enterprise Solutions",
    description: "Unify your business processes with our comprehensive enterprise solutions. From financial management to supply chain optimization, we provide integrated tools that drive efficiency, visibility, and informed decision-making.",
    icon: Target,
    href: "/solutions/erp"
  }
]

export default function SolutionsSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
        <div className="transform rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-96 h-96 bg-gradient-to-r from-[#3584C0]/30 to-[#6fabd8]/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#3584C0]">ELYSIAN</span>{' '}
            <span className="text-[#6fabd8]">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover innovative solutions that drive business transformation and sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.title} 
              className="bg-white rounded-lg p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#3584C0] rounded-lg flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {solution.description}
              </p>
              <Link 
                href={solution.href}
                className="text-[#3584C0] hover:text-[#6fabd8] font-medium inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

