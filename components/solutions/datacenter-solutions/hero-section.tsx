'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeInSection } from '@/components/FadeInSection'
import DynamicBackground from "@/components/DynamicBackground"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-[#00008B] to-[#4A21EF]">
      <div className="absolute inset-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00008B]/80 to-[#4A21EF]/80" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xl font-medium text-white">DataCentre Solutions</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Next-Gen Datacenter Solutions
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              We specialize in delivering robust and scalable datacenter solutions tailored to meet the unique needs of your business. Explore how our comprehensive offerings can optimize your data management infrastructure and drive your organization's success.
            </p>
            <Button 
              size="lg"
              className="bg-[#4A21EF] text-white hover:bg-[#3D1BC4]"
            >
              Contact Us
            </Button>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}

