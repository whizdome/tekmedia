import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";

export default function Hero() {
  return (
    <section className="border-b border-zinc-300/80">
      <Container className="py-16 md:py-24 lg:py-28">
        <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl md:leading-[1.02] font-semibold tracking-tight text-zinc-900">
          Accelerate your growth results
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-700 leading-relaxed">
          Agile, strategic, innovative and passionate—helping brands make faster,
          more meaningful connections with their audiences.
        </p>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-zinc-900/20 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-900/30 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
