import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="border-t border-zinc-300/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h3 className="text-2xl font-semibold text-zinc-900">Have a project? Let’s talk</h3>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-zinc-900/20 text-sm font-medium hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
