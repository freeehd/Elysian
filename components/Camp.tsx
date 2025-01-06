"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    icon: "/images/sun.png",
    title: "Legacy Meets Innovation",
    description: "With 1 million homes and counting, no one has more installation expertise."
  },
  {
    icon: "/images/smart-home.png",
    title: "Problem Solvers Extraordinairey",
    description: "An ecosystem of innovative products that put you in control of your home energy needs."
  },
  {
    icon: "/images/credit-card.png",
    title: "Global Impact",
    description: "Tailored plans including predictable monthly payments, little-to-no money down, and no-debt options."
  },
  {
    icon: "/images/suport.png",
    title: "Problem Solvers Extraordinaire",
    description: "The industry's most comprehensive repairs, maintenance & monitoring program."
  }
]

const Camp = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
          className="text-3xl lg:text-4xl font-medium text-gray-900 mb-8 text-pretty pt-10 pb-10 text-opacity-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
           <span className="font-bold">Why Elysian?</span> 
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white-10 p-6 rounded-lg shadow-lg transition-all duration-100 ease-in-out bg-blend-difference"
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={52}
                  height={52}
                  className="transition-transform ease-in-out"
                  style={{ transform: hoveredIndex === index ? 'scale(1.24)' : 'scale(1)' }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 ">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Camp;
