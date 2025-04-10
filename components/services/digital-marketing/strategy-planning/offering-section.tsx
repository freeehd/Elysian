"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Share2, Mail } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Our comprehensive SEO strategies are built on thorough research and planning. We analyze your market, competitors, and target audience to develop a tailored SEO roadmap that improves your visibility in search results and drives qualified organic traffic to your website.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We develop strategic social media plans with detailed content calendars, audience targeting, and growth strategies. Our approach focuses on building meaningful connections with your audience through consistent, engaging content that aligns with your brand voice and business objectives.",
  },
  {
    icon: Mail,
    title: "Email Marketing Strategy",
    description:
      "Our email marketing strategies include audience segmentation, campaign planning, and automation workflows. We create comprehensive email plans that nurture leads, retain customers, and drive consistent revenue growth through personalized communication.",
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
          <h2 className="mb-4 text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            Our strategic planning services provide the foundation for successful digital marketing campaigns, ensuring
            your marketing efforts are targeted, effective, and aligned with your business goals.
          </p>
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
