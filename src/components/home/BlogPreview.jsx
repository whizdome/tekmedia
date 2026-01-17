import Section from "../ui/Section.jsx";
import posts from "../../data/posts.json";
import { Link } from "react-router-dom";

export default function BlogPreview() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/60">
            Blog posts
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">Our Thoughts</h2>
        </div>

        <Link
          to="/blog"
          className="text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
        >
          View More Posts
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.slice(0, 4).map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 hover:bg-white/10 transition-colors"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-white/60">
              {p.date}
            </div>
            <div className="mt-3 text-lg font-semibold leading-snug text-white">
              {p.title}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
