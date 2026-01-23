import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function AgencyIntro() {
  return (
    <Section className="bg-white text-black">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black">
            Accelerate your growth with strategy-led creative and performance.
          </h2>
          <p className="mt-5 text-black/70 leading-relaxed">
            Tek Media is a full‑service agency blending strategy, creative, and
            media to deliver bold ideas that scale across channels. We help
            growth-minded brands unlock the next layer of influence through
            distinct identities, seamless digital ecosystems, and
            conversion-focused storytelling.
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
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-white via-white to-blue-50 shadow-sm">
            <div className="aspect-[4/3] w-full p-6 sm:p-8">
              <picture>
                <source srcSet="/agency-hero.jpg" type="image/jpeg" />
                <img
                  src="/agency-hero.svg"
                  alt="Tek Media creative studio preview"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
