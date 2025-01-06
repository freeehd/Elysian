'use client'

import { HeroSection } from '@/components/consulting/HeroSection'
import { StrategicGuidance } from '@/components/consulting/StrategicGuidance'
import { ConsultingCategories } from '@/components/consulting/ConsultingCategories'
import { ConsultingProcess } from '@/components/consulting/ConsultingProcess'
import { WhyChooseSection } from '@/components/consulting/WhyChooseSection'
import DynamicBackground from '@/components/DynamicBackground'

export default function ConsultingPage() {
  return (
    <div className="relative min-h-screen">
      <DynamicBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Strategic Guidance Section */}
      <StrategicGuidance />

      {/* Consulting Categories Section */}
      <ConsultingCategories />

      {/* Consulting Process Section */}
      <ConsultingProcess />

      {/* Why Choose Us Section */}
      <WhyChooseSection />
    </div>
  )
}

