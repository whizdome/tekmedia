const columns = [
    {
      title: "Creative & Design",
      items: [
        "Design Direction",
        "Creative Concepts & Ideas",
        "Storytelling",
        "Branding & Identity",
        "Web and Mobile UI",
        "User Experience",
        "Wireframing & Prototyping",
        "Micro Interactions",
      ],
    },
    {
      title: "Strategy",
      items: [
        "Digital Strategy",
        "Content Strategy",
        "Brand Experience",
        "User Research",
        "Data Analysis",
        "Social Media Campaigns",
        "Sharable Content",
      ],
    },
    {
      title: "Development",
      items: [
        "Responsive Development",
        "Creative Front & Back End",
        "Websites & Web Applications",
        "E-Commerce",
        "Gamification",
        "CMS",
      ],
    },
    {
      title: "Digital",
      items: ["Social Media Management", "Online Reputation Management", "Campaigns"],
    },
  ];
  
  export default function CapabilitiesGrid() {
    return (
      <section className="border-t border-zinc-300/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">
            We are more than an Agency, we’re a Growth Marketing Company
          </h2>
  
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <div className="font-semibold text-zinc-900">{c.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  {c.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  