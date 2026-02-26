// src/components/layout/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { siteConfig } from "../../app/siteConfig.js";

function NavItem({ href, label }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        [
          "text-sm md:text-[13px] tracking-wide",
          "hover:opacity-70 transition",
          isActive ? "opacity-70" : "opacity-100",
        ].join(" ")
      }
      end={href === "/"}
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const items = siteConfig.nav.filter((i) => !i.cta);
  const cta = siteConfig.nav.find((i) => i.cta);

  return (
    <header className="sticky top-0 z-40 bg-[#f6f4f0]/95 backdrop-blur-sm">
      <div className="border-b border-zinc-300/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="font-semibold tracking-wide text-zinc-900 hover:opacity-70 transition">
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {items.map((i) => (
              <NavItem key={i.href} href={i.href} label={i.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {cta && (
              <Link
                to={cta.href}
                className="rounded-full border border-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-colors"
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
