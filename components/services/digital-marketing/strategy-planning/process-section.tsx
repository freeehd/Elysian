"use client"

import { FadeInSection } from "@/components/FadeInSection"

const steps = [
  {
    number: "1",
    title: "Research & Analysis",
    description:
      "We begin with comprehensive market research, competitor analysis, and audience profiling to understand your unique position and opportunities in the digital landscape.",
  },
  {
    number: "2",
    title: "Strategy Development",
    description:
      "Based on our research, we create detailed marketing strategies with clear objectives, KPIs, and tactical recommendations tailored to your business goals.",
  },
  {
    number: "3",
    title: "Planning & Roadmapping",
    description:
      "We develop comprehensive implementation plans with timelines, resource allocation, and milestone tracking to ensure clear direction for your marketing activities.",
  },
  {
    number: "4",
    title: "Measurement Framework",
    description:
      "We establish robust analytics and reporting frameworks to track performance, demonstrate ROI, and provide actionable insights for continuous improvement.",
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
