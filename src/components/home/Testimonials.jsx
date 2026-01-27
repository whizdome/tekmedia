import Section from "../ui/Section.jsx";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Tek Media is one of the few teams I’ve worked with that actually listens before shooting anything. The final video was clean, intentional, and very on-brand.",
    author: "Chidera Okonkwo",
    role: "Client",
    company: "Client",
  },
  {
    quote:
      "The team was professional from planning through delivery. Timelines were respected, communication was efficient, and the final deliverables met expectations.",
    author: "Kunle Adegbite",
    role: "Client",
    company: "Client",
  },
  {
    quote:
      "We needed commercial content that didn’t feel rushed or random. Tek delivered with structure. Everything looked premium from start to finish. I strongly recommend.",
    author: "Tobi Akinyemi",
    role: "Client",
    company: "Client",
  },
  {
    quote:
      "Working with Tek Media was seamless. Deliverables were handled with professionalism, and the final production quality was impressive.",
    author: "Akin Fashola",
    role: "Client",
    company: "Client",
  },
  {
    quote:
      "Tek Media brought consistency to our digital presence. Their approach is organised, measured, and focused on long-term quality.",
    author: "Blessing Okafor",
    role: "Client",
    company: "Client",
  },
  {
    quote:
      "What we appreciated most was the attention to detail and the discipline in execution. The work was clean, purposeful, and on-brand.",
    author: "Hauwa Ibrahim",
    role: "Client",
    company: "Client",
  },
  {
    quote:
      "They operate with a level of clarity that makes collaboration easy. The output reflected both creative strength and operational discipline.",
    author: "Mariam Sule",
    role: "Client",
    company: "Client",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(0);
  const deltaX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (event) => {
    startX.current = event.touches[0].clientX;
    deltaX.current = 0;
  };

  const handleTouchMove = (event) => {
    deltaX.current = event.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(deltaX.current) < 40) {
      return;
    }
    if (deltaX.current < 0) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  return (
    <Section id="feedback" className="bg-white text-black">
      <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
        Client feedback
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-black">
        Trusted by teams who value bold results.
      </h2>

      <div className="mt-10 max-w-4xl">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
