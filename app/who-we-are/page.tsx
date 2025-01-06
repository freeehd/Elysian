import { HeroSection } from '@/components/WhoWeAre/HeroSection'
import { ExpertisePillars } from '@/components/WhoWeAre/ExpertisePillar'
import { WhyChooseUs } from '@/components/WhoWeAre/WhyChooseUs'
import { CallToAction } from '@/components/WhoWeAre/CallToAction'

export default function WhoWeArePage() {
  return (
    <main>
      <HeroSection />
      <ExpertisePillars />
      <WhyChooseUs />
      <CallToAction />
    </main>
  )
}

