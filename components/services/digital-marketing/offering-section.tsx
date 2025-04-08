"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageSquare, PenTool, Share2, BarChart } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"

const offerings = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "At Elysian Innovation, we implement comprehensive SEO strategies that improve your visibility in search results. Our data-driven approach includes technical optimization, content strategy, and link building to drive organic traffic and establish your online authority.",
  },
  {
    icon: BarChart,
    title: "Social Media & Paid Advertising",
    description:
      "We create targeted campaigns across Meta, Google Ads, and other platforms to maximize your ROI. Our team specializes in audience segmentation, compelling ad creative, and continuous optimization to ensure your advertising budget delivers measurable results.",
  },
  {
    icon: PenTool,
    title: "Copywriting & Content Creation",
    description:
      "Elysian Innovation crafts persuasive, SEO-optimized content that resonates with your audience and drives conversions. From website copy and blog posts to email campaigns and social media content, we develop strategic messaging that strengthens your brand voice.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We handle comprehensive social media strategy, content creation, community engagement, and performance analysis. Our team keeps your brand active and engaging across platforms, building meaningful connections with your audience while you focus on your core business.",
  },
  {
    icon: MessageSquare,
    title: "Email Marketing & Automation",
    description:
      "Our email marketing services include campaign strategy, list segmentation, automated workflows, and performance optimization. We create personalized email journeys that nurture leads, retain customers, and drive consistent revenue growth.",
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
            As strategic partners in your digital growth, we deliver a comprehensive suite of marketing services
            designed to elevate your brand presence and drive measurable results:
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
