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
            <p className="mb-4 text-xl font-medium text-white">Application Modernization</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Reimagine Your Software
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              We empower you to unlock the full potential of your applications, transforming them into high-performing solutions that stay relevant in an ever-evolving digital landscape.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
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

