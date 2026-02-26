import Hero from "../components/home/Hero.jsx";
import CapabilitiesGrid from "../components/home/CapabilitiesGrid.jsx";
import CompanyShowcase from "../components/home/CompanyShowcase.jsx";
import ClientLogoStrip from "../components/home/ClientLogoStrip.jsx";
import Footprint from "../components/home/Footprint.jsx";
import BlogPreview from "../components/home/BlogPreview.jsx";
import CTASection from "../components/home/CTASection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitiesGrid />
      <CompanyShowcase />
      <ClientLogoStrip />
      <Footprint />
      <BlogPreview />
      <CTASection />
    </>
  );
}
  