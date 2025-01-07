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
    <section className="py-24 bg-[#7F3AFF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="mb-16 text-center text-4xl font-bold text-white">OUR PROCESS</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <span className="text-3xl font-bold text-[#3584C0]">{step.number}</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-lg text-white/90">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-0.5 bg-white/20 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

