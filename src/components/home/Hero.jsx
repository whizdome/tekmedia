import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";

export default function Hero() {
  return (
    <section className="border-b border-white/10 bg-[#0a0a0a]">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr] items-start">
          {/* Left column: tagline, headline, description, CTA */}
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/60">
              Growth marketing for bold brands
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-white">
              Accelerate your<br className="hidden md:block" />
              growth results.
            </h1>

            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              We design and execute performance-driven campaigns that help brands
              make faster, more meaningful connections with their audiences across
              digital, experiential and integrated channels.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
              >
                Start a project
              </Link>

              <span className="text-xs uppercase tracking-[0.24em] text-white/60">
                Strategy · Creative · Media · Technology
              </span>
            </div>
          </div>

          {/* Right column: hero image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <img
                src="/assets/hero-image.jpg"
                alt="Tekmedia creative work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA cards beneath hero */}
        <div className="mt-16 flex flex-wrap gap-4 items-stretch">
          <a
            href="#"
            className="flex-1 min-w-[220px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors"
          >
            <div className="text-sm font-medium leading-snug text-white">
              Pitch‑grade creative for digital and experiential.
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-white/60">
              Case studies
            </span>
          </a>

          <a
            href="#"
            className="flex-1 min-w-[220px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex items-center justify-between hover:bg-white/10 transition-colors"
          >
            <div className="text-sm font-medium leading-snug text-white">
              Award‑winning work, across categories.
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-white/60">
              View highlights
            </span>
          </a>
        </div>

      </Container>
    </section>
  );
}
