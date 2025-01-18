import Guide from "@/components/Guide";
import Spacer from "@/components/Spacer";
import Services from "@/components/ServiceGrid";
import ServicesSection from "@/components/services-section";
import SolutionsSection from "@/components/SolutionsSection";
import TechnologyExpertise from "@/components/TechnologyExpertise";
import ProcessSection from "@/components/ProcessSection";
export default function Home() {
  return (
    <>
      
      <Guide />
      <div id="next-section"></div>
     <Services/>
      <ServicesSection/>
      <SolutionsSection/>
      <TechnologyExpertise/>
      <ProcessSection/>
    </>
  )
}
