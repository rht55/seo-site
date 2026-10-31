import type { Metadata } from "next";
import Inspector from "../../../components/lab/deindexed/Inspector";

export const metadata: Metadata = {
  title: { default: "Deindexed", template: "%s · Deindexed" },
  robots: { index: false, follow: false },
};

export default function DeindexedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Inspector />
    </>
  );
}
