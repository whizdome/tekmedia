import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function AgencyIntro() {
  return (
    <Section>
      <div className="max-w-4xl">
        <div className="text-xs uppercase tracking-[0.28em] text-black/60">
          Agency introduction
        </div>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-black">
          We help ambitious brands shape culture with strategy-led creative,
          performance media, and technology that scales.
        </h2>
        <p className="mt-6 text-black/70 leading-relaxed">
          Tek Media positions your brand with clarity, builds memorable
          experiences, and turns attention into measurable growth.
        </p>

        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm text-white hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
