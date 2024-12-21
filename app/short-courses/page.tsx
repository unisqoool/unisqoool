import { Breadcrumbs } from "@/components/breadcrumbs";
import React from "react";

const ShortCourses = () => {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Short Courses", href: "/short-courses" }]}
      />
      <p>Short Courses</p>
    </>
  );
};

export default ShortCourses;
