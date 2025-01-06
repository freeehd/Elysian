import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Monitor, LayoutGrid, Network } from 'lucide-react'

const offerings = [
  {
    icon: Rocket,
    title: "Infrastructure Support",
    description: "Enable your teams to focus on strategic initiatives rather than routine infrastructure tasks.",
    gradient: "from-violet-600 to-violet-800"
  },
  {
    icon: Settings,
    title: "Application Support",
    description: "ASaaS encompasses a range of support activities, including troubleshooting, bug fixes, performance monitoring, and updates.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Monitor,
    title: "Cloud Migration",
    description: "Seamless transition of an organization's digital assets, applications, and data to cloud environments.",
    gradient: "from-violet-600 to-violet-800"
  },
  {
    icon: LayoutGrid,
    title: "Design and Implementation Services",
    description: "We leverage a vendor agnostic approach and provide design and implementation services for servers, storage, virtualization, containerization, database, middleware.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Network,
    title: "Network Services",
    description: "We offer top-quality network services and our certified engineers and round-the-clock monitoring system guarantee your infrastructure is healthy, highly available, and performing well.",
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
          Arcana provides a wide range of customized solutions designed to align with your specific goals. Our services include:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

