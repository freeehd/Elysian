"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart, PenTool, FileText } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: BarChart,
    title: "PPC Advertising",
    description:
      "Our PPC advertising services include campaign setup, ad creation, bid management, and performance optimization across Google Ads, Meta Ads, and other platforms. We focus on maximizing your ROI through targeted campaigns that reach your ideal customers.",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description:
      "We create engaging, SEO-optimized content that resonates with your audience and drives conversions. From blog posts and articles to whitepapers and case studies, our content writers develop marketing materials that strengthen your brand voice and establish your authority.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description:
      "Our expert copywriters craft persuasive ad copy, landing page content, email campaigns, and other marketing materials designed to convert. We focus on creating compelling messages that speak directly to your audience's needs and motivate them to take action.",
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
            Our execution and campaign services bring your marketing strategy to life, delivering compelling content and
            high-performing campaigns that connect with your audience and drive measurable results.
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
