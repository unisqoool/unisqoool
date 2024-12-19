"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface IProps {
  subject: string;
  course?: string;
}

export default function CalBooking({ subject, course }: IProps) {
  const calLink = `unisqoool/${subject}${!!course ? `?course=${course}` : ""}`;

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
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
