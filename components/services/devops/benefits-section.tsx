'use client'

import { FadeInSection } from '@/components/FadeInSection'
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Faster Time-to-Market",
    description: "Accelerate your development and deployment cycles with streamlined workflows and automated CI/CD pipelines, enabling quicker releases and keeping you ahead of the competition."
  },
  {
    title: "Enhanced Collaboration",
    description: "Break down silos and improve communication between development and operations teams, fostering a culture of teamwork and shared responsibility for better efficiency and alignment."
  },
  {
    title: "Higher Quality and Reliability",
    description: "Utilize automated testing and continuous monitoring to identify and address issues early, ensuring your applications are stable, reliable, and perform optimally in production."
  },
  {
    title: "Scalability and Flexibility",
    description: "Implement infrastructure as code (IaC) and containerization to easily scale your applications and adapt to changing business needs without compromising performance or stability."
  },
  {
    title: "Cost Efficiency",
    description: "Achieve significant cost savings by automating repetitive tasks, optimizing resource utilization, and reducing downtime, resulting in more efficient operations and lower operational expenses."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="flex items-center gap-8 mb-16">
            <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-indigo-600" />
            <div>
              <h2 className="text-4xl font-bold text-gray-800">
                Accelerate Innovation
              </h2>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <FadeInSection key={benefit.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

