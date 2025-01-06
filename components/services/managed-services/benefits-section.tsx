import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Small businesses benefit from managed services' lower initial costs compared to starting from scratch. Avoiding the financial burden of hiring, training, and acquiring equipment is advantageous for new ventures."
  },
  {
    title: "Scalability",
    description: "Managed services facilitate flexible system expansion or upgrades without the need for hiring and training additional staff. They ensure swift adaptation to changing resource requirements, surpassing in-house team responsiveness."
  },
  {
    title: "Minimized Downtime",
    description: "Managed services efficiently handle the complex challenge of minimizing downtime, which in-house teams may lack the capacity or expertise to address effectively. Proactive prevention of downtime reduces associated costs."
  },
  {
    title: "Data Compliance",
    description: "With managed services, you can conduct thorough reports and audits to ensure your organization meets all regulatory requirements, saving countless hours for your in-house team over the long term."
  },
  {
    title: "Reduced Risk",
    description: "Managed IT services proactively minimize the risk of breaches by identifying vulnerabilities and implementing effective defenses to mitigate potential risks."
  },
  {
    title: "Enhanced IT Expertise",
    description: "By leveraging managed services, businesses gain access to a dedicated team of IT professionals with specialized skills and knowledge. This expertise ensures that IT systems are managed and optimized to industry best practices."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-[#5431FF]" />
          <h2 className="text-4xl font-bold text-gray-900">Benefits</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-lg leading-relaxed text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

