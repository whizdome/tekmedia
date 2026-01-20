import Section from "../ui/Section.jsx";
import services from "../../data/services.json";

export default function ServicesSection() {
  return (
    <Section className="bg-white text-black">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
            What we do
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold max-w-md leading-tight text-black">
            A full creative stack for modern brands.
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed">
            From brand systems to launch campaigns, we design end‑to‑end
            experiences that connect with culture and deliver measurable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xs uppercase tracking-[0.22em] font-semibold text-black">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {s.items.map((it) => (
                  <li key={it} className="leading-relaxed">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
