import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";
import caseStudies from "../../data/caseStudies.js";

export default function CaseStudies() {
  return (
    <Section id="work" className="bg-white text-black">
      {/* Section header */}
      <div className="max-w-7xl">
        <div className="text-sm font-black uppercase tracking-[0.32em] text-blue-700">
          Case Studies
        </div>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-black">
          Work that delivers clarity and results
        </h2>
      </div>

      {/* Case study grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            to={`/case-studies/${study.slug}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              {study.coverImage ? (
                <img
                  src={study.coverImage}
                  alt={`${study.title} cover`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/40" />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Category */}
              <div className="absolute bottom-4 left-4">
                <span className="text-xs uppercase tracking-[0.18em] text-white">
                  {study.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-black">
                {study.title}
              </h3>

              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                {study.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          to="/work"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex rounded-full border border-blue-600 px-6 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 transition hover:bg-blue-50"
        >
          View all case studies
        </Link>
      </div>
    </Section>
  );
}
