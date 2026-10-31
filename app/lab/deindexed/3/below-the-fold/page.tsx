import Case from "../../../../../components/lab/deindexed/Case";
import MobileReveal from "../../../../../components/lab/deindexed/MobileReveal";

export default function L3S4() {
  return (
    <Case
      level={3}
      step={4}
      of={5}
      title="Built for a phone"
      hints={[
        "Google reads the phone version first. The desktop version of this page has nothing on it.",
        "Narrow the window below 480px, or use device emulation. The note is written in only when the viewport is phone-sized.",
      ]}
    >
      <p>Mobile-first indexing: if it is not on the phone, it is not in the index.</p>
      <div className="rounded-xl border hairline bg-bg p-4">
        <MobileReveal real="/lab/deindexed/3/parameters" />
      </div>
    </Case>
  );
}
