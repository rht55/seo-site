import Link from "next/link";
import Hints from "./Hints";

type Props = {
  level: 1 | 2 | 3;
  step: number;
  of: number;
  title: string;
  hints?: string[];
  children: React.ReactNode;
};

const levelNames = { 1: "The taster", 2: "HTTP", 3: "The deep end" };

export default function Case({ level, step, of, title, hints, children }: Props) {
  return (
    <section className="relative pt-12 sm:pt-16">
      <div className="glow" aria-hidden />
      <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
        <Link href="/lab/deindexed" className="link-underline">
          Deindexed
        </Link>
        <span>
          Level {level} · {levelNames[level]}
        </span>
        <span>
          Step {step} of {of}
        </span>
      </div>
      <div className="case p-6 sm:p-10">
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">{children}</div>
        {hints && hints.length > 0 && <Hints hints={hints} />}
      </div>
    </section>
  );
}
