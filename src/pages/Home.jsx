import Hero from "../components/home/Hero.jsx";
import AgencyIntro from "../components/home/AgencyIntro.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import FootprintSection from "../components/home/FootprintSection.jsx";
import CaseStudies from "../components/home/CaseStudies.jsx";
import Differentiation from "../components/home/Differentiation.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import CTASection from "../components/home/CTASection.jsx";

export default function Home() {
  return (
    <>
      {/* 1. Hero / Opening Section */}
      <Hero />

      {/* 2. Agency Introduction Section */}
      <AgencyIntro />

      {/* 3. Services / What We Do Overview */}
      <ServicesSection />

      {/* 4. Client / Credibility Visual Block */}
      <FootprintSection />

      {/* 5. Case Studies / Work Preview */}
      <CaseStudies />

      {/* 6. Agency Differentiation Section */}
      <Differentiation />

      {/* 7. Testimonials / Social Proof Slider */}
      <Testimonials />

      {/* 8. Final CTA / Contact Prompt */}
      <CTASection />
    </>
  );
}