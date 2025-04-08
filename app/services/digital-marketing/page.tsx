import { HeroSection } from "@/components/services/digital-marketing/hero-section"
import { OfferingSection } from "@/components/services/digital-marketing/offering-section"
import { ProcessSection } from "@/components/services/digital-marketing/process-section"
import { BenefitsSection } from "@/components/services/digital-marketing/benefits-section"

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}
