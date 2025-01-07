'use client'

import { FadeInSection } from '@/components/FadeInSection'

const steps = [
  {
    number: "01",
    title: "Discovery and Analysis",
    description: "We conduct a thorough analysis of your business requirements and processes to identify areas for improvement."
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our experts design a customized ERP solution tailored to your specific needs and objectives."
  },
  {
    number: "03",
    title: "Implementation",
    description: "We deploy the ERP system efficiently, ensuring minimal disruption to your operations."
  },
  {
    number: "04",
    title: "Testing and Optimization",
    description: "Rigorous testing is conducted to ensure optimal performance and continuous improvements."
  },
  {
    number: "05",
    title: "Training and Change Management",
    description: "We provide comprehensive training and change management support to facilitate smooth adoption of the new ERP system."
  },
  {
    number: "06",
    title: "Post-Implementation Support",
    description: "Our team provides ongoing support and maintenance to ensure the long-term success of your ERP solution."
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

