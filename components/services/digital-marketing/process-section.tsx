"use client"

import { FadeInSection } from "@/components/FadeInSection"

const steps = [
  {
    number: "1",
    title: "Research & Strategy",
    description:
      "We begin with comprehensive market research, competitor analysis, and audience profiling to develop a data-driven marketing strategy aligned with your business objectives.",
  },
  {
    number: "2",
    title: "Planning & Implementation",
    description:
      "Our team creates detailed campaign plans with clear KPIs, then executes across chosen channels with meticulous attention to detail and brand consistency.",
  },
  {
    number: "3",
    title: "Monitoring & Optimization",
    description:
      "We continuously track performance metrics, conduct A/B testing, and make data-driven adjustments to maximize campaign effectiveness and ROI.",
  },
  {
    number: "4",
    title: "Analysis & Reporting",
    description:
      "Regular comprehensive reports provide transparent insights into campaign performance, with actionable recommendations for ongoing strategy refinement and growth opportunities.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-teal to-caribbean text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold text-white">Our Process</h2>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <FadeInSection key={step.number}>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-lg text-white/90">{step.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
