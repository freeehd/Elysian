import { HeroSection } from "@/components/solutions/datacenter-solutions/hero-section"
import { ServicesSection } from "@/components/solutions/datacenter-solutions/services-section"
import { ProcessSection } from "@/components/solutions/datacenter-solutions/process-section"
import { BenefitsSection } from "@/components/solutions/datacenter-solutions/benefits-section"

export default function Database() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

