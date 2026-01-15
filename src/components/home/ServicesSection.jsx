import Section from "../ui/Section.jsx";
import services from "../../data/services.json";

export default function ServicesSection() {
  return (
    <Section>
      <div className="text-xs uppercase tracking-[0.28em] text-white/60">
        What we do
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold max-w-3xl leading-tight text-white">
        We’re a growth marketing company built for performance and brand impact.
      </h2>

      <p className="mt-6 max-w-3xl text-white/70 leading-relaxed">
        Trying to figure out how to scale and which marketing channels will help you
        grow fastest can be confusing and stressful.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-4">
        {services.map((s) => (
          <div key={s.title}>
            <h3 className="text-xs uppercase tracking-[0.22em] font-semibold text-white">
              {s.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.items.map((it) => (
                <li key={it} className="leading-relaxed">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
