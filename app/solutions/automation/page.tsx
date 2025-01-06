import { HeroSection } from "@/components/solutions/automatic-solutions/hero-section"
import { ServicesSection } from "@/components/solutions/automatic-solutions/services-section"
import { ProcessSection } from "@/components/solutions/automatic-solutions/process-section"
import { BenefitsSection } from "@/components/solutions/automatic-solutions/benefits-section"

export default function EnterpriseResourcePlanning() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

