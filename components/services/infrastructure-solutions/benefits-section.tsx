import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    title: "Seamless Scalability",
    description: "Easily expand your infrastructure to meet growing demands without disruption."
  },
  {
    title: "Robust Security Measures",
    description: "Protect your data and systems with comprehensive security protocols and monitoring."
  },
  {
    title: "Optimized Performance",
    description: "Experience consistent and reliable performance for your critical applications."
  },
  {
    title: "Cost-Effective Solutions",
    description: "Maximize efficiency and minimize expenses with our tailored infrastructure solutions."
  },
  {
    title: "Round-the-Clock Support",
    description: "Access expert assistance and proactive management whenever you need it, ensuring smooth operations"
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-[#5431FF]" />
          <div>
            <ArrowUpRight className="w-8 h-8 text-[#5431FF] mb-2" />
            <h2 className="text-4xl font-bold text-gray-800">ACCELERATE INNOVATION</h2>
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

