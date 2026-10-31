import Case from "../../../../../components/lab/deindexed/Case";
import Keycard from "../../../../../components/lab/deindexed/Keycard";

export default function L2S5Bot() {
  return (
    <Case level={2} step={5} of={5} title="Hello, Googlebot">
      <p>
        Cloaking: one page for people, another for the crawler. It is how Blackwater kept ranking for a year after the
        content was gone, and it is why the whole site went when it was caught.
      </p>
      <p>
        You have done the HTTP level: headers, redirect hops, a canonical, rendered versus raw, and a user agent. None
        of it is visible in a browser window, and all of it decides what Google sees.
      </p>
      <Keycard level={2} word="RENDERED" />
    </Case>
  );
}
