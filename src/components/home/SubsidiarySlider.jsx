import Section from "../ui/Section.jsx";
import subsidiaries from "../../data/subsidiaries.json";
import { useState } from "react";

export default function SubsidiarySlider() {
  const [active, setActive] = useState(0);
  const current = subsidiaries[active];

  return (
    <Section className="bg-transparent">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">The Company</h2>
      </div>

      <div className="mt-8">
        <div
          role="tablist"
          aria-label="Subsidiaries"
          className="flex gap-6 overflow-x-auto pb-3 hide-scrollbar"
        >
          {subsidiaries.map((item, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(idx)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border border-blue-600 bg-blue-600 text-white"
                    : "border border-black/10 bg-transparent text-black/60 hover:text-black"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div
            role="tabpanel"
            className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-black/60">
              {current?.tagline}
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-black">{current?.name}</h3>
            <p className="mt-4 text-black/70 leading-relaxed">
              {current?.description}
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm">
            {current?.image ? (
              <img
                src={current.image}
                alt={current.name}
                className="h-64 md:h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-64 md:h-full flex items-center justify-center text-xs uppercase tracking-[0.28em] text-black/60">
                Image placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
