'use client'

import { HeroSection } from '@/components/transformation/HeroSection'
import { StrategicGuidance } from '@/components/transformation/StrategicGuidance'
import { TransformationCategories } from '@/components/transformation/TransformationCategories'
import { TransformationProcess } from '@/components/transformation/TransformationProcess'
import { WhyChooseSection } from '@/components/transformation/WhyChooseSection'
import DynamicBackground from '@/components/DynamicBackground'

export default function TransformationPage() {
  return (
    <div className="relative min-h-screen">
      <DynamicBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Strategic Guidance Section */}
      <StrategicGuidance />

      {/* Transformation Categories Section */}
      <TransformationCategories />

      {/* Transformation Process Section */}
      <TransformationProcess />

      {/* Why Choose Us Section */}
      <WhyChooseSection />
    </div>
  )
}

