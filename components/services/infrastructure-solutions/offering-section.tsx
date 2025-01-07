import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Network, Monitor, Lock, Folder } from 'lucide-react'

const offerings = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "We help you leverage the power of the cloud to improve efficiency, scalability, and cost-effectiveness. We integrate on-premises infrastructure with public and private clouds. Elysian also implements robust DR solutions to ensure business continuity.",
    gradient: "from-violet-600 to-violet-800"
  },
  {
    icon: Network,
    title: "Network Design and Management",
    description: "Build a secure and efficient network infrastructure with our expert design and management services. We ensure your network is reliable, scalable, and secure.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Monitor,
    title: "Data Center Services",
    description: "Optimize your data center operations with our comprehensive services. We provide everything from design and deployment to ongoing management and support.",
    gradient: "from-[#0B1C4D] to-[#142B66]"
  },
  {
    icon: Lock,
    title: "IT Security",
    description: "Protect your IT infrastructure from evolving threats with our robust security solutions. We offer comprehensive security services to safeguard your data and systems.",
    gradient: "from-violet-600 to-violet-800"
  },
  {
    icon: Folder,
    title: "Managed IT Services",
    description: "Focus on your core business while we manage your IT infrastructure. Our managed services ensure your systems are always up-to-date, secure, and performing optimally.",
    gradient: "from-blue-600 to-blue-800"
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
          We specialize in delivering top-notch Infrastructure Services designed to address your specific requirements. Our broad range of services encompasses, but is not limited to:
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

