import { iconResponse } from "@/lib/iconMark";

export const dynamic = "force-static";

export function GET() {
  return iconResponse(512, 0.56);
}
