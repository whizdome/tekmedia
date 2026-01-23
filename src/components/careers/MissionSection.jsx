export default function MissionSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Our mission
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-700 leading-relaxed">
          We exist to help ambitious brands grow with clarity. Our mission is to
          combine insight, creativity, and performance into cohesive systems that
          earn trust, spark culture, and deliver measurable business outcomes.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Curiosity first",
              description:
                "We ask better questions, dig deeper into data, and uncover the insights that drive smart decisions.",
            },
            {
              title: "Craft with intent",
              description:
                "Every deliverable is designed to be useful, beautiful, and consistent across every touchpoint.",
            },
            {
              title: "Momentum always",
              description:
                "We move fast, iterate often, and build growth systems that keep brands moving forward.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-blue-700">
                {item.title}
              </div>
              <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
