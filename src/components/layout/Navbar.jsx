import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Container from "../ui/Container.jsx";

const nav = [
  { label: "Home", to: "/" },
  { label: "Our Teams", to: "/teams" },
  { label: "Our Thoughts", to: "/blog" },
  { label: "Our People", to: "/people" },
  { label: "Join Us", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <Container className="py-4 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/tekmedia-logo.svg"
            alt="Tek Media"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
          {nav.slice(0, 5).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden sm:inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-[#0a0a0a] transition-colors"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <Container className="py-4">
            <nav className="flex flex-col gap-4">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-[#0a0a0a] transition-colors w-fit"
              >
                Let's Talk
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
