"use client"

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function StrategicGuidance() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-teal/5 to-caribbean/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-72 h-72 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/5 dark:to-caribbean/5 rounded-full blur-3xl" />
              <Card className="relative overflow-hidden shadow-none border-none">
                <CardContent className="p-0">
                  <Image
                    src="/Logo.png"
                    alt="Digital transformation visualization"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                We Transform Your Business for a{" "}
                <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal dark:text-teal-400 mb-2">Introduction</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    At Elysian Innovations, we offer a comprehensive suite of transformation services and strategic
                    partnerships with industry leaders to help our clients fully leverage the benefits of their
                    transformation efforts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal dark:text-teal-400 mb-2">
                    Our Transformation Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Our approach to digital transformation is holistic and client-focused. Recognizing that every
                    business is unique, we tailor our solutions to meet your specific needs by combining advanced
                    technologies with strategic planning.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

