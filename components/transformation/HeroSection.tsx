"use client"

import { motion } from "framer-motion"
import { FadeInSection } from "../FadeInSection"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal to-caribbean text-white py-32">
      <div className="absolute inset-0 z-0">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal/80 to-caribbean/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xl mb-4 block text-white/80">Transformation</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Your Journey to Digital Excellence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Elysian Innovations excels in guiding organizations through digital transformation, enabling them to
              thrive in a rapidly evolving digital world. We modernize your operations and drive innovation through
              cutting-edge solutions and strategic implementation.
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

