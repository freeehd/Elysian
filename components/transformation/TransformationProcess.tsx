'use client'

import { FadeInSection } from "../FadeInSection"
import { ClipboardList, Rocket, Gauge, GraduationCap } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Assessment and Planning",
    description: "We begin with a thorough assessment of your current systems and processes, followed by the development of a detailed transformation plan.",
    icon: ClipboardList
  },
  {
    number: "02",
    title: "Implementation",
    description: "Our team of experts works closely with you to implement the transformation strategy, ensuring minimal disruption to your business operations.",
    icon: Rocket
  },
  {
    number: "03",
    title: "Optimization",
    description: "Post-implementation, we continuously monitor and optimize your systems to ensure they deliver maximum value.",
    icon: Gauge
  },
  {
    number: "04",
    title: "Support and Training",
    description: "We provide ongoing support and training to help your team adapt to new technologies and processes, ensuring long-term success.",
    icon: GraduationCap
  }
]

export function TransformationProcess() {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Transformation Process
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <FadeInSection key={step.number}>
              <div className="relative group">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-purple-200">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-purple-200" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-purple-100">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

