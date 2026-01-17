import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-2xl mx-auto rounded-[28px] border border-black/10 bg-gradient-to-br from-white via-white to-blue-50 px-8 py-12 shadow-[0_25px_70px_-50px_rgba(29,78,216,0.35)]">
        <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
          Ready when you are
        </div>
        <div className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-black">
          Let’s build something unforgettable together.
        </div>
        <p className="mt-4 text-sm text-black/70 leading-relaxed">
          Tell us about your next launch, expansion, or rebrand and we’ll map out
          the fastest path to impact.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white hover:bg-blue-700 transition-colors"
        >
          Contact Tek Media
        </Link>
      </div>
    </Section>
  );
}
