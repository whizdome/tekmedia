import { useState } from "react";
import subsidiaries from "../../data/subsidiaries.json";
import Section from "../ui/Section.jsx";

export default function CompanyTabs() {
  const [active, setActive] = useState(subsidiaries[0].name);

  const activeItem = subsidiaries.find((s) => s.name === active);

  return (
    <Section>
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        The Company
      </h2>

      {/* Pills */}
      <div className="mt-4 flex flex-wrap gap-3">
        {subsidiaries.map((s) => (
          <button
            key={s.name}
            onClick={() => setActive(s.name)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              s.name === active
                ? "border-white/20 bg-white text-[#0a0a0a]"
                : "border-white/10 bg-transparent text-white/60 hover:text-white"
            }`}
          >
            {s.name.toLowerCase()}
          </button>
        ))}
      </div>

      {/* Active card */}
      <div className="mt-6 border border-white/10 rounded-xl bg-white/5 max-w-xl p-6">
        <div className="text-xs uppercase tracking-widest text-white/60">
          {activeItem.tagline}
        </div>
        <h3 className="mt-2 text-xl font-semibold text-white">
          {activeItem.name}
        </h3>
        <p className="mt-4 text-white/70 leading-relaxed">
          {activeItem.description}
        </p>
      </div>
    </Section>
  );
}
