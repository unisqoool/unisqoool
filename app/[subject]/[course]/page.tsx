"use client";

import { toSentenceCase } from "@/lib/functions/toSentenceCase";
import { useParams } from "next/navigation";

export default function Course() {
  const { subject, course } = useParams();
  return (
    <>
      <h1>
        {toSentenceCase(subject as string)} / {toSentenceCase(course as string)}
      </h1>
    </>
  );
}
