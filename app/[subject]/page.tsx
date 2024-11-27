"use client";

import { toSentenceCase } from "@/lib/functions/toSentenceCase";
import { useParams } from "next/navigation";

export default function Subject() {
  const { subject } = useParams();
  return (
    <>
      <h1>{toSentenceCase(subject as string)}</h1>
    </>
  );
}
