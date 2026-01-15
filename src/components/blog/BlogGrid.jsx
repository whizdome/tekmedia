import { Link } from "react-router-dom";
import posts from "../../data/posts.json";

export default function BlogGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group border border-zinc-900/10 rounded-2xl overflow-hidden bg-white hover:shadow-md transition"
            >
              <div className="h-48 bg-zinc-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-5">
                <div className="text-xs text-zinc-500">{p.date}</div>
                <div className="mt-2 font-semibold leading-snug">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-zinc-900/15 px-6 py-2.5 text-sm hover:bg-zinc-50">
            Older Posts
          </button>
        </div>
      </div>
    </section>
  );
}
