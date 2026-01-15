import Section from "../ui/Section.jsx";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Brand Campaign Excellence",
    category: "Digital Marketing",
    image: "/assets/case-study-1.jpg",
  },
  {
    id: 2,
    title: "Performance Growth Strategy",
    category: "Media Planning",
    image: "/assets/case-study-2.jpg",
  },
  {
    id: 3,
    title: "Creative Innovation Project",
    category: "Brand Strategy",
    image: "/assets/case-study-3.jpg",
  },
  {
    id: 4,
    title: "Integrated Campaign Success",
    category: "Full Service",
    image: "/assets/case-study-4.jpg",
  },
];

export default function CaseStudies() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/60">
            Our Work
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
            Case Studies
          </h2>
        </div>

        <Link
          to="/work"
          className="text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
        >
          View All Work
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            to={`/work/${study.id}`}
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-colors"
          >
            <div className="aspect-[4/5] bg-white/5 relative overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                {study.category}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {study.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
