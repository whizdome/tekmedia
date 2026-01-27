import Container from "./Container.jsx";

export default function Section({ className = "", children, ...props }) {
  return (
    <section className={className} {...props}>
      <Container className="py-16 md:py-20 lg:py-24">{children}</Container>
    </section>
  );
}
