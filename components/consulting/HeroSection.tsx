'use client'

import { motion } from "framer-motion"
import { FadeInSection } from "../FadeInSection"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
      <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-blue-600/80" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xl mb-4 block text-purple-200">Consulting</span>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Expert IT Consulting
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Elysian Innovations empowers your organization with innovative solutions and a strategic roadmap for success. Our team of experienced consultants is here to guide you every step of the way.
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

