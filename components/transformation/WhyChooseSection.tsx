'use client'

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Cog, DollarSign, Users2, Shield, Target, Cpu } from 'lucide-react'

const reasons = [
  {
    title: "Industry Leader",
    description: "As a leader in software consultancy, strategy, and transformation services, we are committed to driving our clients' success.",
    icon: Trophy
  },
  {
    title: "Trusted Partners",
    description: "Elysian Innovations collaborates with top industry partners, including AWS, Red Hat, IBM, Microsoft, VMware, and more.",
    icon: Users
  },
  {
    title: "Customized Solutions",
    description: "We tailor our services to your specific needs, ensuring our solutions perfectly align with your business objectives.",
    icon: Cog
  },
  {
    title: "Best Prices",
    description: "Our engagement models allow us to reduce costs and offer highly competitive rates to our valued clients.",
    icon: DollarSign
  },
  {
    title: "Loyal Clientele",
    description: "Elysian Innovations has become a trusted partner for businesses across multiple industries, including Telecom, Banking, SMEs, Public Sector, and Energy.",
    icon: Users2
  },
  {
    title: "Reliable and Secure",
    description: "Count on us for top-notch reliability, safety, and security as a global software consultancy leader.",
    icon: Shield
  },
  {
    title: "Results-Oriented",
    description: "We prioritize delivering tangible results that drive growth and strengthen your competitive advantage.",
    icon: Target
  },
  {
    title: "AI Integration",
    description: "At Elysian Innovations, we harness cutting-edge AI technologies to stay ahead of industry trends, ensuring our clients benefit from the latest advancements.",
    icon: Cpu
  }
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-[#3584C0] text-lg">Why Elysian Innovations</span>
            <h2 className="text-4xl font-bold mt-2 text-gray-800                                           ">
              Why Choose Our Transformation Services?
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <FadeInSection key={reason.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-[#3584C0]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

