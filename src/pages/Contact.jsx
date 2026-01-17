import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";

export default function Contact() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-white/60">
              Get In Touch
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] text-white">
              Let's start a conversation.
            </h1>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out
              and let's discuss how we can help grow your brand.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 text-white/80">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/60 mb-1">
                  Email
                </div>
                <a
                  href="mailto:info@tekmedia.com"
                  className="text-white hover:text-white/80 underline"
                >
                  info@tekmedia.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/60 mb-1">
                  Location
                </div>
                <p className="text-white/80">
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
  