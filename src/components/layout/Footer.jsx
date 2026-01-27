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
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-black/60">
            Social
          </div>
          <ul className="mt-4 flex items-center gap-4 text-black/70">
            {footer.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition hover:text-blue-700"
                  aria-label={s.label}
                >
                  {s.label === "Facebook" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M13.5 8.5V7.2c0-.8.5-1.2 1.2-1.2h1.3V3.2h-2c-2.2 0-3.5 1.4-3.5 3.6v1.7H8.2V11h2.3v7.8h3V11h2.4l.4-2.5h-2.8Z" />
                    </svg>
                  ) : null}
                  {s.label === "Instagram" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM17.75 7a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 7Z" />
                    </svg>
                  ) : null}
                  {s.label === "TikTok" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M15.5 3a6.3 6.3 0 0 0 4.5 1.8v3.05a9.2 9.2 0 0 1-4.5-1.42v7.31a6.7 6.7 0 1 1-6.7-6.7c.35 0 .7.03 1.04.08v3.24a3.45 3.45 0 1 0 2.41 3.28V3h3.25Z" />
                    </svg>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
