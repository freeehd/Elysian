'use client'

import { FadeInSection } from '@/components/FadeInSection'

const steps = [
  {
    number: "1",
    title: "Discovery And Analysis",
    description: "We start with an in-depth analysis of your business, including stakeholder interviews and a review of your current IT infrastructure. This helps us understand your unique needs and challenges."
  },
  {
    number: "2",
    title: "Strategic Planning",
    description: "We develop a customized strategic plan that addresses your specific requirements. This plan includes actionable recommendations and a timeline for implementation."
  },
  {
    number: "3",
    title: "Implementation Support",
    description: "We work closely with your team to implement the proposed solutions. Our consultants manage the process, ensuring that the transition is smooth and that your operations continue to run efficiently."
  },
  {
    number: "4",
    title: "Continuous Improvement",
    description: "We believe in the power of continuous improvement. After implementation, we offer ongoing support and regular reviews to ensure that your IT strategy evolves with your business needs."
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-violet-600 to-indigo-600">
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

