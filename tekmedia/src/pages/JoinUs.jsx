import Page from "../components/layout/Page.jsx";

export default function JoinUs() {
  return (
    <Page title="Join Us">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Join Us
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 leading-relaxed">
          We're always looking for talented individuals to join our team.
        </p>
        <div className="mt-10 space-y-4">
          <p className="text-sm text-zinc-600">
            Interested in working with us? Send your resume and portfolio to{" "}
            <a href="mailto:info@anakle.com" className="underline">
              info@anakle.com
            </a>
          </p>
        </div>
      </div>
    </Page>
  );
}
