import { ImageResponse } from "next/og";

// Знак из app/icon.svg на непрозрачном фоне — для PNG-иконок веб-манифеста.
// markRatio: доля стороны под сам знак; остальное — тёмный фон (запас под
// обрезку maskable-иконок лаунчерами Android).
export function iconResponse(px: number, markRatio = 0.56): ImageResponse {
  const mark = Math.round(px * markRatio);
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
        <svg width={mark} height={mark} viewBox="0 0 24 24" fill="none">
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
    { width: px, height: px }
  );
}
