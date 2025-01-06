const steps = [
  {
    number: "1",
    title: "Discovery And Planning",
    description: "We begin by understanding your business needs and project requirements through detailed discussions and analysis."
  },
  {
    number: "2",
    title: "Design And Development",
    description: "Our expert team crafts a tailored solution, focusing on UI/UX design and efficient software development to meet your specifications."
  },
  {
    number: "3",
    title: "Testing And QA",
    description: "Rigorous testing ensures the functionality, performance, and security of your software, guaranteeing a reliable end product."
  },
  {
    number: "4",
    title: "Deployment And Support",
    description: "We deploy the software in your environment and provide ongoing support, including maintenance and updates, to ensure continuous operation and user satisfaction."
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

