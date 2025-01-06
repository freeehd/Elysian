'use client'

import { Lightbulb, PuzzleIcon as PuzzlePiece, Users, Rocket } from 'lucide-react'
import { FadeInSection } from '@/components/FadeInSection'
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    title: "Innovation at Our Core",
    description: "Innovation isn't just a buzzword for us; it's our DNA. We live and breathe it, constantly exploring uncharted territories to bring you ground-breaking solutions.",
    icon: Lightbulb
  },
  {
    title: "Problem Solvers Extraordinaire",
    description: "Challenges excite us! Whether it's streamlining processes, optimizing efficiency, or solving complex puzzles, we're up for the task.",
    icon: PuzzlePiece
  },
  {
    title: "Collaboration and Co-Creation",
    description: "We believe the best ideas emerge from collaboration. When you partner with us, you become part of a creative ecosystem where ideas flourish.",
    icon: Users
  },
  {
    title: "Future-Proof Solutions",
    description: "Our solutions aren't just for today; they're designed to withstand the test of time. We're architects of the future, building bridges to tomorrow.",
    icon: Rocket
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-16  text-gray-800">
            Why Choose <span className="text-[#3584C0]">Elysian Innovations</span>?
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason) => (
            <FadeInSection key={reason.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#3584C0] bg-opacity-10 rounded-xl flex items-center justify-center">
                        <reason.icon className="w-8 h-8 text-[#3584C0]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

