import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import caseStudies from "../data/caseStudies.js";

export default function OurWork() {
  return (
    <section className="bg-white text-black">
      <Container className="py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
          Our Work
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold text-black">
          Case studies & campaigns
        </h1>
        <p className="mt-6 max-w-2xl text-black/70 leading-relaxed">
          Explore a selection of brand stories, services delivered, and campaign
          work led by Tek Media.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-blue-50">
                {study.coverImage ? (
                  <img
                    src={study.coverImage}
                    alt={`${study.title} cover`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/40" />
                )}
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-blue-700">
                  {study.category}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-black">
                  {study.title}
                </h2>
                <p className="mt-4 text-sm text-black/70 leading-relaxed">
                  {study.summary}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-blue-700">
                  View case study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
