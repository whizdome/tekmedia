import Section from "../ui/Section.jsx";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tek Media is one of the few teams I’ve worked with that actually listens before shooting anything. The final video was clean, intentional, and very on-brand.",
    author: "Chidera Okonkwo",
    role: "Client",
  },
  {
    quote:
      "The team was professional from planning through delivery. Timelines were respected, communication was efficient, and the final deliverables met expectations.",
    author: "Kunle Adegbite",
    role: "Client",
  },
  {
    quote:
      "We needed commercial content that didn’t feel rushed or random. Tek delivered with structure. Everything looked premium from start to finish.",
    author: "Tobi Akinyemi",
    role: "Client",
  },
  {
    quote:
      "Working with Tek Media was seamless. Deliverables were handled with professionalism, and the final production quality was impressive.",
    author: "Akin Fashola",
    role: "Client",
  },
  {
    quote:
      "Tek Media brought consistency to our digital presence. Their approach is organised, measured, and focused on long-term quality.",
    author: "Blessing Okafor",
    role: "Client",
  },
  {
    quote:
      "Attention to detail and discipline in execution stood out immediately. The work was clean, purposeful, and on-brand.",
    author: "Hauwa Ibrahim",
    role: "Client",
  },
  {
    quote:
      "They operate with clarity. Collaboration was easy, and the output reflected both creative strength and operational discipline.",
    author: "Mariam Sule",
    role: "Client",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  /* ---------- Auto slide ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* ---------- Navigation ---------- */
  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  /* ---------- Touch handling ---------- */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) < 40) return;
    touchDeltaX.current < 0 ? goNext() : goPrev();
  };

  return (
    <Section id="feedback" className="bg-white text-black">
      {/* Section label */}
      <div className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">
        Client feedback
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        Trusted by brands who value clarity and results.
      </h2>

      {/* Slider */}
      <div className="mt-12 max-w-4xl">
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="mt-6 flex justify-between md:hidden">
  <button
    onClick={goPrev}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow"
  >
    <ChevronLeft className="h-5 w-5" />
  </button>

  <button
    onClick={goNext}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow"
  >
    <ChevronRight className="h-5 w-5" />
  </button>
</div>

          {/* Arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.author} className="w-full shrink-0 px-3">
                <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-12 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)]">
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{item.author}</div>
                      <div className="text-sm text-black/60">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                idx === activeIndex ? "bg-blue-600" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
