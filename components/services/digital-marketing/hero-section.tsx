"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/FadeInSection"
import DynamicBackground from "@/components/DynamicBackground"

export function HeroSection() {
  return (
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xl font-medium text-white/90">Digital Marketing</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">Strategic Digital Growth</h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Elysian Innovation delivers data-driven digital marketing solutions that transform your online presence.
              Our strategic approach focuses on planned, sustainable growth that maximizes your return on investment.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal hover:bg-gray-100 hover:text-caribbean transition-all duration-300"
            >
              <a href="/contact-us">Contact Us</a>
            </Button>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}
