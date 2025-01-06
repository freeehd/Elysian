import { HeroSection } from "@/components/services/application-modernization/hero-section"
import { ServicesSection } from "@/components/services/application-modernization/services-section"
import { ProcessSection } from "@/components/services/application-modernization/process-section"
import { BenefitsSection } from "@/components/services/application-modernization/benefits-section"

export default function ApplicationModernization() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

