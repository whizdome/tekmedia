import { useParams } from "react-router-dom";
import posts from "../data/posts.json";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="px-4 py-10">Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
      <div className="mt-2 text-sm text-zinc-500">
        Posted on {post.date} &nbsp;|&nbsp; {post.categories.join(", ")}
      </div>
      <img src={post.image} alt="" className="mt-8 w-full rounded-xl" />
      {/* Use remark/markdown-it to render markdown content if you store posts as MD */}
      <div className="mt-8 space-y-6 leading-relaxed text-zinc-800">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {/* previous/next navigation */}
    </article>
  );
}
