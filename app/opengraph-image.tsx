import { ImageResponse } from "next/og";

export const alt = "Richard Talbot, technical SEO and digital marketing consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #09090b 0%, #121216 60%, #0b1200 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#f4f4f5",
              color: "#09090b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            RT
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa" }}>richardhtalbot.co.uk</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>
            Richard Talbot
          </div>
          <div style={{ fontSize: 36, color: "#c6f04b", letterSpacing: -1 }}>
            Working in the gap between strategy and shipping.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a1a1aa" }}>
          <span>Founder and Director, Totally Digital</span>
          <span>London</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
