import Page from "../components/layout/Page.jsx";

export default function Blog() {
  return (
    <Page title="Our Thoughts">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Our Thoughts
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">
          Insights, ideas, and perspectives from our team.
        </p>
        <div className="mt-10 text-sm text-zinc-600">
          Blog posts coming soon...
        </div>
      </div>
    </Page>
  );
}
