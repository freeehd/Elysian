import { HeroSection } from "@/components/services/managed-services/hero-section"
import { OfferingSection } from "@/components/services/managed-services/offering-section"
import { ProcessSection } from "@/components/services/managed-services/process-section"
import { BenefitsSection } from "@/components/services/managed-services/benefits-section"

export default function ManagedServices() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

