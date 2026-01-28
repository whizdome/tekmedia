import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "About us", href: "/#services" },
  { label: "Our clients", href: "/#clients" },
  { label: "Our work", href: "/#work" },
  { label: "Feedback", href: "/#feedback" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll + close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <Container className="py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/tekmedia-logo.svg" alt="Tek Media" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-black/70">
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

        {/* Mobile button (hamburger only) */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full p-2 text-black/80 hover:bg-black/5 active:bg-black/10"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 p-4">
            <span className="text-sm font-semibold tracking-wide">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full p-2 text-black/80 hover:bg-black/5 active:bg-black/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-base font-semibold text-black/80 border-b border-black/10"
                >
                  {item.label}
                  <span className="text-black/40">›</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
