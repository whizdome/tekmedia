import Section from "../ui/Section.jsx";

const differentiators = [
  {
    title: "Strategic Foundation",
    description:
      "Every engagement begins with clear direction. Purpose, audience, and application are defined before production starts.",
  },
  {
    title: "Creative Discipline",
    description:
      "Our work is guided by established standards and thoughtful decision-making, not guesswork or passing trends.",
  },
  {
    title: "Scalable Execution",
    description:
      "We design content systems that can be reused, adapted, and expanded across platforms without losing coherence.",
  },
  {
    title: "Accountable Performance",
    description:
      "Creative decisions are reviewed against outcomes, ensuring performance is measured and refined over time.",
  },
];

export default function Differentiation() {
  return (
    <Section className="bg-white text-black">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
            What sets us apart
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold max-w-md leading-tight text-black">
            We build visual systems brands can rely on.
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
            Tek Media collaborates with brands that prioritize clarity,
            consistency, and long-term effectiveness in their creative
            endeavors. Our focus is not volume or trends, but structure, intent,
            and execution that holds up.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-black/10 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-black/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
