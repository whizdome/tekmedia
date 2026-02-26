import Container from "./Container.jsx";

export default function Section({ children, className = "" }) {
  return (
    <section className={`border-t border-zinc-900/10 ${className}`}>
      <Container className="py-14 md:py-20">{children}</Container>
    </section>
  );
}
