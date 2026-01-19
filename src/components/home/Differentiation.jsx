import Section from "../ui/Section.jsx";

const differentiators = [
  {
    title: "Data-Driven Strategy",
    description:
      "Every campaign is backed by comprehensive data analysis and insights to ensure maximum impact and ROI.",
  },
  {
    title: "Creative Excellence",
    description:
      "We combine strategic thinking with award-winning creative to deliver campaigns that resonate and convert.",
  },
  {
    title: "Integrated Approach",
    description:
      "From digital to experiential, we create seamless brand experiences across all touchpoints.",
  },
  {
    title: "Results Focused",
    description:
      "We measure success by the growth and impact we deliver for our clients, not just creative awards.",
  },
];

export default function Differentiation() {
  return (
    <Section className="bg-[#0a0a0a] text-white">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/60">
            What sets us apart
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold max-w-md leading-tight text-white">
            We build distinct, measurable, and scalable brand systems.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Tek Media blends strategic clarity with bold creativity, ensuring
            every activation is grounded in insight and executed with precision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
