"use client"

import { FadeInSection } from "@/components/FadeInSection"

const steps = [
  {
    number: "01",
    title: "Assessment and Analysis",
    description:
      "We conduct a comprehensive assessment of your existing infrastructure and identify areas for improvement.",
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our experts design a customized datacenter solution tailored to your business needs and objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We deploy the solution efficiently, ensuring minimal disruption to your operations.",
  },
  {
    number: "04",
    title: "Testing and Optimization",
    description: "Rigorous testing is conducted to validate performance and optimize resource utilization.",
  },
  {
    number: "05",
    title: "Training and Support",
    description:
      "We provide training and ongoing support to empower your team and maximize the benefits of the datacenter solution.",
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

      <div className="relative mx-auto max-w-7xl">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Process</h2>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
              Our structured approach ensures the successful implementation of datacenter solutions:
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <FadeInSection key={step.number}>
              <div className="relative group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 shadow-lg">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-lg text-white/90">{step.description}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

