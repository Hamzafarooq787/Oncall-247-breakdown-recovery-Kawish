import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <h1 className="text-3xl">Page not found</h1>
      <Link href="/services" className="btn-gold mt-6">Back to services</Link>
    </section>
  );
}
