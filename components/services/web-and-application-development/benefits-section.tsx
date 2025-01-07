import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    title: "Custom Solutions",
    description: "Our team crafts bespoke web and application solutions specifically tailored to your business requirements, ensuring a perfect fit for your unique goals and objectives."
  },
  {
    title: "Enhanced User Experience",
    description: "With a focus on user-centric design principles, we create websites and applications that offer intuitive navigation, responsive layouts, and visually captivating interfaces, resulting in higher user engagement and satisfaction."
  },
  {
    title: "Scalable and Secure Development",
    description: "Elysian emphasizes scalability and security throughout the development process, building robust applications that can easily accommodate your business growth while implementing stringent security measures to protect your data and users from potential threats."
  },
  {
    title: "Seamless Integration",
    description: "We excel in seamlessly integrating your web and application solutions with existing systems and third-party services, ensuring smooth interoperability and enhanced functionality to streamline your business operations."
  },
  {
    title: "Ongoing Support",
    description: "Beyond the initial development phase, Elysian provides continuous support and maintenance services to keep your digital assets up-to-date, secure, and performing optimally, giving you peace of mind and allowing you to focus on your core business activities."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center gap-8">
          <div className="h-16 w-2 bg-[#7F3AFF]" />
          <div>
            <ArrowUpRight className="w-8 h-8 text-[#3584C0] mb-2" />
            <h2 className="text-4xl font-bold text-[#3584C0]">ACCELERATE INNOVATION</h2>
          </div>
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

