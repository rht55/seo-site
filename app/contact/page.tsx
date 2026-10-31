import type { Metadata } from "next";
import Spotlight from "../../components/Spotlight";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email or LinkedIn. London based, remote friendly, project and advisory work.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="glow" aria-hidden />
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
        Two good <span className="serif-italic text-accent">options</span>.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        London, UK. Remote friendly. Project and advisory work, and the occasional messy middle.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Spotlight as="article" className="rounded-2xl">
          <a href="mailto:hello@richardhtalbot.co.uk" className="block p-6">
            <p className="eyebrow">Email</p>
            <p className="mt-2 break-all text-xl font-semibold">hello@richardhtalbot.co.uk</p>
            <p className="mt-2 text-sm text-muted">Best for anything with detail attached.</p>
            <span className="mt-4 inline-block text-sm text-accent">Write →</span>
          </a>
        </Spotlight>
        <Spotlight as="article" className="rounded-2xl">
          <a href="https://www.linkedin.com/in/rick-talbot-47525b53" target="_blank" rel="noreferrer" className="block p-6">
            <p className="eyebrow">LinkedIn</p>
            <p className="mt-2 text-xl font-semibold">/in/rick-talbot-47525b53</p>
            <p className="mt-2 text-sm text-muted">Best for a quick hello or an intro.</p>
            <span className="mt-4 inline-block text-sm text-accent">Connect ↗</span>
          </a>
        </Spotlight>
      </div>
    </section>
  );
}
