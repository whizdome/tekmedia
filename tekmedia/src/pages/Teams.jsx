import Page from "../components/layout/Page.jsx";

export default function Teams() {
  return (
    <Page title="Our Teams">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Our Teams
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">
          Meet the talented teams that make our work possible.
        </p>
        <div className="mt-10 text-sm text-zinc-600">
          Team information coming soon...
        </div>
      </div>
    </Page>
  );
}
