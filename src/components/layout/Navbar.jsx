import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";

const nav = [
  { label: "About us", href: "/#services" },
  { label: "Our clients", href: "/#clients" },
  { label: "Our work", href: "/#work" },
  { label: "Feedback", href: "/#feedback" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <Container className="py-4 flex flex-wrap items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/tekmedia-logo.svg"
            alt="Tek Media"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.18em] text-black/70">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors text-black/60 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
