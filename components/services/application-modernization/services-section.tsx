import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"
import { Rocket, Search, Shield, Folder, Lock, Network, Monitor, Database, Wrench } from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "Legacy System Modernization",
    description:
      "Our legacy system modernization service upgrades outdated systems into agile, modern applications, ensuring they meet current and future business needs.",
  },
  {
    icon: Search,
    title: "Testing and Quality Assurance",
    description:
      "Our meticulous testing and quality assurance procedures guarantee that your re-engineered applications operate seamlessly, meeting all standards for performance and security.",
  },
  {
    icon: Shield,
    title: "Compliance and Regulatory Update",
    description:
      "We ensure your applications remain compliant with the latest industry standards and legal regulations, protecting your operations from compliance risks.",
  },
  {
    icon: Folder,
    title: "Performance Tuning and Optimization",
    description:
      "We refine and optimize your applications to enhance speed, efficiency, and resource usage, ensuring optimal performance consistently.",
  },
  {
    icon: Lock,
    title: "Security Enhancement",
    description:
      "Our security enhancement service strengthens your applications against the most recent cyber threats, safeguarding your valuable data.",
  },
  {
    icon: Network,
    title: "Integration with Modern Technologies",
    description:
      "We incorporate advanced technologies such as AI, machine learning, and cloud computing into your current applications, enhancing value and ensuring future readiness for your software.",
  },
  {
    icon: Monitor,
    title: "User Interface and User Experience Redesign",
    description:
      "We revamp application user interfaces and experiences with a focus on usability, accessibility, and contemporary design, enhancing user engagement.",
  },
  {
    icon: Database,
    title: "Database Migration and Optimization",
    description:
      "Our team adeptly manages data transfer to advanced databases and optimizes database performance, ensuring efficient and robust data management.",
  },
  {
    icon: Wrench,
    title: "Platform Migration",
    description:
      "We specialize in migrating applications from outdated platforms to modern, efficient, and secure environments, ensuring your business stays ahead of technological advancements.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <h2 className="mb-12 text-center text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Our <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            As an industry leader in application modernization, we deliver a full range of services to support your
            objectives. Our services include:
          </p>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeInSection key={service.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal to-caribbean">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

