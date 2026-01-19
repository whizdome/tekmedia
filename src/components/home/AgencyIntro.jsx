import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function AgencyIntro() {
  return (
    <Section>
      <div className="max-w-4xl">
        <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
          Agency introduction
        </div>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-black">
          Tek Media is a growth-focused agency delivering strategy, creative,
          and media that help brands earn attention and accelerate revenue.
        </h2>
        <p className="mt-6 text-black/70 leading-relaxed">
          We position your brand with clarity, craft bold experiences, and
          connect you to the audiences that matter most.
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
