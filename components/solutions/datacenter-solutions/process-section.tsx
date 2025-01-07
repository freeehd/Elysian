'use client'

import { FadeInSection } from '@/components/FadeInSection'

const steps = [
  {
    number: "01",
    title: "Assessment and Analysis",
    description: "We conduct a comprehensive assessment of your existing infrastructure and identify areas for improvement."
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our experts design a customized datacenter solution tailored to your business needs and objectives."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We deploy the solution efficiently, ensuring minimal disruption to your operations."
  },
  {
    number: "04",
    title: "Testing and Optimization",
    description: "Rigorous testing is conducted to validate performance and optimize resource utilization."
  },
  {
    number: "05",
    title: "Training and Support",
    description: "We provide training and ongoing support to empower your team and maximize the benefits of the datacenter solution."
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#7F3AFF] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 bottom-0">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path
              d="M150 300c82.843 0 150-67.157 150-150S232.843 0 150 0 0 67.157 0 150s67.157 150 150 150z"
              fill="url(#paint0_radial)"
              fillOpacity=".2"
            />
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(45) scale(424.264)"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Our Process</h2>
            <p className="mt-4 text-lg text-white/90">
              Our structured approach ensures the successful implementation of automation solutions:
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <div className="text-xl font-bold text-white/60">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-lg text-white/90">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

