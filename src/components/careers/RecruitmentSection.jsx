export default function RecruitmentSection() {
    return (
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Illustration placeholder */}
          <div className="h-72 rounded-2xl bg-white/5 border border-white/10" />
  
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/70">
              Recruitment
            </div>
  
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Wanderers welcome
            </h2>
  
            <p className="mt-4 text-white/80 leading-relaxed">
              Placeholder recruitment text. On the Anakle site, this section explains
              how to apply and where to send your details.
            </p>
  
            <p className="mt-4 text-white/80 leading-relaxed">
              Email your portfolio / CV to{" "}
              <a className="underline" href="mailto:hr@anakle.com">
                hr@anakle.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }
  