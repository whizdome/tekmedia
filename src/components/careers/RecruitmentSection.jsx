export default function RecruitmentSection() {
    return (
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Illustration placeholder */}
          <div className="h-72 rounded-2xl bg-blue-50 border border-black/10" />

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-black/60">
              Recruitment
            </div>
  
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Wanderers welcome
            </h2>
  
            <p className="mt-4 text-black/70 leading-relaxed">
              Placeholder recruitment text. On the Anakle site, this section explains
              how to apply and where to send your details.
            </p>

            <p className="mt-4 text-black/70 leading-relaxed">
              Email your portfolio / CV to{" "}
              <a className="underline text-blue-600" href="mailto:hr@anakle.com">
                hr@anakle.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }
  
