import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    title: "Improved Efficiency",
    description: "Streamline business processes and eliminate manual tasks to improve operational efficiency."
  },
  {
    title: "Enhanced Visibility",
    description: "Gain real-time visibility into key business metrics and performance indicators for informed decision-making."
  },
  {
    title: "Better Collaboration",
    description: "Foster collaboration and communication across departments with centralized data and workflows."
  },
  {
    title: "Scalability",
    description: "Easily scale your ERP solution to accommodate growth and changing business needs."
  },
  {
    title: "Cost Savings",
    description: "Reduce operational costs through improved resource utilization and streamlined processes."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-gradient-to-b from-[#00f] to-[#7F3AFF]" />
          <div>
            <ArrowUpRight className="w-8 h-8 text-[#7F3AFF] mb-2" />
            <h2 className="text-4xl font-bold text-gray-800">WHY MODERNIZE?</h2>
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

