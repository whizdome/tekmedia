const items = [
    { title: "The Agency", blurb: "Growth-focused marketing and brand experiences." },
    { title: "Anaklefilms", blurb: "Stories brought to life across platforms." },
    { title: "Anaklelabs", blurb: "Product design + end-to-end application development." },
    { title: "Drovvo", blurb: "Data and insights for smarter decisions." },
    { title: "Forward", blurb: "Sharing experiences to help brands grow." },
  ];
  
  export default function CompanyShowcase() {
    return (
      <section className="border-t border-zinc-300/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((it) => (
              <article key={it.title} className="p-6 border border-zinc-300/80 rounded-2xl hover:border-zinc-300 transition-colors">
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  {it.title}
                </div>
                <p className="mt-3 text-sm md:text-base text-zinc-700 leading-relaxed">{it.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  