import { DevOpsHeroSection } from '@/components/services/devops/hero-section'
import { ServicesSection } from '@/components/services/devops/services-section'
import { ProcessSection } from '@/components/services/devops/process-section'
import { BenefitsSection } from '@/components/services/devops/benefits-section'

export default function DevOpsPage() {
  return (
    <main>
      <DevOpsHeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}

