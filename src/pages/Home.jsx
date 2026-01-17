import Hero from "../components/home/Hero.jsx";
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

      {/* 2. Services / What We Do Overview */}
      <ServicesSection />

      {/* 3. Client / Credibility Visual Block */}
      <FootprintSection />

      {/* 4. Case Studies / Work Preview */}
      <CaseStudies />

      {/* 5. Agency Differentiation Section */}
      <Differentiation />

      {/* 6. Testimonials / Social Proof Slider */}
      <Testimonials />

      {/* 7. Final CTA / Contact Prompt */}
      <CTASection />
    </>
  );
}
