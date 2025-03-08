"use client"

import { motion } from "framer-motion"
import { FadeInSection } from "@/components/FadeInSection"
import DynamicBackground from "../DynamicBackground"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal to-caribbean text-white py-32">
      <div className="absolute inset-0 z-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-teal/80 to-caribbean/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              We are a dynamic team of visionaries, engineers, and dreamers who thrive on pushing boundaries. Our
              passion lies in creating disruptive solutions that redefine industries, empower businesses, and enhance
              lives.
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

