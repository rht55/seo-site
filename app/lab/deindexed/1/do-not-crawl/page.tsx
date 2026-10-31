import Case from "../../../../../components/lab/deindexed/Case";

export default function L1S4() {
  return (
    <Case
      level={1}
      step={4}
      of={5}
      title="The page they did not want crawled"
      hints={[
        "Pages nobody links to still get listed somewhere, if the site wants them indexed.",
        "robots.txt names two sitemaps. Open the second one and look for the page with the oldest lastmod.",
      ]}
    >
      <p>You are standing where the crawler was told not to stand. It is a little anticlimactic. One note:</p>
      <p>
        <em>
          “The important page has no links. None. I unlinked it myself. But I never took it out of the list we send
          Google, because nobody ever reads that list.”
        </em>
      </p>
      <p>Read the list.</p>
    </Case>
  );
}
