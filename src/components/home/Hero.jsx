import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";

export default function Hero() {
  return (
    <section className="border-b border-black/10 bg-white">
      <Container className="py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-10 md:p-16 shadow-[0_30px_120px_-60px_rgba(29,78,216,0.35)]">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-blue-700">
                Tek Media Creative Agency
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.02] text-black">
                We are a full‑service agency
                <br className="hidden md:block" />
                for brand growth and relevance.
              </h1>
              <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
                Tek Media blends strategy, creative, media, and technology to
                position brands clearly and move audiences to act across every
                touchpoint.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-[0.24em] text-black/60 hover:text-black transition-colors"
                >
                  See our approach
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-black/50">
                <span className="rounded-full border border-black/10 px-4 py-2">
                  Strategy
                </span>
                <span className="rounded-full border border-black/10 px-4 py-2">
                  Creative
                </span>
                <span className="rounded-full border border-black/10 px-4 py-2">
                  Media
                </span>
                <span className="rounded-full border border-black/10 px-4 py-2">
                  Technology
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[28px] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 shadow-[0_25px_80px_-60px_rgba(29,78,216,0.45)] overflow-hidden flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-blue-700">
                    Featured Work
                  </div>
                  <p className="mt-4 text-lg font-semibold text-black">
                    Image placeholder
                  </p>
                  <p className="mt-2 text-sm text-black/60">
                    Your hero visual will be placed here.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-blue-200 bg-white px-5 py-4 shadow-lg">
                <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
                  Featured stat
                </div>
                <div className="mt-1 text-xl font-semibold text-black">
                  +92% lift
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
