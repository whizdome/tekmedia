export default function MissionSection() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our mission
          </h2>
  
          <p className="mt-4 max-w-3xl text-zinc-700 leading-relaxed">
            Placeholder mission section. On the real site this includes a strong
            statement and a row of team photos.
          </p>
  
          {/* Photo strip placeholders */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="h-56 rounded-2xl bg-zinc-100 border border-zinc-900/10" />
            <div className="h-56 rounded-2xl bg-zinc-100 border border-zinc-900/10" />
            <div className="h-56 rounded-2xl bg-zinc-100 border border-zinc-900/10" />
          </div>
        </div>
      </section>
    );
  }
  