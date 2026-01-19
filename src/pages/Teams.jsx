import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Teams() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-black/60">
              Our Teams
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-black">
              Meet the teams driving innovation.
            </h1>
            <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
              Our diverse teams bring together expertise in strategy, creative,
              media, and technology to deliver exceptional results.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Strategy", desc: "Insight, research, positioning, and go-to-market planning." },
            { title: "Creative", desc: "Brand identity, campaigns, content systems, and storytelling." },
            { title: "Media", desc: "Performance marketing, social, partnerships, and analytics." },
          ].map((team) => (
            <div
              key={team.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
                {team.title}
              </div>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                {team.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-black/70">
          Want to work with a specific team?{" "}
          <a href="/contact" className="text-blue-600 underline">
            Contact us
          </a>
          .
        </div>
      </Section>
    </>
  );
}
