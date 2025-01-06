"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player'
import { ChevronDown } from 'lucide-react'

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative overflow-hidden group rounded-full bg-transparent border-2 border-white text-white text-lg sm:text-xl font-semibold py-3 px-8 sm:px-12 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
      <span className="relative z-10">{children}</span>
    </button>
  )
}

const words = ["Innovations", "Revolutionary", "Transformative", "Pioneering", "Paradigm-shifting"]

const useWordCycle = (words: string[], interval: number, cycles: number) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCycle((prevCycle) => {
        if (prevCycle >= cycles * words.length - 1) {
          clearInterval(timer)
          setCurrentWord(words[0])
          return prevCycle
        }
        setCurrentWord(words[(prevCycle + 1) % words.length])
        return prevCycle + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval, cycles])

  return currentWord
}

export default function Guide() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  const currentWord = useWordCycle(words, 2000, 2)

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black min-h-screen">
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ReactPlayer
          url="/videos/bg-video-1.mp4"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted={true}
          playsinline={true}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }
              }
            }
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>

      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="inline-block mr-2 left-0">Elysian</span>
          <span className={`inline-block  overflow-hidden font-mono align-bottom  ${currentWord==="Innovations"? 'text-white' : 'text-green-500'} `}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                className="inline-flex"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                
                
                transition={{ duration: 0.2, ease:"easeInOut" , repeatType: "reverse", }}
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2}}
        >
          ENABLING TOMORROW. TODAY!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <Button>Start Exploring</Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-sm mb-2">Scroll to discover more</p>
        <ChevronDown className="animate-bounce" size={24} />
      </motion.div>
    </section>
  )
}