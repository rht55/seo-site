import type { Metadata } from "next";
import Spotlight from "../../components/Spotlight";
import { Accent } from "../../components/Inline";
import contact from "../../content/contact.json";
import site from "../../content/site.json";

export const metadata: Metadata = {
  title: contact.title,
  description: contact.description,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="glow" aria-hidden />
      <p className="eyebrow">{contact.title}</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
        <Accent text={contact.headline} />
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{contact.intro}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Spotlight as="article" className="rounded-2xl">
          <a href={`mailto:${site.email}`} className="block p-6">
            <p className="eyebrow">Email</p>
            <p className="mt-2 break-all text-xl font-semibold">{site.email}</p>
            <p className="mt-2 text-sm text-muted">{contact.emailNote}</p>
            <span className="mt-4 inline-block text-sm text-accent">Write →</span>
          </a>
        </Spotlight>
        <Spotlight as="article" className="rounded-2xl">
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer" className="block p-6">
            <p className="eyebrow">LinkedIn</p>
            <p className="mt-2 text-xl font-semibold">{site.linkedinLabel}</p>
            <p className="mt-2 text-sm text-muted">{contact.linkedinNote}</p>
            <span className="mt-4 inline-block text-sm text-accent">Connect ↗</span>
          </a>
        </Spotlight>
      </div>
    </section>
  );
}
