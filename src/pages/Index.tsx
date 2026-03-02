import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MembersSection from "@/components/sections/MembersSection";
import LocationSection from "@/components/sections/LocationSection";
import WorkSection from "@/components/sections/WorkSection";
import UpcomingSection from "@/components/sections/UpcomingSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FAQSection from "@/components/sections/FAQSection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="grain-overlay min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <LocationSection />
      <WorkSection />
      <UpcomingSection />
      <PartnersSection />
      <FAQSection />
      <JoinUsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
