'use client'

import { FadeInSection } from '@/components/FadeInSection'
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Code2, Activity, Container, Shield } from 'lucide-react'

const services = [
  {
    title: "Continuous Integration and Continuous Deployment (CI/CD)",
    description: "Achieve seamless integration and deployment with our CI/CD solutions. We streamline your development process by automating the integration of code changes, ensuring frequent, error-free releases.",
    icon: GitBranch,
    gradient: "from-violet-600 to-violet-800"
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Manage your infrastructure with code for more efficient, repeatable, and version-controlled deployments. Our IaC solutions transform your infrastructure management by treating it as software.",
    icon: Code2,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    title: "Monitoring and Logging",
    description: "Gain real-time insights into your systems with our comprehensive monitoring and logging solutions. Identify issues proactively and maintain system health and performance.",
    icon: Activity,
    gradient: "from-indigo-600 to-indigo-800"
  },
  {
    title: "Containerization and Orchestration",
    description: "Leverage containerization and orchestration technologies like Docker and Kubernetes to enhance the efficiency and portability of your applications.",
    icon: Container,
    gradient: "from-violet-600 to-violet-800"
  },
  {
    title: "Security Integration",
    description: "Embed security into every phase of your DevOps pipeline to ensure robust and secure applications.",
    icon: Shield,
    gradient: "from-blue-600 to-blue-800"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Discover <span className="text-[#3584C0]">Elysian Innovation's Approach</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Our offerings encompass a wide array of solutions, including but not limited to:
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.gradient}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
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

