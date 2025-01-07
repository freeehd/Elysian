import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Cloud, Monitor, Folder } from 'lucide-react'

const offerings = [
  {
    icon: Rocket,
    title: "Cloud Infrastructure Design",
    description: "Our team specializes in designing, deploying, and managing cloud-based applications, resulting in cost savings on maintenance and infrastructure while optimizing speed and performance.",
    gradient: "from-violet-600 to-violet-800"
  },
  {
    icon: Cloud,
    title: "Cloud Application Migration",
    description: "Seamlessly transition your existing applications and infrastructure to the cloud with our expert guidance. We'll assess your needs, create a strategic plan, and ensure a smooth migration for enhanced operational efficiency.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Monitor,
    title: "Containerization and Orchestration",
    description: "We empower businesses to leverage Docker and Kubernetes for scalable application management. This approach simplifies deployment, maximizes resource utilization, and enhances portability for improved performance.",
    gradient: "from-[#0B1C4D] to-[#142B66]"
  },
  {
    icon: Folder,
    title: "Cloud Consulting and Strategy",
    description: "Elysian provides cutting-edge cloud consulting services that enable businesses to thrive in the digital landscape. Our expertise includes optimizing data visualization workflows using Tableau, helping organizations uncover actionable insights and make informed decisions.",
    gradient: "from-violet-600 to-violet-800"
  }
]

export function OfferingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Our <span className="text-[#3584C0]">Offering</span>
        </h2>
        <p className="mb-16 max-w-3xl text-lg text-gray-600">
          At Arcana, we equip businesses with a comprehensive range of cloud services to thrive in the digital landscape. Our offerings include:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {offerings.map((offering) => (
            <Card key={offering.title} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${offering.gradient}`}>
                  <offering.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {offering.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

