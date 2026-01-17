import Section from "../ui/Section.jsx";
import { useEffect, useState } from "react";

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

  return (
    <Section>
      <div className="text-xs uppercase tracking-[0.28em] text-white/60">
        Client feedback
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
        Trusted by teams who value bold results.
      </h2>

      <div className="mt-10 max-w-4xl">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.author} className="w-full shrink-0 px-3">
                <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-12 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)]">
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-black">
                    "{item.quote}"
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-black">{item.author}</div>
                      <div className="text-sm text-black/60">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`slider-dot ${idx === activeIndex ? "active" : ""}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
