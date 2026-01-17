import { siteConfig } from "../../app/siteConfig.js";

export default function Footer() {
  const { footer } = siteConfig;
  return (
    <footer className="border-t border-black/10 mt-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-black/60">
            {footer.city}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-black/70">
            {footer.address}{" "}
            <a
              href={footer.mapLink}
              className="underline underline-offset-4 text-blue-600 hover:text-blue-700"
            >
              Find Us
            </a>
          </p>
          <a
            href={`mailto:${footer.email}`}
            className="mt-4 inline-block text-sm underline underline-offset-4 text-blue-600 hover:text-blue-700"
          >
            {footer.email}
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-black/60">
            The Company
          </div>
          <ul className="mt-4 space-y-2 text-sm text-black/70">
            {footer.companyLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-black transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-black/60">
            Social
          </div>
          <ul className="mt-4 space-y-2 text-sm text-black/70">
            {footer.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
