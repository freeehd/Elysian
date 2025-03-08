"use client"

import { Lightbulb, PuzzleIcon as PuzzlePiece, Users, Rocket } from "lucide-react"
import { FadeInSection } from "@/components/FadeInSection"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    title: "Innovation at Our Core",
    description:
      "Innovation isn't just a buzzword for us; it's our DNA. We live and breathe it, constantly exploring uncharted territories to bring you ground-breaking solutions.",
    icon: Lightbulb,
  },
  {
    title: "Problem Solvers Extraordinaire",
    description:
      "Challenges excite us! Whether it's streamlining processes, optimizing efficiency, or solving complex puzzles, we're up for the task.",
    icon: PuzzlePiece,
  },
  {
    title: "Collaboration and Co-Creation",
    description:
      "We believe the best ideas emerge from collaboration. When you partner with us, you become part of a creative ecosystem where ideas flourish.",
    icon: Users,
  },
  {
    title: "Future-Proof Solutions",
    description:
      "Our solutions aren't just for today; they're designed to withstand the test of time. We're architects of the future, building bridges to tomorrow.",
    icon: Rocket,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-200 dark:to-rich-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800 dark:text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">
              Elysian Innovations
            </span>
            ?
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <FadeInSection key={reason.title}>
              <Card className="h-full bg-white/80 dark:bg-rich-black-200/70 border border-gray-100 dark:border-rich-black-300 hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal/10 to-caribbean/10 dark:from-teal/20 dark:to-caribbean/20 rounded-xl flex items-center justify-center group-hover:from-teal/20 group-hover:to-caribbean/20 dark:group-hover:from-teal/30 dark:group-hover:to-caribbean/30 transition-all duration-300">
                        <reason.icon className="w-8 h-8 text-teal dark:text-teal-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{reason.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{reason.description}</p>
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

