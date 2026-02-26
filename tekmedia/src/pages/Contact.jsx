import Page from "../components/layout/Page.jsx";

export default function Contact() {
  return (
    <Page title="Contact Us">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">
          Get in touch with us to discuss your project or learn more about our services.
        </p>
        <div className="mt-10 space-y-4">
          <div>
            <div className="font-semibold">Email</div>
            <a href="mailto:info@anakle.com" className="text-sm text-zinc-600 underline">
              info@anakle.com
            </a>
          </div>
          <div>
            <div className="font-semibold">Location</div>
            <p className="text-sm text-zinc-600">
              The Ford Centre, Plot 2, Block 94, Providence Street, Lekki Phase 1,
              Eti-Osa, Lekki.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
