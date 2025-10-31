export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center px-6">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold">Rick Talbot — Technical SEO</h1>
        <p className="mt-4 text-lg text-gray-600">
          I help brands grow non-brand search and ship clean migrations with clear ROI.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          Work with me
        </a>
      </section>
    </main>
  );
}
