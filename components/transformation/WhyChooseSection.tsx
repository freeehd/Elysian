"use client"

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Cog, DollarSign, Users2, Shield, Target, Cpu } from "lucide-react"

const reasons = [
  {
    title: "Industry Leader",
    description:
      "As a leader in software consultancy, strategy, and transformation services, we are committed to driving our clients' success.",
    icon: Trophy,
  },
  {
    title: "Trusted Partners",
    description:
      "Elysian Innovations collaborates with top industry partners, including AWS, Red Hat, IBM, Microsoft, VMware, and more.",
    icon: Users,
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor our services to your specific needs, ensuring our solutions perfectly align with your business objectives.",
    icon: Cog,
  },
  {
    title: "Best Prices",
    description:
      "Our engagement models allow us to reduce costs and offer highly competitive rates to our valued clients.",
    icon: DollarSign,
  },
  {
    title: "Loyal Clientele",
    description:
      "Elysian Innovations has become a trusted partner for businesses across multiple industries, including Telecom, Banking, SMEs, Public Sector, and Energy.",
    icon: Users2,
  },
  {
    title: "Reliable and Secure",
    description: "Count on us for top-notch reliability, safety, and security as a global software consultancy leader.",
    icon: Shield,
  },
  {
    title: "Results-Oriented",
    description:
      "We prioritize delivering tangible results that drive growth and strengthen your competitive advantage.",
    icon: Target,
  },
  {
    title: "AI Integration",
    description:
      "At Elysian Innovations, we harness cutting-edge AI technologies to stay ahead of industry trends, ensuring our clients benefit from the latest advancements.",
    icon: Cpu,
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-teal dark:text-teal-400 text-lg font-medium">Why Elysian Innovations</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800 dark:text-white">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                Transformation Services
              </span>
              ?
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <FadeInSection key={reason.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-teal dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

