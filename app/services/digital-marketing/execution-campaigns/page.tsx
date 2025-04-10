import { HeroSection } from "@/components/services/digital-marketing/execution-campaigns/hero-section"
import { OfferingSection } from "@/components/services/digital-marketing/execution-campaigns/offering-section"
import { ProcessSection } from "@/components/services/digital-marketing/execution-campaigns/process-section"
import { BenefitsSection } from "@/components/services/digital-marketing/execution-campaigns/benefits-section"

export default function DigitalMarketingExecutionCampaigns() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OfferingSection />
      <ProcessSection />
      <BenefitsSection />
    </main>
  )
}
