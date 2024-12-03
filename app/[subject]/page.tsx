"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { getSubjectTitleFromId } from "@/lib/data/subjects";
import { redirect, useParams } from "next/navigation";

export default function Subject() {
  const { subject } = useParams();
  const subjectId = Array.isArray(subject) ? subject[0] : subject;
  const subjectTitle = getSubjectTitleFromId(subjectId);

  if (!subjectTitle) {
    return redirect("/");
  }

  return (
    <>
      <Breadcrumbs items={[{ label: subjectTitle, href: `/${subjectId}` }]} />
    </>
  );
}
