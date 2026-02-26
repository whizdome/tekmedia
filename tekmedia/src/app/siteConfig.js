// src/app/siteConfig.js
export const siteConfig = {
    name: "ANAKLE",
    nav: [
      { label: "Home", href: "/" },
      { label: "Our Teams", href: "/meet-the-team" },
      { label: "Our Thoughts", href: "/blog" },
      { label: "Our People", href: "/about" },
      { label: "Join Us", href: "/careers" },
      { label: "Contact Us", href: "/contact", cta: true },
    ],
    footer: {
      city: "LAGOS",
      address:
        "The Ford Centre, Plot 2, Block 94, Providence Street, Lekki Phase 1, Eti-Osa, Lekki.",
      email: "info@anakle.com",
      companyLinks: [
        // Film + Forward are clearly shown as company items; Forward points to forward.anakle.com :contentReference[oaicite:3]{index=3}
        { label: "Film", href: "https://anaklefilms.com/" }, // public Anakle Films site :contentReference[oaicite:4]{index=4}
        { label: "Forward", href: "https://forward.anakle.com/" },
        // The Anakle footer lists "Labs" but doesn’t expose the destination cleanly in the text extract,
        // so keep this internal until you decide the route you want.
        { label: "Labs", href: "/services" }, // change if you prefer a different Labs page
      ],
      social: [
        { label: "Twitter", href: "https://twitter.com/" },
        { label: "Instagram", href: "https://www.instagram.com/" },
        { label: "Flickr", href: "https://www.flickr.com/" },
        { label: "Facebook", href: "https://www.facebook.com/" },
      ],
    },
  };
  