export default function Contact() {
  return (
    <section className="py-16 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-neutral-700">
        Two good options:
      </p>
      <ul className="mt-3 space-y-2 text-neutral-700">
        <li>
          • Email:{" "}
          <a className="underline" href="mailto:hello@richardhtalbot.co.uk">
            hello@richardhtalbot.co.uk
          </a>
        </li>
        <li>
          • LinkedIn:{" "}
          <a
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rick-talbot-47525b53"
          >
            /in/rick-talbot-47525b53
          </a>
        </li>
      </ul>
      <p className="mt-6 text-sm text-neutral-500">
        London, UK. Remote-friendly. Project and advisory work.
      </p>
    </section>
  );
}
