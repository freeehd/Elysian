import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, BarChart } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"
import DynamicBackground from "@/components/DynamicBackground"

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-teal to-caribbean">
        <div className="absolute inset-0 z-0">
          <DynamicBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-teal/80 to-caribbean/80" />
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-3xl">
              <p className="mb-4 text-xl font-medium text-white/90">Our Services</p>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">Digital Marketing</h1>
              <p className="mb-8 text-xl leading-relaxed text-white/90">
                Elysian Innovation delivers comprehensive digital marketing solutions that drive strategic growth and
                measurable results. From planning to execution, we help businesses establish a powerful online presence.
              </p>
              <Button
                size="lg"
                className="bg-white text-teal hover:bg-gray-100 hover:text-caribbean transition-all duration-300"
              >
                <a href="/contact-us">Contact Us</a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <FadeInSection>
            <h2 className="mb-4 text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                Our Digital Marketing Services
              </span>
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
              Our digital marketing services are divided into two key areas, each designed to help your business thrive
              in the digital landscape. Explore our specialized services below.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-2">
            <FadeInSection>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal to-caribbean">
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Strategy & Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Our strategic planning services provide the foundation for successful digital marketing. We focus on
                    research, analysis, and creating a roadmap for sustainable growth through SEO, social media
                    management, and email marketing strategies.
                  </p>
                  <Button asChild className="bg-teal hover:bg-caribbean text-white transition-all duration-300">
                    <Link href="/services/digital-marketing/strategy-planning">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-teal to-caribbean">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Execution & Campaigns</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Our execution and campaign services bring your marketing strategy to life. We focus on implementing
                    high-performing PPC advertising campaigns and creating compelling content and copy that drives
                    measurable results for your business.
                  </p>
                  <Button asChild className="bg-teal hover:bg-caribbean text-white transition-all duration-300">
                    <Link href="/services/digital-marketing/execution-campaigns">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-teal to-caribbean text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <FadeInSection>
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              Contact us today to discuss how our digital marketing services can help you achieve your business goals
              and drive sustainable growth.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal hover:bg-gray-100 hover:text-caribbean transition-all duration-300"
            >
              <a href="/contact-us">Get Started</a>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
