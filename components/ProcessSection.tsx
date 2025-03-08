"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeInSection } from "./FadeInSection"

const processSteps = [
  {
    title: "Initial contact",
    content: "Reach out to us with your project requirements and objectives.",
    image: "/images/process/1.png",
  },
  {
    title: "Meeting with team",
    content: "We will initiate internal discussions to clearly define the project scope, objectives, and requirements.",
    image: "/images/process/2.png",
  },
  {
    title: "Request for Proposal (RFP)",
    content:
      "Based on our discussions, we'll prepare and submit a detailed proposal outlining our approach, timeline, and investment.",
    image: "/images/process/3.png",
  },
  {
    title: "Start work",
    content: "Once both parties finalize the contractual agreements, we would officially kick off the project.",
    image: "/images/process/4.png",
  },
  {
    title: "Development and performance evaluation",
    content:
      "Our team begins the development process while maintaining regular checkpoints for performance evaluation.",
    image: "/images/process/5.png",
  },
  {
    title: "Meetings and improvements",
    content: "Regular meetings to discuss progress, gather feedback, and implement improvements.",
    image: "/images/process/6.png",
  },
  {
    title: "Maintenance and support",
    content: "Ongoing maintenance and support to ensure your solution continues to perform optimally.",
    image: "/images/process/7.png",
  },
]

export default function ProcessSection() {
  const [activeImage, setActiveImage] = useState<number>(0)

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-caribbean/5 to-teal/5 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeInSection>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                OUR{" "}
                <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">PROCESS</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                How does collaborating with Elysian look like?
              </p>

              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {processSteps.map((step, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 dark:border-rich-black-300 data-[state=open]:bg-white/50 dark:data-[state=open]:bg-rich-black-200/50 data-[state=open]:rounded-md data-[state=open]:border data-[state=open]:border-gray-100 dark:data-[state=open]:border-rich-black-300 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger
                      onClick={() => setActiveImage(index)}
                      className="hover:text-teal dark:hover:text-teal-400 hover:no-underline text-left py-4 px-4 text-gray-900 dark:text-gray-100 rounded-t-md data-[state=open]:font-semibold"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal to-caribbean flex items-center justify-center text-white font-bold mr-3 text-sm">
                          {index + 1}
                        </div>
                        <span className="text-lg">{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 py-4 px-4 ml-11">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInSection>

          <div className="relative h-[600px] lg:sticky lg:top-8 bg-white/50 dark:bg-rich-black-200/30 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-rich-black-300">
            <AnimatePresence mode="wait">
              {processSteps.map(
                (step, index) =>
                  activeImage === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-6"
                    >
                      <div className="relative h-full w-full">
                        <div className="relative h-full w-full">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={`Process step illustration: ${step.title}`}
                            fill
                            className="object-contain [filter:hue-rotate(-30deg)_saturate(80%)]"
                            priority={index === 0}
                          />
                          {/* Enhanced color filter overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-teal/40 to-caribbean/40 mix-blend-color rounded-lg"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-teal to-caribbean p-3 rounded-lg shadow-md">
                        <p className="text-white font-medium text-center">
                          Step {index + 1}: {step.title}
                        </p>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

