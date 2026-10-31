import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        That page is <span className="serif-italic">not indexed</span>.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        It was either never here or has been redirected somewhere sensible. Either way, the nav still works.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
      >
        Back home
      </Link>
    </section>
  );
}
