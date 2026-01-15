import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function AgencyIntro() {
  return (
    <Section>
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
          We are agile, strategic, innovative and passionate. Using data-driven
          marketing solutions, we help our clients make faster and more meaningful
          connections with their target audiences.
        </h2>

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
