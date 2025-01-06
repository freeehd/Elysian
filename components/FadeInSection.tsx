'use client'

import { useRef, useEffect, useState } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode
}

export function FadeInSection({ children }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    
    const currentElement = domRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <div
      className={`transition-opacity duration-1000 transform translate-y-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0'
      }`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

