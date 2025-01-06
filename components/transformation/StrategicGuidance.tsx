'use client'

import { FadeInSection } from "../FadeInSection"
import { Card, CardContent } from "@/components/ui/card"

export function StrategicGuidance() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Digital transformation visualization"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                We Transform Your Business for a Digital Future
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#3584C0] mb-2">
                    Introduction
                  </h3>
                  <p className="text-gray-600 text-lg">
                    At Elysian Innovations, we offer a comprehensive suite of transformation services and strategic partnerships with industry leaders to help our clients fully leverage the benefits of their transformation efforts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3584C0] mb-2">
                    Our Transformation Approach
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Our approach to digital transformation is holistic and client-focused. Recognizing that every business is unique, we tailor our solutions to meet your specific needs by combining advanced technologies with strategic planning.
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

