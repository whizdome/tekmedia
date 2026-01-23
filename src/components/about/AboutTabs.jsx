export default function AboutTabs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-72 md:h-[420px] rounded-2xl bg-blue-50 border border-black/10 flex flex-col items-center justify-center gap-4 text-center px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-700">
            Studio highlight
          </div>
          <div className="text-3xl md:text-4xl font-semibold text-black">
            120+ campaigns delivered across 18 markets.
          </div>
          <p className="max-w-2xl text-sm text-black/70 leading-relaxed">
            From fintech launches to culture-first activations, we build the systems,
            identities, and growth plans that help brands earn attention and keep it.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#approach"
            className="px-4 py-2 rounded-full border border-black/10 bg-white text-sm hover:bg-slate-50"
          >
            Our Approach
          </a>
          <a
            href="#culture"
            className="px-4 py-2 rounded-full border border-black/10 bg-white text-sm hover:bg-slate-50"
          >
            Culture
          </a>
          <a
            href="#capabilities"
            className="px-4 py-2 rounded-full border border-black/10 bg-white text-sm hover:bg-slate-50"
          >
            Capabilities
          </a>
        </div>

        <div className="mt-10 space-y-16">
          <div id="approach">
            <h2 className="text-2xl font-semibold tracking-tight">Our Approach</h2>
            <p className="mt-3 text-black/70 leading-relaxed max-w-3xl">
              Tek Media blends strategy, creative, and media to build brand
              systems that scale across channels and convert attention into
              measurable growth.
            </p>
          </div>

          <div id="culture">
            <h2 className="text-2xl font-semibold tracking-tight">Culture</h2>
            <p className="mt-3 text-black/70 leading-relaxed max-w-3xl">
              We are a collaborative team of strategists, storytellers, and
              makers obsessed with turning ambitious ideas into real-world
              impact.
            </p>
          </div>

          <div id="capabilities">
            <h2 className="text-2xl font-semibold tracking-tight">Capabilities</h2>
            <p className="mt-3 text-black/70 leading-relaxed max-w-3xl">
              Brand strategy, identity, content systems, performance marketing,
              product design, and campaign execution across digital and
              experiential touchpoints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
