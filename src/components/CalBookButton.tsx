"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CalendarClock } from "lucide-react";
import { CAL_LINK, YANDEX_METRIKA_ID } from "@/lib/site";

const CAL_NAMESPACE = "booking";

export default function CalBookButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#3B82F6" } },
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"theme":"dark"}'
      className="flex items-center gap-4 rounded-lg border border-surface-border bg-surface p-5 hover:border-primary transition-colors text-left w-full cursor-pointer"
      onClick={() => window.ym?.(YANDEX_METRIKA_ID, "reachGoal", "cal_booking_click")}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background border border-surface-border text-primary">
        <CalendarClock size={18} />
      </span>
      <div>
        <div className="text-sm text-muted mb-0.5">Видеозвонок</div>
        <div className="font-mono text-base">Забронировать 30 минут</div>
      </div>
    </button>
  );
}
