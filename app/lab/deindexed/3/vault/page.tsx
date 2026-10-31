import Case from "../../../../../components/lab/deindexed/Case";

export default function L3S2() {
  return (
    <Case
      level={3}
      step={2}
      of={5}
      title="The vault"
      hints={[
        "You are in. Getting in gave your browser something, and the next door checks for it.",
        "The vault set a cookie called crew. The next page is /lab/deindexed/3/referral, and it only opens for browsers carrying it.",
      ]}
    >
      <p>
        You are inside the vault. Googlebot never got this far: five attempts, five 401s, because a crawler does not
        carry a password. The login was in the structured data of the level start page the whole time.
      </p>
      <p>
        The vault has one more door, and it only opens for members of the crew. Being here has made you one. Head to
        /lab/deindexed/3/referral.
      </p>
    </Case>
  );
}
