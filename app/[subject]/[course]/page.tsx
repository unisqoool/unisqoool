"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { getCourseData } from "@/lib/data/courses";
import { getSubjectData } from "@/lib/data/subjects";
import { redirect, useParams } from "next/navigation";

export default function Course() {
  const { subject, course } = useParams();
  const subjectId = Array.isArray(subject) ? subject[0] : subject;
  const subjectData = getSubjectData(subjectId);
  const subjectTitle = subjectData?.title;
  const courseId = Array.isArray(course) ? course[0] : course;
  const courseData = getCourseData(courseId);
  const courseTitle = courseData?.title;

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
