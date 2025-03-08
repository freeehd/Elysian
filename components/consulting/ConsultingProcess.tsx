"use client"

import { FadeInSection } from "../FadeInSection"
import { Search, Lightbulb, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery and Assessment",
    description:
      "We begin by understanding your unique needs and challenges through in-depth discussions and assessments of your current operations.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Based on our findings, we create tailored strategies that align with your business goals and outline clear steps for implementation.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Implementation and Support",
    description:
      "Our team manages the execution of the proposed solutions, ensuring a smooth integration with ongoing support to address any challenges that arise.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "After implementation, we continuously monitor performance and gather feedback to optimize processes and strategies for sustained success.",
    icon: LineChart,
  },
]

export function ConsultingProcess() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-teal to-caribbean text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Consulting Process</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <FadeInSection key={step.number}>
              <div className="relative group">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-white/80">{step.number}</span>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

