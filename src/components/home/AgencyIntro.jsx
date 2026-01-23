import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function AgencyIntro() {
  return (
    <Section className="bg-white text-black">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black">
            Strategy-led creative built for performance.
          </h2>
          <p className="mt-5 text-base md:text-lg text-black/70 leading-relaxed">
            Tek Media is a creative media agency delivering videography, content
            creation, and social media marketing and management with clear
            direction, consistent execution, and measurable outcomes.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-blue-50 shadow-sm">
            <div className="aspect-[16/9] w-full p-0">
              <picture>
                <source srcSet="/agency-hero.jpg" type="image/jpeg" />
                <img
                  src="/agency-hero.svg"
                  alt="Tek Media creative studio preview"
                  className="h-full w-full object-cover"
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
