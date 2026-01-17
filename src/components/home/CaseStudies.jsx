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
    <Section className="bg-slate-50">
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

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {caseStudies.map((study) => (
            <div key={study.id} className="w-full shrink-0 px-3">
              <Link
                to="/about"
                className="group block rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="text-xs uppercase tracking-[0.18em] text-blue-700">
                      {study.category}
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-blue-700">
                    Featured
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
            </div>
          ))}
        </div>
      </div>
      <div className="slider-dots">
        {caseStudies.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`slider-dot ${idx === activeIndex ? "active" : ""}`}
            aria-label={`Go to case study ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}
