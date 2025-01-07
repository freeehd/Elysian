'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const processSteps = [
  {
    title: 'Initial contact',
    content: 'Reach out to us with your project requirements and objectives.',
  },
  {
    title: 'Meeting with team',
    content: 'We will initiate internal discussions to clearly define the project scope, objectives, and requirements.',
  },
  {
    title: 'Request for Proposal (RFP)',
    content: 'Based on our discussions, we\'ll prepare and submit a detailed proposal outlining our approach, timeline, and investment.',
  },
  {
    title: 'Start work',
    content: 'Once both parties finalize the contractual agreements, we would officially kick off the project.',
  },
  {
    title: 'Development and performance evaluation',
    content: 'Our team begins the development process while maintaining regular checkpoints for performance evaluation.',
  },
  {
    title: 'Meetings and improvements',
    content: 'Regular meetings to discuss progress, gather feedback, and implement improvements.',
  },
  {
    title: 'Maintenance and support',
    content: 'Ongoing maintenance and support to ensure your solution continues to perform optimally.',
  },
]

export default function ProcessSection() {
  const [activeImage, setActiveImage] = useState<number>(0)
  
  const images = [
    '/images/process/meeting.svg',
    '/images/process/collaboration.svg'
  ]

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">OUR</span>{' '}
              <span className="text-[#3584C0]">PROCESS</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              How does collaborating with Elysian look like?
            </p>

            <Accordion type="single" collapsible className="w-full">
              {processSteps.map((step, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger 
                    onClick={() => setActiveImage(index % 2)}
                    className="hover:text-[#3584C0] hover:no-underline text-left py-4 text-gray-900 dark:text-gray-100"
                  >
                    <span className="text-lg font-medium">{step.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 py-4">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative h-[600px] lg:sticky lg:top-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeImage === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

