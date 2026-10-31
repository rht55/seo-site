import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // the whole game stays out of the index
        source: "/lab/deindexed/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/lab/deindexed",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // level 2, step 1: the HTML says index, these headers say otherwise
        source: "/lab/deindexed/2",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "X-Deindexed-Note", value: "the HTML says index. This header wins. Headers always do." },
          { key: "X-Deindexed-Next", value: "/lab/deindexed/2/hop" },
        ],
      },
    ];
  },
};

export default nextConfig;
