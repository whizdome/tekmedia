import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Container from "../components/ui/Container.jsx";
import caseStudies from "../data/caseStudies.js";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);
  const gallery = useMemo(() => study?.gallery ?? [], [study]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState("");
  const hasGallery = gallery.length > 0;
  const hasMultipleImages = gallery.length > 1;
  const videos = useMemo(() => {
    if (study?.videoUrls?.length) {
      return study.videoUrls;
    }
    return study?.videoUrl ? [study.videoUrl] : [];
  }, [study]);

  if (!study) {
    return (
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <div className="text-sm text-black/60">Case study not found.</div>
          <Link to="/" className="mt-4 inline-flex text-blue-600 underline">
            Back to home
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <Container className="py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
            {study.category}
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-black">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
            {study.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {study.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-black/10 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-black/60"
              >
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {videos.length ? (
        <section className="bg-white">
          <Container className="py-10 md:py-12">
            <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
              Campaign video
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-black">
              Watch the feature story
            </h2>
            <div
              className={`mt-6 grid gap-6 ${
                study.videoAspect === "portrait"
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {videos.map((videoUrl, index) => (
                <div
                  key={`${videoUrl}-${index}`}
                  className={`mx-auto overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm ${
                    study.videoAspect === "portrait"
                      ? "aspect-[9/16] max-w-[420px]"
                      : "aspect-video w-full"
                  }`}
                >
                  <iframe
                    title={`${study.title} video ${index + 1}`}
                    src={videoUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-white">
        <Container className="py-12 md:py-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Brand story
            </h2>
            <ul className="mt-6 space-y-4 text-black/70 leading-relaxed">
              {study.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {hasGallery ? (
        <section className="bg-slate-50">
          <Container className="py-12 md:py-16">
            <div className="text-xs uppercase tracking-[0.28em] text-blue-700">
              Photo gallery
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-black">
              Campaign stills
            </h2>
            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-slate-50">
                <button
                  type="button"
                  onClick={() => setLightboxImage(gallery[galleryIndex])}
                  className="h-full w-full"
                  aria-label="Open image"
                >
                  <img
                    src={gallery[galleryIndex]}
                    alt={`${study.title} gallery ${galleryIndex + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
                {hasMultipleImages ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryIndex((prev) =>
                          prev === 0 ? gallery.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-700 shadow-sm transition hover:bg-white"
                      aria-label="Previous image"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setGalleryIndex((prev) => (prev + 1) % gallery.length)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-700 p-2 text-white shadow-sm transition hover:bg-blue-800"
                      aria-label="Next image"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </>
                ) : null}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-black/60">
                  Image {galleryIndex + 1} of {gallery.length}
                </div>
              </div>
            </div>
            <Link
              to="/"
              className="mt-10 inline-flex text-blue-600 underline underline-offset-4"
            >
              Back to home
            </Link>
          </Container>
        </section>
      ) : null}
      {lightboxImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <button
            type="button"
            onClick={() => setLightboxImage("")}
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close image"
          />
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setLightboxImage("")}
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={lightboxImage}
              alt="Expanded campaign still"
              className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
