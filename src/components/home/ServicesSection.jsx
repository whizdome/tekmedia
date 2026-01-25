import Section from "../ui/Section.jsx";
const services = [
  {
    title: "Videography",
    items: [
      "Brand and campaign videos",
      "Product and service videos",
      "Corporate and commercial shoots",
      "Event coverage and highlights",
      "Post-production and editing",
    ],
  },
  {
    title: "Content Creation",
    items: [
      "Visual content for digital platforms",
      "Brand-aligned creative assets",
      "Campaign content development",
      "Short-form and long-form content",
      "Consistent content styling",
    ],
  },
  {
    title: "Social Media Marketing",
    items: [
      "Campaign planning and execution",
      "Audience targeting and paid distribution",
      "Content promotion strategies",
      "Performance tracking and optimisation",
      "Data-informed campaign adjustments",
    ],
  },
  {
    title: "Social Media Management",
    items: [
      "Content planning and scheduling",
      "Daily platform management",
      "Brand voice and consistency",
      "Community and engagement monitoring",
      "Platform performance reporting",
    ],
  },
];

export default function ServicesSection() {
  return (
    <Section className="bg-blue-100/80 text-black">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-blue-900">
            Services
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold max-w-md leading-tight text-blue-950">
            An overview of what we do
          </h2>
          <p className="mt-6 text-base md:text-lg text-blue-950/80 leading-relaxed">
            With experience across videography, content creation, social media
            management, and marketing, Tek Media delivers creative services
            built for modern brand communication.
          </p>
          <p className="mt-4 text-base md:text-lg text-blue-950/80 leading-relaxed">
            We work closely with brands to execute focused creative solutions
            shaped by clear objectives, audience relevance, and consistency
            across platforms.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm shadow-blue-200/60"
            >
              <h3 className="text-sm uppercase tracking-[0.22em] font-semibold text-blue-950">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base text-blue-950/80 list-disc list-inside marker:text-blue-700">
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
