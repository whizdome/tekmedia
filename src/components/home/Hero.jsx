import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";

export default function Hero() {
  return (
    <section className="border-b border-white/10 bg-[#0a0a0a]">
      <Container className="py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 md:p-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/10 blur-[120px]" />

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-white/50">
                Tek Media Creative Agency
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.02] text-white">
                We build bold ideas
                <br className="hidden md:block" />
                that scale with culture.
              </h1>
              <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
                Strategy, creative, media, and technology working as one. We
                help ambitious brands create unforgettable moments and measurable
                momentum.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
                >
                  Start a project
                </Link>
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-[0.24em] text-white/60 hover:text-white transition-colors"
                >
                  See our approach
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Global Launches",
                  description:
                    "Cross-market campaigns spanning Africa, Europe, and North America.",
                },
                {
                  title: "Culture + Commerce",
                  description:
                    "Creative that balances brand storytelling with measurable growth.",
                },
                {
                  title: "Always-On Strategy",
                  description:
                    "Performance sprints, social ecosystems, and experiential rollouts.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6"
                >
                  <div className="text-xs uppercase tracking-[0.28em] text-white/50">
                    {card.title}
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              { label: "Campaigns delivered", value: "120+" },
              { label: "Markets supported", value: "18" },
              { label: "Client retention", value: "92%" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/40 px-6 py-5"
              >
                <div className="text-2xl font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.24em] text-white/60">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
