import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Search, Shield, Folder, Lock, Network, Monitor, Database, Wrench } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: "Legacy System Modernization",
    description: "Our legacy system modernization service upgrades outdated systems into agile, modern applications, ensuring they meet current and future business needs."
  },
  {
    icon: Search,
    title: "Testing and Quality Assurance",
    description: "Our meticulous testing and quality assurance procedures guarantee that your re-engineered applications operate seamlessly, meeting all standards for performance and security."
  },
  {
    icon: Shield,
    title: "Compliance and Regulatory Update",
    description: "We ensure your applications remain compliant with the latest industry standards and legal regulations, protecting your operations from compliance risks."
  },
  {
    icon: Folder,
    title: "Performance Tuning and Optimization",
    description: "We refine and optimize your applications to enhance speed, efficiency, and resource usage, ensuring optimal performance consistently."
  },
  {
    icon: Lock,
    title: "Security Enhancement",
    description: "Our security enhancement service strengthens your applications against the most recent cyber threats, safeguarding your valuable data."
  },
  {
    icon: Network,
    title: "Integration with Modern Technologies",
    description: "We incorporate advanced technologies such as AI, machine learning, and cloud computing into your current applications, enhancing value and ensuring future readiness for your software."
  },
  {
    icon: Monitor,
    title: "User Interface and User Experience Redesign",
    description: "We revamp application user interfaces and experiences with a focus on usability, accessibility, and contemporary design, enhancing user engagement."
  },
  {
    icon: Database,
    title: "Database Migration and Optimization",
    description: "Our team adeptly manages data transfer to advanced databases and optimizes database performance, ensuring efficient and robust data management."
  },
  {
    icon: Wrench,
    title: "Platform Migration",
    description: "We specialize in migrating applications from outdated platforms to modern, efficient, and secure environments, ensuring your business stays ahead of technological advancements."
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our <span className="text-[#3584C0]">Services</span>
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600">
          As an industry leader in application modernization, we deliver a full range of services to support your objectives. Our services include:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r ${index % 2 === 0 ? 'from-violet-600 to-violet-800' : 'from-blue-600 to-blue-800'}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

