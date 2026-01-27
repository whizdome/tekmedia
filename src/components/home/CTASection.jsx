import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <Section className="bg-white">
      <div className="max-w-5xl mx-auto rounded-[28px] border border-black/10 bg-gradient-to-br from-white via-white to-blue-50 px-8 py-12 shadow-[0_25px_70px_-50px_rgba(29,78,216,0.35)]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
              Ready when you are
            </div>
            <div className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-black">
              Let’s build something unforgettable together.
            </div>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Tell us about your next launch, expansion, or rebrand and we’ll map out
              the fastest path to impact.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-xs uppercase tracking-[0.24em] text-white hover:bg-blue-700 transition-colors"
            >
              Contact Tek Media
            </Link>
          </div>
          <form
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            action="mailto:info@tekmediang.com"
            method="post"
            encType="text/plain"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-black/60">
              Contact us
            </div>
            <div className="mt-4 grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.24em] text-black/60">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.24em] text-black/60">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.24em] text-black/60">
                  Project details
                </label>
                <textarea
                  rows="3"
                  name="project"
                  placeholder="Tell us about your project"
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white hover:bg-blue-700 transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
