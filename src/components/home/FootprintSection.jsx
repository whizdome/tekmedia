import Section from "../ui/Section.jsx";

export default function FootprintSection() {
  const logos = [
    { name: "Puexchange", file: "puexchange.png" },
    { name: "Casio Music MEA", file: "casio-music-mea.png" },
    { name: "Syinix", file: "syinix.png" },
    { name: "Blue Circle", file: "blue-circle.png" },
    { name: "Rhapsody's", file: "rhapsodys.png" },
    { name: "KAM Consulting", file: "kam-consulting.png" },
    { name: "Catalyst Business Consult", file: "catalyst-business-consult.png" },
    { name: "Slurp Juices", file: "slurp-juices.png" },
    { name: "Dawn Carrington", file: "dawn-carrington.png" },
    { name: "Urban Gee Gadgets", file: "urban-gee-gadgets.png" },
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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-24 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm"
          >
            <img
              src={`/logos/${logo.file}`}
              alt={`${logo.name} logo`}
              className="h-12 w-auto max-w-[140px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
