import Case from "../../../../../components/lab/deindexed/Case";
import Keycard from "../../../../../components/lab/deindexed/Keycard";

export default function L1S5() {
  return (
    <Case level={1} step={5} of={5} title="The orphan">
      <p>
        An orphan page: in the sitemap, linked from nowhere, last modified in 2024. This is where Blackwater’s rankings
        went to live when they stopped living on the site.
      </p>
      <p>
        You have done the taster: source, hidden text, robots and a sitemap. That is the first ten minutes of every
        audit you will ever do, and most of the sites you look at will fail at least one of them.
      </p>
      <Keycard level={1} word="CRAWLED" />
    </Case>
  );
}
