import Link from "next/link";

export default function Keycard({ level, word }: { level: 1 | 2 | 3; word: string }) {
  return (
    <div className="mt-8">
      <p className="eyebrow">Level {level} key</p>
      <p className="keycard mt-3 inline-block px-6 py-4 font-mono text-3xl font-semibold sm:text-4xl">{word}</p>
      <p className="mt-4 text-sm text-muted">
        Enter it on the{" "}
        <Link href="/lab/deindexed" className="link-underline text-fg">
          hub
        </Link>{" "}
        to log the level and unlock the next.
      </p>
    </div>
  );
}
