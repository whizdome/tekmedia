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
    <Section className="bg-white text-black">
      <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
        Clients & credibility
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-black max-w-3xl leading-tight">
        Trusted by teams across finance, consumer goods, telecoms and culture.
      </h2>

      <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
        A snapshot of brands we’ve supported across campaigns, content and growth.
      </p>

      {/* Logo strip (Dotts-style credibility block) */}
      <div className="mt-10 space-y-4 overflow-hidden">
        {[0, 1].map((row) => (
          <div key={row} className="flex overflow-hidden">
            <div className={`marquee ${row % 2 === 0 ? "" : "reverse"}`}>
              {[...clients, ...clients].map((c, idx) => (
                <div
                  key={`${c}-${row}-${idx}`}
                  className="shrink-0 rounded-full border border-black/10 bg-slate-50 px-6 py-3"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60 whitespace-nowrap">
                    {c}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
