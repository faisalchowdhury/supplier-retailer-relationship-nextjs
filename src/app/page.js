import HeroSection from "@/components/home-components/HeroSection";
import RetailerSection from "@/components/home-components/RetailerSection";
import SrSection from "@/components/home-components/SrSection";
import FeatureSection from "@/components/home-components/FeatureSection";
import ProcessSection from "@/components/home-components/ProcessSection";

export default function Home() {
  return (
    <section>
      <HeroSection></HeroSection>
      <RetailerSection></RetailerSection>
      <SrSection></SrSection>
      <FeatureSection></FeatureSection>
      <ProcessSection></ProcessSection>
    </section>
  );
}
