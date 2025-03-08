"use client"

import { motion } from "framer-motion"
import { FadeInSection } from "@/components/FadeInSection"
import DynamicBackground from "@/components/DynamicBackground"
import { Button } from "@/components/ui/button"

export function DevOpsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal to-caribbean text-white py-32">
      <div className="absolute inset-0 z-0">
        <DynamicBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-teal/80 to-caribbean/80" />
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white/90">DevOps</h2>
            <h1 className="text-5xl font-bold mb-6 lg:text-6xl">
              Transform Your Operations with Elysian Innovation's DevOps Expertise
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mb-8">
              In today's fast-paced digital landscape, efficient and reliable software development and IT operations are
              crucial for success. Elysian Innovation's DevOps Solutions bridge the gap between development and
              operations, enabling your business to deliver applications and services at high velocity. Our
              comprehensive DevOps services ensure smooth collaboration, integration, and automation, fostering
              innovation and excellence.
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

