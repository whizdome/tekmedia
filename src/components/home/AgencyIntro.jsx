import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function AgencyIntro() {
  return (
    <Section>
      <div className="max-w-4xl">
        <div className="text-xs uppercase tracking-[0.28em] text-white/60">
          Agency introduction
        </div>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-white">
          Tek Media is a full‑service agency blending strategy, creative, and
          media to deliver bold ideas that scale across channels.
        </h2>
        <p className="mt-6 text-white/70 leading-relaxed">
          We help growth-minded brands unlock the next layer of influence by
          building distinct identities, seamless digital ecosystems, and
          conversion-focused storytelling.
        </p>

        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
