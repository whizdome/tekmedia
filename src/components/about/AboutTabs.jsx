export default function AboutTabs() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Big image placeholder (replace later) */}
          <div className="h-72 md:h-[420px] rounded-2xl bg-zinc-100 border border-zinc-900/10" />
  
          {/* Tab bar */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#working"
              className="px-4 py-2 rounded-full border border-zinc-900/15 bg-white text-sm hover:bg-zinc-50"
            >
              Working at Anakle
            </a>
            <a
              href="#careers"
              className="px-4 py-2 rounded-full border border-zinc-900/15 bg-white text-sm hover:bg-zinc-50"
            >
              Careers
            </a>
            <a
              href="#internships"
              className="px-4 py-2 rounded-full border border-zinc-900/15 bg-white text-sm hover:bg-zinc-50"
            >
              Internships
            </a>
          </div>
  
          {/* Sections */}
          <div className="mt-10 space-y-16">
            <div id="working">
              <h2 className="text-2xl font-semibold tracking-tight">Working at Anakle</h2>
              <p className="mt-3 text-zinc-700 leading-relaxed max-w-3xl">
                Placeholder section. Add the “working culture / studio” content here.
              </p>
            </div>
  
            <div id="careers">
              <h2 className="text-2xl font-semibold tracking-tight">Careers</h2>
              <p className="mt-3 text-zinc-700 leading-relaxed max-w-3xl">
                Placeholder section. Add recruitment/careers info here.
              </p>
            </div>
  
            <div id="internships">
              <h2 className="text-2xl font-semibold tracking-tight">Internships</h2>
              <p className="mt-3 text-zinc-700 leading-relaxed max-w-3xl">
                Placeholder section. Add internship info here.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  