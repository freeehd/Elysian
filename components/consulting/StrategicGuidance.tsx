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
                    alt="Strategic consulting session"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Strategic Guidance for Driving Growth
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#3584C0] mb-2">
                    Introduction
                  </h3>
                  <p className="text-gray-600 text-lg">
                    At Elysian Innovations, our consulting services empower your organization with customized strategies and expert guidance, tailored to your unique needs and challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3584C0] mb-2">
                    Our Consulting Approach
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We build hands-on partnerships that tackle immediate challenges while fostering long-term growth and success. Our collaborative and transparent approach focuses on achieving your strategic objectives.
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

