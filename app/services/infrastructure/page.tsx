import { HeroSection } from "@/components/services/infrastructure-solutions/hero-section"
import { OfferingSection } from "@/components/services/infrastructure-solutions/offering-section"
import { ProcessSection } from "@/components/services/infrastructure-solutions/process-section"
import { BenefitsSection } from "@/components/services/infrastructure-solutions/benefits-section"

export default function InfrastructureSolutions() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}
