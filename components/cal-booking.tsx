"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "trial-class-unisqool" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0081a7" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="trial-class-unisqool"
      calLink="abhirup-basu/trial-class-unisqool"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
