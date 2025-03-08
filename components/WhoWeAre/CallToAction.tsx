/* eslint-disable react/no-unescaped-entities */
"use client"

import { FadeInSection } from "@/components/FadeInSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-32 bg-gradient-to-r from-teal to-caribbean text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the Journey!</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl">
            At Elysian Innovations, we don't just build technology; we craft legacies. Let's redefine what's possible
            together. Welcome to the future!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-teal hover:bg-gray-100 hover:text-caribbean text-lg px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/contact-us">Get Started</Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  )
}

