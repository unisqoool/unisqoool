"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { getCourseTitleFromId } from "@/lib/data/courses";
import { getSubjectTitleFromId } from "@/lib/data/subjects";
import { redirect, useParams } from "next/navigation";

export default function Course() {
  const { subject, course } = useParams();
  const subjectId = Array.isArray(subject) ? subject[0] : subject;
  const subjectTitle = getSubjectTitleFromId(subjectId);
  const courseId = Array.isArray(course) ? course[0] : course;
  const courseTitle = getCourseTitleFromId(courseId);

  if (!subjectTitle || !courseTitle) {
    return redirect("/");
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: subjectTitle, href: `/${subjectId}` },
          { label: courseTitle, href: `/${subjectId}/${courseId}` },
        ]}
      />
    </>
  );
}
