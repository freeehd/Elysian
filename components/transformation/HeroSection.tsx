'use client'

import { motion } from "framer-motion"
import { FadeInSection } from "../FadeInSection"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xl mb-4 block text-blue-200">Transformation</span>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Your Journey to Digital Excellence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Elysian Innovations excels in guiding organizations through digital transformation, enabling them to thrive in a rapidly evolving digital world. We modernize your operations and drive innovation through cutting-edge solutions and strategic implementation.
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

