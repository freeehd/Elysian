import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

const benefits = [
  {
    title: "Cost Savings",
    description:
      "Modernizing applications can significantly lower development and maintenance costs over time, as teams leverage new technologies and tools for greater efficiency.",
  },
  {
    title: "Enhanced Security",
    description:
      "Updated applications come with improved security features, reducing vulnerability to cyberattacks and other threats.",
  },
  {
    title: "Access to Advanced Technologies",
    description:
      "Development teams gain access to cutting-edge tools and technologies, such as cloud computing, containers, and microservices, enhancing software performance and scalability.",
  },
  {
    title: "Improved Scalability",
    description:
      "Application modernization enhances scalability, making it easier for teams to manage increased workloads and meet user demands.",
  },
  {
    title: "Reduced Technical Debt",
    description:
      "Modernization helps eliminate technical debt by ensuring that new functionality is integrated thoughtfully, considering long-term impacts.",
  },
  {
    title: "Increased Agility and Flexibility",
    description:
      "Modernized applications are more agile and flexible, enabling teams to respond swiftly to changing market conditions and evolving customer needs.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <FadeInSection>
          <div className="mb-16 flex items-center gap-8">
            <div className="h-16 w-2 bg-gradient-to-b from-teal to-caribbean" />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Why{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Modernize</span>?
            </h2>
          </div>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <FadeInSection key={benefit.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

