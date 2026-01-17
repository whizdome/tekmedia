import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Teams() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-white/60">
              Our Teams
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-white">
              Meet the teams driving innovation.
            </h1>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Our diverse teams bring together expertise in strategy, creative,
              media, and technology to deliver exceptional results.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/70">
            Team information coming soon. Check back later or{" "}
            <a href="/contact" className="text-white underline">
              contact us
            </a>{" "}
            to learn more.
          </p>
        </div>
      </Section>
    </>
  );
}
