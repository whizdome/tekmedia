import Section from "../ui/Section.jsx";
import services from "../../data/services.json";

export default function ServicesSection() {
  return (
    <Section className="bg-slate-50">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
            Services
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold max-w-md leading-tight text-black">
            An overview of what we do.
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed">
            We blend advertising, digital marketing, brand strategy, and
            experience design to help organizations communicate clearly, earn
            trust, and accelerate growth across channels.
          </p>
        </div>

        <div className="rounded-[28px] bg-[#0f1b3d] p-8 md:p-10 text-white shadow-[0_25px_70px_-50px_rgba(15,27,61,0.6)]">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="text-xs uppercase tracking-[0.22em] font-semibold text-blue-200">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
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
      </div>
    </Section>
  );
}
