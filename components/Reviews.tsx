"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star } from 'lucide-react'


const reviews = [
    {
      author: "John Doe",
      content: "Sunrun's solar installation was quick and professional. Our energy bills have significantly decreased!"
    },
    {
      author: "Jane Smith",
      content: "The smart technology Sunrun provided gives us complete control over our home energy usage. Highly recommended!"
    },
    {
      author: "Mike Johnson",
      content: "Sunrun's flexible payment options made going solar an easy decision for us. Great service!"
    },
    {
      author: "Emily Brown",
      content: "The Sunrun Guarantee gives us peace of mind. Their customer support is always there when we need it."
    },
    {
      author: "David Wilson",
      content: "We're impressed with how much we've saved on our energy bills since switching to Sunrun. It's been a game-changer!"
    },
    {
        author: "Dave Mathews",
        content: "Solar is the way to go and Sun Studios got it done for me. I'm saving money and the planet!"
      }
  ]

const Reviews = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl lg:text-4xl font-medium text-gray-900 mb-8 text-center pt-10 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
        >
          <span className="font-bold">Customer Stories</span> 
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-gray-50 fill-current"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  />
                ))}
              </div>
              <div className="w-16 h-0.5 bg-gray-200 mb-4"></div>
              <p className="text-gray-600 mb-4">{review.content}</p>
              <p className="text-sm font-semibold text-gray-900">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Reviews