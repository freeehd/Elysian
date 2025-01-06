const steps = [
  {
    number: "1",
    title: "Assessment",
    description: "We start with conducting a comprehensive evaluation of your existing infrastructure and cloud readiness to identify opportunities and challenges."
  },
  {
    number: "2",
    title: "Strategy Development",
    description: "Our team creates a tailored cloud strategy that aligns with your business goals, outlining the best approach for implementation."
  },
  {
    number: "3",
    title: "Implementation",
    description: "We execute the cloud strategy by provisioning resources, migrating applications, and integrating necessary services to ensure a smooth transition."
  },
  {
    number: "4",
    title: "Support And Optimization",
    description: "Our team will continuously monitor and optimize cloud performance while providing ongoing support to ensure your cloud environment meets evolving needs."
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

