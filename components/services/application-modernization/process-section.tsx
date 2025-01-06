const steps = [
  {
    number: "1",
    title: "Assessment",
    description: "We start with a thorough evaluation of existing applications to identify strengths, weaknesses, and opportunities for modernization."
  },
  {
    number: "2",
    title: "Strategy Development",
    description: "Our team will create a tailored modernization strategy that outlines the best approach, whether it's re-platforming, re-engineering, or migrating to the cloud."
  },
  {
    number: "3",
    title: "Implementation",
    description: "Our team executes the modernization plan by transforming and integrating applications while ensuring minimal disruption to operations."
  },
  {
    number: "4",
    title: "Support And Optimization",
    description: "We provide ongoing support and optimization to ensure the modernized applications perform efficiently and adapt to evolving business needs."
  }
]

export function ProcessSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">Our Process</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <span className="text-3xl font-bold text-indigo-600">{step.number}</span>
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

