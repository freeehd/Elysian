import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Durable firmware",
    description: "Our firmware ensures enhanced security, swift connectivity, expanded storage, and peak performance."
  },
  {
    title: "Premium-grade coding",
    description: "Access meticulously crafted code rigorously tested to meet project specifications and compliance standards, including MISRA C, C++, and more."
  },
  {
    title: "Robust Security Measures",
    description: "Employing fortified network protocols, robust data encryption, and formidable firewalls, we ensure continuous security and peace of mind for your operations."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-[#5431FF]" />
          <h2 className="text-4xl font-bold text-slate-800">Benefits</h2>
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

