import Section from "../ui/Section.jsx";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Tek Media brought clarity to our positioning and delivered a campaign that moved the market in weeks, not months.",
    author: "Sarah Johnson",
    role: "CMO, Elevate Fintech",
    company: "Elevate Fintech",
  },
  {
    quote:
      "Their team felt like a true extension of ours—strategic, fast, and deeply creative at every touchpoint.",
    author: "Michael Chen",
    role: "Marketing Director, Pulse Retail",
    company: "Pulse Retail",
  },
  {
    quote:
      "We saw immediate lift across brand sentiment and conversion. The work was bold, polished, and measurable.",
    author: "Emily Rodriguez",
    role: "VP of Marketing, Nova Mobility",
    company: "Nova Mobility",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <Section>
      <div className="text-xs uppercase tracking-[0.28em] text-white/60">
        Client feedback
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
        Trusted by teams who value bold results.
      </h2>

      <div className="mt-10 max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-white">
            "{current.quote}"
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold">
              {current.author.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-white">{current.author}</div>
              <div className="text-sm text-white/60">{current.role}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2 justify-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
