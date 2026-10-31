import Link from "next/link";
import Case from "../../../../../components/lab/deindexed/Case";

export default function L2Decoy() {
  return (
    <Case level={2} step={4} of={5} title="That was the raw HTML">
      <p>
        You followed the note from view-source. That note is removed by script the moment the page renders, and
        Googlebot renders. The page you were on has a second note that only exists after rendering.
      </p>
      <p>
        <Link href="/lab/deindexed/2/canonical-truth" className="link-underline text-fg">
          Go back
        </Link>{" "}
        and watch it change.
      </p>
    </Case>
  );
}
