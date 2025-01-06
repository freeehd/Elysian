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
            <p className="mb-4 text-xl font-medium text-white">Managed Services</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Maximize Efficiency and Adaptability
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Elysian Innovation enhances your team's capabilities across the board, including management, monitoring, incident detection, disaster recovery, backup solutions, and comprehensive security measures.
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

