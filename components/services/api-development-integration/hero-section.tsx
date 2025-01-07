'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeInSection } from '@/components/FadeInSection'
import DynamicBackground from "@/components/DynamicBackground"

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#0B1C4D]">
      <div className="absolute inset-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C4D]/80 to-[#0B1C4D]/80" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xl font-medium text-white">API Services</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              API Development and Integration
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Build scalable, secure, and efficient APIs that power your digital transformation. 
              Our comprehensive suite of API services ensures seamless integration and optimal performance.
            </p>
            <Button 
              size="lg"
              className="bg-[#5431FF] text-white hover:bg-[#4124DB]"
            >
                  <a href="/contact-us">
              Contact Us
              </a>
            </Button>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

