import Section from "../ui/Section.jsx";

export default function FootprintSection() {
  const clients = [
    "British Council",
    "Wikipedia",
    "Mastercard",
    "Access Bank",
    "GLO",
    "Spotify",
    "Diageo",
    "MTN",
    "P&G",
  ];

  return (
    <Section className="bg-white">
      <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
        Clients & credibility
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-black max-w-3xl leading-tight">
        Trusted by teams across finance, consumer goods, telecoms and culture.
      </h2>

      <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
        A snapshot of brands we’ve supported across campaigns, content and growth.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c) => (
          <div
            key={c}
            className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-6 py-5 shadow-sm"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-black/60">
              {c}
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-50 border border-blue-100" />
          </div>
        ))}
      </div>
    </Section>
  );
}
