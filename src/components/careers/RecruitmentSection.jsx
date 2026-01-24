export default function RecruitmentSection() {
  return (
    <section className="bg-white text-black py-16 border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="h-72 rounded-2xl bg-blue-50 border border-black/10 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-blue-700">
          Open roles
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-blue-700">
            Recruitment
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            We’re always looking for thoughtful collaborators.
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed">
            Whether you’re a strategist, designer, writer, or growth specialist,
            we’d love to see the work that energizes you. Share a short note about
            the kind of problems you like solving and the impact you want to make.
          </p>

          <p className="mt-4 text-black/70 leading-relaxed">
            Email your portfolio or CV to{" "}
            <a className="underline text-blue-600" href="mailto:careers@tekmedia.com">
              careers@tekmedia.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
  
