'use client'

import { FadeInSection } from '@/components/FadeInSection'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="py-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-8">
            Join the Journey!
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl">
            At Elysian Innovations, we don't just build technology; we craft legacies. 
            Let's redefine what's possible together. Welcome to the future!
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-[#3584C0] hover:bg-gray-100 text-lg px-8 py-4"
          >
            Get Started
          </Button>
        </FadeInSection>
      </div>
    </section>
  )
}

