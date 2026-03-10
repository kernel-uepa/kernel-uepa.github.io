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
      {/* Blueprint grid — fixed behind all content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px, 96px 96px, 24px 24px, 24px 24px',
        }}
      />
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
