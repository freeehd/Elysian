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
              <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Strategic planning session"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                We Strategize Your Path to Success
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Introduction
                  </h3>
                  <p className="text-gray-600 text-lg">
                    At Elysian Innovations, our Strategy Services empower businesses to navigate critical IT decisions with confidence, keeping your IT infrastructure current and poised for future success.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Our Strategy Approach
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We collaborate closely with you, by thoroughly understanding your business goals and technology needs, to create comprehensive strategies that align your IT systems with your overall objectives, driving business growth.
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

