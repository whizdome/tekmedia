import { siteConfig } from "../../app/siteConfig.js";

export default function Footer() {
  const { footer } = siteConfig;
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/60">
            {footer.city}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {footer.address}{" "}
            <a
              href={footer.mapLink}
              className="underline underline-offset-4 text-white hover:text-white/80"
            >
              Find Us
            </a>
          </p>
          <a
            href={`mailto:${footer.email}`}
            className="mt-4 inline-block text-sm underline underline-offset-4 text-white hover:text-white/80"
          >
            {footer.email}
          </a>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/60">
            The Company
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {footer.companyLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/60">
            Social
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {footer.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
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
