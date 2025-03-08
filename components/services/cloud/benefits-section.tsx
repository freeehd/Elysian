import { Card, CardContent } from "@/components/ui/card"
import { Cloud } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const benefits = [
  {
    title: "Infrastructure Provisioning",
    description:
      "With infrastructure as code, managing resources becomes simple and accelerates cloud adoption across your organization.",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Automation tools enhance efficiency and reduce waste, helping you achieve a higher ROI and better control of spending.",
  },
  {
    title: "Enhanced Security",
    description:
      "Our cloud services implement robust security measures to protect your data and applications, ensuring compliance with industry standards.",
  },
  {
    title: "Cloud Assessment",
    description:
      "Advanced tools facilitate a quick and secure move to public cloud environments, tailored to meet your organization's needs.",
  },
  {
    title: "Cloud system of Records",
    description:
      "Consistent patterns at an enterprise scale provide visibility into cloud usage, improving governance and resource management.",
  },
  {
    title: "Disaster Recovery",
    description:
      "We provide reliable backup and disaster recovery solutions, ensuring your data is safe and can be quickly restored in case of an incident.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="mb-16 flex items-center gap-8">
            <div className="h-16 w-2 bg-gradient-to-b from-teal to-caribbean" />
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-teal to-caribbean rounded-lg flex items-center justify-center mb-3 shadow-sm">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                UNLEASH{" "}
                <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                  CLOUD POTENTIAL
                </span>
              </h2>
            </div>
          </div>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <FadeInSection key={benefit.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

