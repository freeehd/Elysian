"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/FadeInSection"
import DynamicBackground from "@/components/DynamicBackground"

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-teal to-caribbean text-white">
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
            <p className="mb-4 text-xl font-medium text-white/90">API Services</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              API Development and Integration
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Build scalable, secure, and efficient APIs that power your digital transformation. Our comprehensive suite
              of API services ensures seamless integration and optimal performance.
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

