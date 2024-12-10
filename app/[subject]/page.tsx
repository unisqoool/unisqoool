"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from "@/lib/data/courses";
import { getSubjectData } from "@/lib/data/subjects";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { CourseCard } from "./course-card";

type FilterType = "all" | "grade" | "competitive" | "special";

export default function Subject() {
  const { subject } = useParams();
  const subjectId = Array.isArray(subject) ? subject[0] : subject;
  const subjectData = getSubjectData(subjectId);
  const subjectTitle = subjectData?.title;
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  if (!subjectData || !subjectTitle) {
    return redirect("/");
  }

  const courses = subjectData.courses.map((courseId) => coursesData[courseId]);

  const { gradeCourses, competitiveCourses, specialCourses, totalCourseTypes } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => {
      const gradeCourses = courses.filter((course) => course.type === "grade");
      const competitiveCourses = courses.filter(
        (course) => course.type === "competitive"
      );
      const specialCourses = courses.filter(
        (course) => course.type === "special"
      );
      const totalCourseTypes = new Set(courses.map((course) => course.type))
        .size;

      return {
        gradeCourses,
        competitiveCourses,
        specialCourses,
        totalCourseTypes,
      };
    }, [courses]);

  return (
    <div className="bg-white container mx-auto">
      <Breadcrumbs items={[{ label: subjectTitle, href: `/${subjectId}` }]} />

      {/* Banner Section */}
      <div className="w-full h-48 bg-usq-faded-peach" />

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:p-12">
        {/* Subject Title and Description */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-usq-red mb-2 font-podkova">
            {subjectData.title.toUpperCase()}
          </h1>
          <p className="text-gray-600 max-w-3xl">{subjectData.description}</p>
        </div>

        {/* Quick Links */}
        {/* <div className="flex flex-wrap gap-4 mb-8">
          {gradeCourses.length > 0 && (
            <Button variant="outline" className="border-2">
              Grades 1-10
            </Button>
          )}
          {competitiveCourses.length > 0 && (
            <Button variant="outline" className="border-2">
              Competitive Exams
            </Button>
          )}
          {specialCourses.length > 0 && (
            <Button variant="outline" className="border-2">
              Special Courses
            </Button>
          )}
        </div> */}

        {/* Book Trial Button */}
        <div className="mb-12">
          <Button asChild variant="primary" size="lg">
            <Link href="/book-trial">Book Your Free Trial</Link>
          </Button>
        </div>

        {/* Filters */}
        {totalCourseTypes > 1 && (
          <Tabs
            value={activeFilter}
            onValueChange={(value) => setActiveFilter(value as FilterType)}
            className="mb-12"
          >
            <TabsList className="bg-transparent border-b w-full justify-start gap-1 lg:gap-4">
              <TabsTrigger value="all">All</TabsTrigger>
              {gradeCourses.length > 0 && (
                <TabsTrigger value="grade">Grade</TabsTrigger>
              )}
              {competitiveCourses.length > 0 && (
                <TabsTrigger value="competitive">Competitive</TabsTrigger>
              )}
              {specialCourses.length > 0 && (
                <TabsTrigger value="special">Special</TabsTrigger>
              )}
            </TabsList>
          </Tabs>
        )}

        {/* Grade-wise Section */}
        {(activeFilter === "all" || activeFilter === "grade") &&
          gradeCourses.length > 0 && (
            <section className="mb-16 mx-4">
              <h2 className="text-2xl font-bold mb-8 font-nunito-sans">
                Grade-wise {subjectData.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {gradeCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    subjectId={subjectId}
                  />
                ))}
              </div>
            </section>
          )}

        {/* Competitive Exam Section */}
        {(activeFilter === "all" || activeFilter === "competitive") &&
          competitiveCourses.length > 0 && (
            <section className="mb-16 mx-4">
              <h2 className="text-2xl font-bold mb-8">
                Competitive Exam Preparation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {competitiveCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    subjectId={subjectId}
                  />
                ))}
              </div>
            </section>
          )}

        {/* Special Programs Section */}
        {(activeFilter === "all" || activeFilter === "special") &&
          specialCourses.length > 0 && (
            <section className="mb-16 mx-4">
              <h2 className="text-2xl font-bold mb-8">Special Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {specialCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    subjectId={subjectId}
                  />
                ))}
              </div>
            </section>
          )}
      </div>
    </div>
  );
}
