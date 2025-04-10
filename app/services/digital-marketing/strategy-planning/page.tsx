import { HeroSection } from "@/components/services/digital-marketing/strategy-planning/hero-section"
import { OfferingSection } from "@/components/services/digital-marketing/strategy-planning/offering-section"
import { ProcessSection } from "@/components/services/digital-marketing/strategy-planning/process-section"
import { BenefitsSection } from "@/components/services/digital-marketing/strategy-planning/benefits-section"

export default function DigitalMarketingStrategyPlanning() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}
