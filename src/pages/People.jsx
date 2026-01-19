import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function People() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-black/60">
              Our People
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-black">
              The people behind the work.
            </h1>
            <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
              Our team is made up of passionate professionals dedicated to
              helping brands grow and connect with their audiences.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Strategy Lead", role: "Brand & growth strategy" },
            { name: "Creative Director", role: "Campaigns & storytelling" },
            { name: "Media Lead", role: "Performance & analytics" },
          ].map((person) => (
            <div
              key={person.name}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {person.name.charAt(0)}
              </div>
              <div className="mt-4 font-semibold text-black">{person.name}</div>
              <div className="text-sm text-black/60">{person.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-black/70">
          Meet the extended team or{" "}
          <a href="/contact" className="text-blue-600 underline">
            contact us
          </a>{" "}
          for bios.
        </div>
      </Section>
    </>
  );
}
