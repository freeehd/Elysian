import { FadeInSection } from "@/components/FadeInSection"

const steps = [
  {
    number: "1",
    title: "Assessment",
    description:
      "We start with a thorough evaluation of existing applications to identify strengths, weaknesses, and opportunities for modernization.",
  },
  {
    number: "2",
    title: "Strategy Development",
    description:
      "Our team will create a tailored modernization strategy that outlines the best approach, whether it's re-platforming, re-engineering, or migrating to the cloud.",
  },
  {
    number: "3",
    title: "Implementation",
    description:
      "Our team executes the modernization plan by transforming and integrating applications while ensuring minimal disruption to operations.",
  },
  {
    number: "4",
    title: "Support And Optimization",
    description:
      "We provide ongoing support and optimization to ensure the modernized applications perform efficiently and adapt to evolving business needs.",
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

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold text-white">Our Process</h2>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <FadeInSection key={step.number}>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-lg text-white/90">{step.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

