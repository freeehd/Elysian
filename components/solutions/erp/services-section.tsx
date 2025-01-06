import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Monitor, FolderGit2, Shield, Network } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: "ERP Implementation",
    description: "Customized implementation of leading ERP systems such as SAP, Oracle, Microsoft Dynamics, and more.",
    gradient: "from-[#7F3AFF] to-[#4A21EF]"
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Analysis and optimization of business processes to ensure maximum efficiency and effectiveness",
    gradient: "from-[#0047AB] to-[#002D6B]"
  },
  {
    icon: Monitor,
    title: "Integration Services",
    description: "Seamless integration of ERP systems with existing software applications, databases, and third-party services.",
    gradient: "from-[#00008B] to-[#000066]"
  },
  {
    icon: FolderGit2,
    title: "Customization and Development",
    description: "Tailored customization and development services to adapt ERP solutions to your unique requirements.",
    gradient: "from-[#7F3AFF] to-[#4A21EF]"
  },
  {
    icon: Shield,
    title: "Training and Support",
    description: "Comprehensive training and ongoing support to empower your team and maximize the benefits of ERP implementation.",
    gradient: "from-[#4169E1] to-[#0000CD]"
  },
  {
    icon: Network,
    title: "Upgrade and Migration Services",
    description: "Upgrade and migration services to ensure your ERP system remains up-to-date and aligned with your business objectives.",
    gradient: "from-[#4169E1] to-[#0000CD]"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-[#7F3AFF]">OUR SERVICES</h2>
        <p className="mb-16 max-w-3xl text-lg text-gray-600">
          Our offerings encompass a wide array of solutions, including but not limited to:
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

