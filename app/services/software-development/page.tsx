import { HeroSection } from "@/components/services/software-development/hero-section"
import { OfferingSection } from "@/components/services/software-development/offering-section"
import { ProcessSection } from "@/components/services/software-development/process-section"
import { BenefitsSection } from "@/components/services/software-development/benefits-section"

export default function SoftwareDevelopment() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

