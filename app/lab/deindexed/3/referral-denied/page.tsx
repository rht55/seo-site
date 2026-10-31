import Case from "../../../../../components/lab/deindexed/Case";

export default function L3S3Denied() {
  return (
    <Case
      level={3}
      step={3}
      of={5}
      title="Crew only"
      hints={[
        "You are being turned away because of how you arrived, not who you are.",
        "The vault sets a cookie when you log into it. Open /lab/deindexed/3/vault first, then come back here in the same browser.",
      ]}
    >
      <p>
        This door checks for a cookie and you are not carrying it. Googlebot never carries it either, which is why it
        never saw what is behind here.
      </p>
      <p>Come in the way the crew comes in.</p>
    </Case>
  );
}
