import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Лев Алексеев — Fullstack-разработчик";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const interRegular = await readFile(
  join(process.cwd(), "src/assets/fonts/Inter-Regular.woff")
);
const interBold = await readFile(
  join(process.cwd(), "src/assets/fonts/Inter-Bold.woff")
);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F14",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "3px solid #3B82F6",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "#3B82F6",
              fontFamily: "Inter",
              fontWeight: 700,
            }}
          >
            {">_"}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#E5E7EB" }}>
            Лев Алексеев
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              color: "#E5E7EB",
              lineHeight: 1.15,
            }}
          >
            Fullstack-разработчик
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9CA3AF" }}>
            Django + Next.js — сайты и интернет-магазины на заказ
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["Django", "Next.js", "TypeScript", "VPS"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#9CA3AF",
                border: "1px solid #30363D",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
      ],
    }
  );
}
