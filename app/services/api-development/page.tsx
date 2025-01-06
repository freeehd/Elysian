import { ServicesHeroSection } from '@/components/services/api-development-integration/hero-section'
import { ServicesSection } from '@/components/services/api-development-integration/services-section'
import { ProcessSection } from '@/components/services/api-development-integration/process-section'
import { BenefitsSection } from '@/components/services/api-development-integration/benefits-section'

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

