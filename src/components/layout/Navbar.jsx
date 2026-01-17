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
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <Container className="py-4 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/tekmedia-logo.svg"
            alt="Tek Media"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-black/70">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-black/60 hover:text-black"
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
          className="hidden sm:inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-blue-700 transition-colors"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-black p-2"
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
        <div className="md:hidden border-t border-black/10 bg-white">
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
                        ? "text-black"
                        : "text-black/60 hover:text-black"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-blue-700 transition-colors w-fit"
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
