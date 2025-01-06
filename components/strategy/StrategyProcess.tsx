'use client'

import { FadeInSection } from "../FadeInSection"
import { Search, Lightbulb, FileCheck, LineChart } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Discovery and Analysis",
    description: "We begin by conducting a thorough analysis of your business goals and current IT landscape to identify strengths, weaknesses, and opportunities.",
    icon: Search
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on our findings, we craft tailored strategies that align with your objectives, outlining clear steps to achieve your desired outcomes.",
    icon: Lightbulb
  },
  {
    number: "03",
    title: "Implementation Planning",
    description: "We develop a detailed implementation plan, ensuring all strategies are actionable and integrated seamlessly into your existing processes.",
    icon: FileCheck
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description: "After implementation, we continuously monitor progress and gather feedback to optimize strategies, ensuring sustained success and alignment with your evolving needs.",
    icon: LineChart
  }
]

export function StrategyProcess() {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Strategy Process
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <FadeInSection key={step.number}>
              <div className="relative group">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-blue-200">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-blue-200" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-blue-100">
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

