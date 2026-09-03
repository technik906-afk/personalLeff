import { iconResponse } from "@/lib/iconMark";

export const dynamic = "force-static";

export function GET() {
  return iconResponse(192, 0.62);
}
