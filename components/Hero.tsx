"use client"
import Image from 'next/image'
import {Slider} from "@nextui-org/slider";
import React from "react";
import { motion } from 'framer-motion'


const Hero = () => {
  const [value, setValue] = React.useState(250);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch">
       <motion.div 
       
            className="relative z-20 flex flex-1 flex-col p-8 lg:p-12 md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >  
            <p className="text-sm font-semibold tracking-wider text-green-100 uppercase mb-4">
              Residential Solar Since 2011
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Power</span>
              <span className="block">your home,</span>
              <span className="block">your way.</span>
            </h1>

            <div className="w-full max-w-md">
              <p className="text-2xl font-bold text-gray-10 mb-2 text-center">
                ${value}
              </p>
              <Slider
                size="lg"
                step={1}
                maxValue={500}
                minValue={75}
                value={value}
                onChange={(val) => setValue(Array.isArray(val) ? val[0] : val)}
                className="max-w-md mb-6"
                color="foreground"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-90 px-8 py-4 text-white transition-all hover:bg-black - font-bold  rounded-lg  duration-300 ease-in-out"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative md:w-1/2 h-64 sm:h-80 md:h-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
              src="/SolarHouse.jpg"
              alt="Solar powered house"
              layout="fill"
              objectFit="cover"
              className="rounded-b-3xl md:rounded-r-3xl md:rounded-l-none"
                          />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero