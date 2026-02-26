// src/components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { siteConfig } from "../../app/siteConfig.js";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="mt-14 md:mt-16">
      <div className="border-t border-zinc-300/80">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 grid gap-10 md:grid-cols-3">
          {/* City / Address */}
          <div>
            <div className="text-xs tracking-[0.25em] text-zinc-500 uppercase">LAGOS</div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700">
              {footer.address}
            </p>
            <a
              className="mt-4 inline-block text-sm underline underline-offset-4 text-zinc-700 hover:text-zinc-900 transition-colors"
              href={`mailto:${footer.email}`}
            >
              {footer.email}
            </a>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.25em] text-zinc-500 uppercase">
              THE COMPANY
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {footer.companyLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("http") ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.href} className="hover:text-zinc-900 transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.25em] text-zinc-500 uppercase">
              SOCIAL
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
