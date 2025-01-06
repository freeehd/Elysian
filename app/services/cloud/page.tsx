import { HeroSection } from "@/components/services/cloud/hero-section"
import { OfferingSection } from "@/components/services/cloud/offering-section"
import { ProcessSection } from "@/components/services/cloud/process-section"
import { BenefitsSection } from "@/components/services/cloud/benefits-section"

export default function Cloud() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

