import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Database, Network, Shield, Cloud } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: "Infrastructure Design and Deployment",
    description: "Customized design and implementation of datacenter infrastructure to meet your specific requirements.",
    gradient: "from-[#7F3AFF] to-[#4A21EF]"
  },
  {
    icon: Settings,
    title: "Server Virtualization",
    description: "Consolidate hardware resources and improve efficiency through server virtualization solutions.",
    gradient: "from-[#0047AB] to-[#002D6B]"
  },
  {
    icon: Database,
    title: "Storage Solutions",
    description: "Scalable storage solutions to accommodate growing data volumes and ensure high availability.",
    gradient: "from-[#00008B] to-[#000066]"
  },
  {
    icon: Network,
    title: "Network Optimization",
    description: "Robust backup and recovery solutions to safeguard critical data and minimize downtime.",
    gradient: "from-[#7F3AFF] to-[#4A21EF]"
  },
  {
    icon: Shield,
    title: "Data Backup and Recovery",
    description: "Robust backup and recovery solutions to safeguard critical data and minimize downtime.",
    gradient: "from-[#4169E1] to-[#0000CD]"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly integrate on-premises datacenter solutions with cloud services for hybrid cloud environments.",
    gradient: "from-[#4169E1] to-[#0000CD]"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-[#7F3AFF]">OUR SERVICES</h2>
        <p className="mb-16 max-w-3xl text-lg text-gray-600">
          Elysian Innovations provides a wide range of datacenter solutions to support your business
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-0 overflow-hidden">
              <CardContent className={`p-8 bg-gradient-to-r ${service.gradient} text-white h-full`}>
                <service.icon className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/90 text-lg">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

