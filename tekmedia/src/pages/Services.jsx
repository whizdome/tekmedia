import Page from "../components/layout/Page.jsx";

const sections = [
  {
    title: "Digital Marketing",
    points: ["Search", "Display", "Email & SMS", "Mobile-first strategy"],
  },
  {
    title: "ORM & Strategic Communications",
    points: ["Online Reputation Management", "Public service/political communication"],
  },
  {
    title: "UX",
    points: ["Research", "Design iteration", "Product adoption focus"],
  },
  { title: "Web", points: ["Web design", "Web applications", "High performance builds"] },
  { title: "Applications", points: ["Cross-platform apps", "End-to-end delivery"] },
  { title: "Digital Publishing", points: ["Rich media publishing", "Mobile/tablet delivery"] },
  { title: "Social Media", points: ["Voice & content", "Experimentation", "Campaigns"] },
];

export default function Services() {
  return (
    <Page title="Services">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">
          A suite of services spanning marketing, strategy, UX and engineering.
        </p>

        <div className="mt-10 grid gap-6">
          {sections.map((s) => (
            <div key={s.title} className="p-6 border rounded-2xl">
              <div className="font-semibold text-lg">{s.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
  