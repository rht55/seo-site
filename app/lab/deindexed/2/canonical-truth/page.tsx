import Case from "../../../../../components/lab/deindexed/Case";
import RenderSwap from "../../../../../components/lab/deindexed/RenderSwap";

export default function L2S4() {
  return (
    <Case
      level={2}
      step={4}
      of={5}
      title="The truth, as served"
      hints={[
        "What the server sent and what your browser is showing you are not the same page.",
        "Compare view-source (or the Inspector’s Source as served) with the rendered page in front of you. Trust the rendered one; Google does.",
      ]}
    >
      <p>
        The canonical was honest: this is the real page. It carries a note from the previous SEO. The only question is
        which note, because this page has two.
      </p>
      <div className="rounded-xl border hairline bg-bg p-4">
        <RenderSwap decoy="/lab/deindexed/2/rendered-lie" real="/lab/deindexed/2/cloak" />
      </div>
      <noscript>
        <p className="font-mono text-sm">Without JavaScript you only ever see the first note. So does a crawler that does not render.</p>
      </noscript>
    </Case>
  );
}
