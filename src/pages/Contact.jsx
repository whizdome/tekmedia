import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Contact() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-black/60">
              Get In Touch
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-black">
              Let's start a conversation.
            </h1>
            <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out
              and let's discuss how we can help grow your brand.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 text-black/70">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-black/60 mb-1">
                  Email
                </div>
                <a
                  href="mailto:info@tekmedia.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  info@tekmedia.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-black/60 mb-1">
                  Location
                </div>
                <p className="text-black/70">
                  The Ford Centre, Plot 2, Block 94, Providence Street, Lekki
                  Phase 1, Eti-Osa, Lekki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
  
