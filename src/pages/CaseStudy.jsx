import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import caseStudies from "../data/caseStudies.js";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <div className="text-sm text-black/60">Case study not found.</div>
          <Link to="/" className="mt-4 inline-flex text-blue-600 underline">
            Back to home
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <Container className="py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
            {study.category}
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-black">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
            {study.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {study.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-black/10 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/60"
              >
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                Brand story & impact
              </h2>
              <ul className="mt-6 space-y-4 text-black/70 leading-relaxed">
                {study.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {study.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/10 bg-slate-50 p-5"
                >
                  <div className="text-2xl font-semibold text-black">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-black/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
                Campaign video
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-black">
                Watch the launch story
              </h2>
              <p className="mt-4 text-black/70 leading-relaxed">
                A highlight reel of the brand activation and content rollout
                across channels.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
              <iframe
                title={`${study.title} video`}
                src={study.videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <Link
            to="/"
            className="mt-10 inline-flex text-blue-600 underline underline-offset-4"
          >
            Back to home
          </Link>
        </Container>
      </section>
    </>
  );
}
