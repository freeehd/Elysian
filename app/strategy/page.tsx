'use client'

import { HeroSection } from '@/components/strategy/HeroSection'
import { StrategicGuidance } from '@/components/strategy/StrategicGuidance'
import { StrategyCategories } from '@/components/strategy/StrategyCategories'
import { StrategyProcess } from '@/components/strategy/StrategyProcess'
import { WhyChooseSection } from '@/components/strategy/WhyChooseSection'
import DynamicBackground from '@/components/DynamicBackground'

export default function StrategyPage() {
  return (
    <div className="relative min-h-screen">
      <DynamicBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Strategic Guidance Section */}
      <StrategicGuidance />

      {/* Strategy Categories Section */}
      <StrategyCategories />

      {/* Strategy Process Section */}
      <StrategyProcess />

      {/* Why Choose Us Section */}
      <WhyChooseSection />
    </div>
  )
}

