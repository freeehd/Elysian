import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Cloud, Monitor, Folder } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Rocket,
    title: "Cloud Infrastructure Design",
    description:
      "Our team specializes in designing, deploying, and managing cloud-based applications, resulting in cost savings on maintenance and infrastructure while optimizing speed and performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Migration",
    description:
      "Seamlessly transition your existing applications and infrastructure to the cloud with our expert guidance. We'll assess your needs, create a strategic plan, and ensure a smooth migration for enhanced operational efficiency.",
  },
  {
    icon: Monitor,
    title: "Containerization and Orchestration",
    description:
      "We empower businesses to leverage Docker and Kubernetes for scalable application management. This approach simplifies deployment, maximizes resource utilization, and enhances portability for improved performance.",
  },
  {
    icon: Folder,
    title: "Cloud Consulting and Strategy",
    description:
      "Elysian provides cutting-edge cloud consulting services that enable businesses to thrive in the digital landscape. Our expertise includes optimizing data visualization workflows using Tableau, helping organizations uncover actionable insights and make informed decisions.",
  },
]

export function OfferingSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Offering</span>
          </h2>
          <p className="mb-16 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            At Elysian, we equip businesses with a comprehensive range of cloud services to thrive in the digital
            landscape. Our offerings include:
          </p>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2">
          {offerings.map((offering) => (
            <FadeInSection key={offering.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal to-caribbean">
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{offering.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{offering.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

