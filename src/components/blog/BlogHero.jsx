import { Link } from "react-router-dom";
import posts from "../../data/posts.json";

export default function BlogHero() {
  const latest = posts?.[0];

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-xs uppercase tracking-[0.25em] text-white/70">
          Blog
        </div>

        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
          Our Thoughts
        </h1>

        {latest && (
          <div className="mt-10 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-white/60">
              {latest.categories?.[0] ?? "Latest"}
            </div>
            <div className="mt-3 text-2xl md:text-3xl font-semibold">
              {latest.title}
            </div>
            <div className="mt-2 text-sm text-white/70">{latest.date}</div>

            <div className="mt-8">
              <Link
                to={`/blog/${latest.slug}`}
                className="inline-flex items-center rounded-full border border-white/60 px-5 py-2.5 text-sm hover:bg-white hover:text-black transition"
              >
                Read more
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
