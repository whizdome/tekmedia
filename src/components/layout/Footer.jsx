import { siteConfig } from "../../app/siteConfig.js";

export default function Footer() {
  const { footer } = siteConfig;
  return (
    <footer className="border-t border-black/10 mt-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src="/tekmedia-logo.svg" alt="Tek Media" className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-black/70">
            We help brands find clarity, earn attention, and convert audiences
            through bold creative and performance-driven marketing.
          </p>
          <div className="mt-6 space-y-2 text-sm text-black/70">
            <div className="text-xs uppercase tracking-[0.28em] text-black/60">
              {footer.city}
            </div>
            <p>{footer.address}</p>
            <a
              href={footer.mapLink}
              className="underline underline-offset-4 text-blue-600 hover:text-blue-700"
            >
              Find Us
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-black/60">
            Contact
          </div>
          <div className="mt-4 space-y-2 text-sm text-black/70">
            <a
              href={`mailto:${footer.email}`}
              className="block text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              {footer.email}
            </a>
            <a
              href={`tel:${footer.phone}`}
              className="block text-black/70 hover:text-black transition-colors"
            >
              {footer.phone}
            </a>
            <div className="text-black/60">{footer.hours}</div>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
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
      </div>
    </footer>
  );
}
