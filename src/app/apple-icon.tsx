import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon: тот же знак, что в icon.svg, на непрозрачном фоне
// (iOS сам скругляет углы). Только фигуры — шрифт не нужен.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0F14",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
          <rect
            width="18"
            height="18"
            x="3"
            y="3"
            rx="2"
            ry="2"
            fill="#0B0F14"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <path
            d="m7 11 2-2-2-2"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 13h4"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
