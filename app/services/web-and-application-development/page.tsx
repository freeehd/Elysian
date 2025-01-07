import { HeroSection } from "@/components/services/web-and-application-development/hero-section"
import { OfferingSection } from "@/components/services/web-and-application-development/offering-section"
import { ProcessSection } from "@/components/services/web-and-application-development/process-section"
import { BenefitsSection } from "@/components/services/web-and-application-development/benefits-section"

export default function WebAndApplicationDevelopment() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

