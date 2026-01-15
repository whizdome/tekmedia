import Section from "../ui/Section.jsx";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Tek Media transformed our brand presence and delivered exceptional results. Their strategic approach and creative execution exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CMO, TechCorp",
    company: "TechCorp",
  },
  {
    quote:
      "Working with Tek Media has been a game-changer. Their data-driven insights and innovative campaigns have significantly boosted our market share.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "Global Brands Inc",
  },
  {
    quote:
      "The team at Tek Media understands our business deeply. They've become an extension of our marketing team, delivering consistent excellence.",
    author: "Emily Rodriguez",
    role: "VP of Marketing",
    company: "Innovate Solutions",
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
        Client Feedback
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
        What Our Clients Say
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
