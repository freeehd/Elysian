import { HeroSection } from "@/components/solutions/erp/hero-section"
import { ServicesSection } from "@/components/solutions/erp/services-section"
import { ProcessSection } from "@/components/solutions/erp/process-section"
import { BenefitsSection } from "@/components/solutions/erp/benefits-section"

export default function ERP() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

