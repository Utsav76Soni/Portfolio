import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #0c4a6e 50%, #030712 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "linear-gradient(135deg, #38bdf8, #6366f1)",
            fontSize: 32,
            fontWeight: 700,
            color: "white",
            marginBottom: 32,
          }}
        >
          US
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#f8fafc",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Utsav Soni
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#38bdf8",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          React Native Developer & Full Stack Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
