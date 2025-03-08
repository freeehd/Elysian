"use client"

import { FadeInSection } from "@/components/FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Code2, Activity, Container, Shield } from "lucide-react"

const services = [
  {
    title: "Continuous Integration and Continuous Deployment (CI/CD)",
    description:
      "Achieve seamless integration and deployment with our CI/CD solutions. We streamline your development process by automating the integration of code changes, ensuring frequent, error-free releases.",
    icon: GitBranch,
  },
  {
    title: "Infrastructure as Code (IaC)",
    description:
      "Manage your infrastructure with code for more efficient, repeatable, and version-controlled deployments. Our IaC solutions transform your infrastructure management by treating it as software.",
    icon: Code2,
  },
  {
    title: "Monitoring and Logging",
    description:
      "Gain real-time insights into your systems with our comprehensive monitoring and logging solutions. Identify issues proactively and maintain system health and performance.",
    icon: Activity,
  },
  {
    title: "Containerization and Orchestration",
    description:
      "Leverage containerization and orchestration technologies like Docker and Kubernetes to enhance the efficiency and portability of your applications.",
    icon: Container,
  },
  {
    title: "Security Integration",
    description: "Embed security into every phase of your DevOps pipeline to ensure robust and secure applications.",
    icon: Shield,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Discover{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
              Elysian Innovation's Approach
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl">
            Our offerings encompass a wide array of solutions, including but not limited to:
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <FadeInSection key={service.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal to-caribbean">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

