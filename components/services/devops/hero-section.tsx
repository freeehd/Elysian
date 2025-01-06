'use client'

import { motion } from "framer-motion"
import { FadeInSection } from '@/components/FadeInSection'
import DynamicBackground from "@/components/DynamicBackground"
import { Button } from "@/components/ui/button"

export function DevOpsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
      <div className="absolute inset-0 z-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-blue-600/80" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4">DevOps</h2>
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Operations with Arcana's DevOps Expertise
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mb-8">
              In today's fast-paced digital landscape, efficient and reliable software development and IT
              operations are crucial for success. Arcana's DevOps Solutions bridge the gap between
              development and operations, enabling your business to deliver applications and services at high
              velocity. Our comprehensive DevOps services ensure smooth collaboration, integration, and
              automation, fostering innovation and excellence.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-[#3584C0] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Contact Us
            </Button>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

