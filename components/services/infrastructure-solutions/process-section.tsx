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
    <section className="py-24 bg-[#5431FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">Our Process</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <span className="text-3xl font-bold text-[#5431FF]">{step.number}</span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-lg text-white/90">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

