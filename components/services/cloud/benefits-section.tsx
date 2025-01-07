import { Card, CardContent } from "@/components/ui/card"
import { Cloud } from 'lucide-react'

const benefits = [
  {
    title: "Infrastructure Provisioning",
    description: "With infrastructure as code, managing resources becomes simple and accelerates cloud adoption across your organization."
  },
  {
    title: "Cloud Cost Optimization",
    description: "Automation tools enhance efficiency and reduce waste, helping you achieve a higher ROI and better control of spending."
  },
  {
    title: "Enhanced Security",
    description: "Our cloud services implement robust security measures to protect your data and applications, ensuring compliance with industry standards."
  },
  {
    title: "Cloud Assessment",
    description: "Advanced tools facilitate a quick and secure move to public cloud environments, tailored to meet your organization's needs."
  },
  {
    title: "Cloud system of Records",
    description: "Consistent patterns at an enterprise scale provide visibility into cloud usage, improving governance and resource management."
  },
  {
    title: "Disaster Recovery",
    description: "We provide reliable backup and disaster recovery solutions, ensuring your data is safe and can be quickly restored in case of an incident."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-[#5431FF]" />
          <div>
            <Cloud className="w-8 h-8 text-[#5431FF] mb-2" />
            <h2 className="text-4xl font-bold text-gray-900">UNLEASH CLOUD POTENTIAL</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-lg leading-relaxed text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

