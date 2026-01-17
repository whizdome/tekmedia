export default function HeroStats() {
    const partners = [
      "Spotify",
      "Mastercard",
      "Access Bank",
      "MTN",
      "Diageo",
      "P&G",
    ];
    return (
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Selected partners */}
        <div className="col-span-2 border border-black/10 rounded-lg p-4 space-y-2 bg-white shadow-sm">
          <div className="text-xs uppercase tracking-widest text-black/60">
            Selected partners
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {partners.map((p) => (
              <span
                key={p}
                className="text-sm border border-black/10 px-3 py-1 rounded-full text-black/70 bg-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
  
        {/* Years in the field */}
        <div className="border border-black/10 rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm">
          <div className="text-xs uppercase tracking-widest text-black/60">
            Years in the field
          </div>
          <div className="mt-2 text-3xl font-bold text-black">10+</div>
        </div>
  
        {/* Campaigns shipped */}
        <div className="border border-black/10 rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm">
          <div className="text-xs uppercase tracking-widest text-black/60">
            Campaigns shipped
          </div>
          <div className="mt-2 text-3xl font-bold text-black">500+</div>
        </div>
      </div>
    );
  }
  
