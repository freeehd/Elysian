import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Settings, Monitor, Lock } from 'lucide-react'

const offerings = [
  {
    icon: Rocket,
    title: "Enterprise Software Development",
    description: "At Elysian Innovation, we specialize in tailored enterprise software development that meets your specific business needs. With a proven track record, we focus on optimizing operations, enhancing efficiency, and ensuring success through our comprehensive ERP software solutions.",
    gradient: "from-violet-600 to-violet-800"
  },
  {
    icon: Settings,
    title: "Software Support & Maintenance",
    description: "We provide proactive monitoring and timely upgrades to optimize your software's performance, minimizing downtime and significantly boosting productivity levels.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Elysian Innovation excels in crafting exceptional designs that bring your business ideas to life, ensuring a memorable user experience. From initial concept sketches and wireframes to refined high-fidelity designs and interactive prototypes, we cover all your UI/UX needs.",
    gradient: "from-[#0B1C4D] to-[#142B66]"
  },
  {
    icon: Lock,
    title: "Product Testing & QA",
    description: "We handle comprehensive testing, continuous monitoring, and ongoing maintenance for your products. With our expertise in managing these critical aspects, you can focus on revenue growth, assured of secure and optimized performance.",
    gradient: "from-violet-600 to-violet-800"
  }
]

export function OfferingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-4xl font-bold">
          <span className="text-[#3584C0]"> Our Services</span>
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600">
          As an industry leader in application modernization, we deliver a full range of services to support your objectives. Our services include:
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {offerings.map((offering) => (
            <Card key={offering.title} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center ${
                  offering.gradient.includes('blue') ? 'bg-blue-600' : 'bg-violet-600'
                }`}>
                  <offering.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

