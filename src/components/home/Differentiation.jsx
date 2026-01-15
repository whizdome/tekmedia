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
    <Section>
      <div className="text-xs uppercase tracking-[0.28em] text-white/60">
        What Sets Us Apart
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold max-w-3xl leading-tight text-white">
        We combine strategic insight with creative excellence to deliver
        measurable results.
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
    </Section>
  );
}
