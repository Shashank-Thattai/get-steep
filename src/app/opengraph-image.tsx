import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "steep — your digital-product store, this weekend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAF7",
          color: "#0E1F1A",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#5C6B65", letterSpacing: 2, textTransform: "uppercase" }}>
          steep — your storefront, this weekend
        </div>
        <div style={{ fontSize: 92, lineHeight: 0.95, letterSpacing: -2, maxWidth: 980 }}>
          A finished Next.js store. Digital or physical. Pay once. Own it.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 32, color: "#1F3A30" }}>$199 · one-time</div>
          <div style={{ fontSize: 22, color: "#5C6B65" }}>buy.shipsteep.com</div>
        </div>
      </div>
    ),
    size,
  );
}
