import type { Metadata } from "next";
import Case from "../../../../../components/lab/deindexed/Case";

export const metadata: Metadata = {
  title: "Level 2, the copy",
  alternates: {
    canonical: "/lab/deindexed/2/canonical-truth",
    languages: {
      "en-GB": "/lab/deindexed/2/canon",
      "en-US": "/lab/deindexed/2/canon",
      fr: "/lab/deindexed/2/canon",
    },
  },
};

export default function L2S3() {
  return (
    <Case
      level={2}
      step={3}
      of={5}
      title="The copy"
      hints={[
        "This page is telling search engines it is not the real version of itself.",
        "The canonical link in the head points at where the truth lives. The hreflang links are a loop, ignore them.",
      ]}
    >
      <p>
        This page exists in three languages, all of which point back at this page, and one canonical, which does not.
        A canonical is a page saying “index that one, not me.”
      </p>
      <p>Take it at its word.</p>
    </Case>
  );
}
