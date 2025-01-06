import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Cost Savings",
    description: "Modernizing applications can significantly lower development and maintenance costs over time, as teams leverage new technologies and tools for greater efficiency."
  },
  {
    title: "Enhanced Security",
    description: "Updated applications come with improved security features, reducing vulnerability to cyberattacks and other threats."
  },
  {
    title: "Access to Advanced Technologies",
    description: "Development teams gain access to cutting-edge tools and technologies, such as cloud computing, containers, and microservices, enhancing software performance and scalability."
  },
  {
    title: "Improved Scalability",
    description: "Application modernization enhances scalability, making it easier for teams to manage increased workloads and meet user demands."
  },
  {
    title: "Reduced Technical Debt",
    description: "Modernization helps eliminate technical debt by ensuring that new functionality is integrated thoughtfully, considering long-term impacts."
  },
  {
    title: "Increased Agility and Flexibility",
    description: "Modernized applications are more agile and flexible, enabling teams to respond swiftly to changing market conditions and evolving customer needs."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-gradient-to-b from-blue-600 to-indigo-600" />
          <h2 className="text-4xl font-bold text-gray-800">Why Modernize?</h2>
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

