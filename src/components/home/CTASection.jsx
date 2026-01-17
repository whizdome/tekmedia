import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <Section className="bg-transparent">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-[0.28em] text-white/60">
          Ready when you are
        </div>
        <div className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-white">
          Let’s build something unforgettable together.
        </div>
        <p className="mt-4 text-sm text-white/70 leading-relaxed">
          Tell us about your next launch, expansion, or rebrand and we’ll map out
          the fastest path to impact.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
        >
          Contact Tek Media
        </Link>
      </div>
    </Section>
  );
}
