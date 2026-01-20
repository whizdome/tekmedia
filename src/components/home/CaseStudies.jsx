import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Afrobeat Global Launch",
    category: "Brand Campaign",
    summary: "Multi-market rollout for a new music platform.",
  },
  {
    id: 2,
    title: "Retail Growth Sprint",
    category: "Performance Media",
    summary: "Always-on media and CRM automation for eCommerce scale.",
  },
  {
    id: 3,
    title: "Fintech Trust Builder",
    category: "Brand Strategy",
    summary: "New visual identity and UX refresh for a digital bank.",
  },
  {
    id: 4,
    title: "Culture-First Lifestyle Brand",
    category: "Integrated Campaign",
    summary: "Social storytelling and experiential brand activations.",
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="bg-white text-black">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
            Our Work
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-black">
            Case Studies
          </h2>
        </div>

        <Link
          to="/about"
          className="text-xs uppercase tracking-[0.18em] text-blue-700 hover:text-blue-800 transition-colors"
        >
          View All Work
        </Link>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            to="/about"
            className="group w-[260px] shrink-0 rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/40" />
              <div className="absolute inset-0 flex items-end p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-blue-700">
                  {study.category}
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="mt-2 text-lg font-semibold text-black">
                {study.title}
              </h3>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                {study.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="slider-dots">
        {caseStudies.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`slider-dot ${idx === activeIndex ? "active" : ""}`}
            aria-label={`Go to case study ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
