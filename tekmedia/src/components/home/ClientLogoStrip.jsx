const logos = [
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
  
  export default function ClientLogoStrip() {
    return (
      <section className="border-t border-zinc-300/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-16">
          <div className="text-xs uppercase tracking-widest text-zinc-500">
            Proudly served
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {logos.map((l) => (
              <span key={l} className="px-4 py-2 border border-zinc-300/80 rounded-full text-sm text-zinc-700">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  