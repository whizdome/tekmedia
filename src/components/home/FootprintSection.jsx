import Section from "../ui/Section.jsx";

export default function FootprintSection() {
  const logos = [
    { name: "Puexchange", file: "IMG_4501.PNG" },
    { name: "Casio Music MEA", file: "IMG_4502.PNG" },
    { name: "Syinix", file: "IMG_4503.PNG" },
    { name: "Jeroid", file: "IMG_4504.PNG" },
    { name: "Rhapsody's", file: "IMG_4505.PNG" },
    { name: "KAM Consulting", file: "IMG_4506.PNG" },
    { name: "Catalyst Business Consult", file: "IMG_4507.PNG" },
    { name: "Slurp Juices", file: "IMG_4508.PNG" },
    { name: "Dawn Carrington", file: "IMG_4509.PNG" },
    { name: "Urban Gee Gadgets", file: "IMG_4510.PNG" },
    { name: "Brand Partner", file: "IMG_4511.PNG" },
    { name: "Royal Rest", file: "IMG_4513.PNG" },
  ];
  const shuffle = (items, seed) => {
    const list = [...items];
    let value = seed;
    for (let i = list.length - 1; i > 0; i -= 1) {
      value = (value * 9301 + 49297) % 233280;
      const rand = value / 233280;
      const j = Math.floor(rand * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };
  const rows = [
    shuffle(logos, 7),
    shuffle(logos, 19),
    shuffle(logos, 31),
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

      <div className="mt-10 space-y-6 overflow-hidden">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`marquee gap-6 ${rowIndex % 2 === 1 ? "reverse" : ""}`}
          >
            {[...row, ...row].map((logo, index) => (
              <div
                key={`${logo.name}-${rowIndex}-${index}`}
                className="flex h-24 w-[180px] items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm"
                aria-hidden={index >= row.length}
              >
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src={`/logos/${logo.file}`}
                  alt={`${logo.name} logo`}
                  className="h-12 w-auto max-w-[140px] object-contain"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-blue-700">
                  {logo.name}
                </span>
              </div>
            </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
