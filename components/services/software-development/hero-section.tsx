'use client'

import { Button } from "@/components/ui/button"
import DynamicBackground from "@/components/DynamicBackground"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#0B1C4D]">
      <div className="absolute inset-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C4D]/80 to-[#0B1C4D]/80" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xl font-medium text-white">Software Development</p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
            Custom Software Excellence
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-white/90">
            Arcana delivers tailored software solutions, ensuring peak effectiveness and performance. Our solutions are forward-thinking and innovative, staying ahead of the technological advancements.
          </p>
          <Button 
            size="lg"
            className="bg-[#5431FF] text-white hover:bg-[#4124DB]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

