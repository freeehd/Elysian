'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeInSection } from '@/components/FadeInSection'
import DynamicBackground from "@/components/DynamicBackground"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="absolute inset-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-600/80" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xl font-medium text-white">Infrastructure Solutions</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Build a Resilient and Scalable IT Infrastructure
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              In the dynamic digital landscape, a robust and scalable IT infrastructure is essential for business continuity and growth. Arcana's Infrastructure Solutions provide comprehensive services that ensure your systems are secure, efficient, and adaptable. From cloud migration to network security, we cover all aspects of IT infrastructure to help you achieve operational excellence.
            </p>
            <Button 
              size="lg"
              className="bg-[#5431FF] text-white hover:bg-[#4124DB]"
            >
              Contact Us
            </Button>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

