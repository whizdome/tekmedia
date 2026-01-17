import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function People() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-white/60">
              Our People
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-white">
              The people behind the work.
            </h1>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Our team is made up of passionate professionals dedicated to
              helping brands grow and connect with their audiences.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/70">
            Team profiles coming soon. Check back later or{" "}
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
