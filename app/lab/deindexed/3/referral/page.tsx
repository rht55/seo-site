import Case from "../../../../../components/lab/deindexed/Case";

export default function L3S3() {
  return (
    <Case
      level={3}
      step={3}
      of={5}
      title="Crew only"
      hints={[
        "Google has read the phone version of every site first since 2018. This one is no different.",
        "Make the window narrower than 480px, or turn on device emulation in devtools. Then go to /lab/deindexed/3/below-the-fold.",
      ]}
    >
      <p>
        The cookie let you through. Personalisation, logins and consent walls all work like this, and all of them hide
        content from a crawler that never gets the cookie.
      </p>
      <p>
        The last room is at /lab/deindexed/3/below-the-fold. The previous SEO built it for a phone and never checked the
        desktop.
      </p>
    </Case>
  );
}
