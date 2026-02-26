import { Link } from "react-router-dom";

const posts = [
  { title: "6 Things You Never Want to Hear From Your Boss or Your Boo", date: "Nov 12, 2025" },
  { title: "Your Brand Voice Is Loud, but is it Honest?", date: "Jul 21, 2025" },
  { title: "Your Persona is Wearing Mismatched Socks.", date: "Jul 10, 2025" },
  { title: "Activism or Not?", date: "Jun 24, 2025" },
];

export default function BlogPreview() {
  return (
    <section className="border-t border-zinc-300/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">Blog posts</div>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Our thoughts</h2>
          </div>
          <Link to="/blog" className="text-sm underline text-zinc-700 hover:text-zinc-900 transition-colors">
            View More Posts
          </Link>
        </div>

        <div className="mt-8 md:mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.title} className="p-6 border border-zinc-300/80 rounded-2xl hover:border-zinc-300 transition-colors">
              <div className="text-xs text-zinc-500">{p.date}</div>
              <div className="mt-2 font-semibold text-zinc-900">{p.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
