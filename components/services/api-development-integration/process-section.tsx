/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { FadeInSection } from '@/components/FadeInSection'

const steps = [
  {
    number: "1",
    title: "Assessment",
    description: "Identify your business goals and API requirements."
  },
  {
    number: "2",
    title: "Development",
    description: "Develop and rigorously test custom APIs."
  },
  {
    number: "3",
    title: "Integration",
    description: "Integrate APIs seamlessly with your systems."
  },
  {
    number: "4",
    title: "Deployment",
    description: "Deploy the API and ensure ongoing support."
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Our Process
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeInSection key={step.number}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                  <span className="text-3xl font-bold text-indigo-600">{step.number}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

