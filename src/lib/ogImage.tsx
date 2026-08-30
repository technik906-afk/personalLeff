import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const interRegular = await readFile(
  join(process.cwd(), "src/assets/fonts/Inter-Regular.woff")
);
const interBold = await readFile(
  join(process.cwd(), "src/assets/fonts/Inter-Bold.woff")
);

export function renderOgImage({
  title,
  subtitle,
  tags = ["Django", "Next.js", "TypeScript", "VPS"],
}: {
  title: string;
  subtitle: string;
  tags?: string[];
}) {
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
              fontSize: 56,
              fontWeight: 700,
              color: "#E5E7EB",
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9CA3AF" }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {tags.map((tag) => (
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
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
      ],
    }
  );
}
