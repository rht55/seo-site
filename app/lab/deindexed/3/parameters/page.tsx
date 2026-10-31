import Case from "../../../../../components/lab/deindexed/Case";
import Keycard from "../../../../../components/lab/deindexed/Keycard";

export default async function L3S5({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const debug = params.debug === "1" || params.debug === "true";
  return (
    <Case
      level={3}
      step={5}
      of={5}
      title="Parameters"
      hints={debug ? undefined : ["Pages sometimes have a debug mode, and it is usually switched on by a query parameter.", "Add ?debug=1 to this URL."]}
    >
      {debug ? (
        <>
          <p>
            Debug mode. Query parameters make infinite copies of a page, and every one of them is a different URL to a
            crawler. This is the copy with the answer on it.
          </p>
          <p>
            That is the deep end: a log file, HTTP auth, a cookie, a viewport and a parameter. Five ways a page can be
            real for a person and invisible to Google.
          </p>
          <Keycard level={3} word="INDEXED" />
        </>
      ) : (
        <>
          <p>
            The last page. It looks finished. The previous SEO left a debug mode on it for the day someone needed to see
            what it was really doing.
          </p>
          <p>Switch it on.</p>
        </>
      )}
    </Case>
  );
}
