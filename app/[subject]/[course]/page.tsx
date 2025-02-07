"use client";

import BookTrialSection from "@/components/book-trial-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCourseData } from "@/lib/data/courses";
import { getSubjectData } from "@/lib/data/subjects";
import {
  Check,
  Clock,
  Download,
  GraduationCap,
  School,
  Shapes,
  Users,
  UsersRound,
} from "lucide-react";
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
    <div className="bg-white mx-auto">
      <Breadcrumbs
        items={[
          { label: subjectTitle, href: `/${subjectId}` },
          { label: courseTitle, href: `/${subjectId}/${courseId}` },
        ]}
      />

      {/* Hero Section */}
      <div className="bg-usq-faded-peach py-12 md:ps-8">
        <div className="container mx-auto md:px-4 text-center lg:text-start lg:px-0">
          <h1 className="text-5xl lg:text-6xl text-usq-red font-bold mb-6 font-podkova">
            {`${courseTitle} ${subjectTitle}`}
          </h1>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {courseData.ageRange && (
              <div className="inline-flex items-center bg-usq-peach/40 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                <span>Ages: {courseData.ageRange}</span>
              </div>
            )}
            {courseData.duration && (
              <div className="inline-flex items-center bg-usq-peach/40 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                <span>{courseData.duration}</span>
              </div>
            )}
            {courseData.classType && (
              <div className="inline-flex items-center bg-usq-peach/40 px-4 py-2 rounded-full">
                <School className="w-4 h-4 mr-2" />
                <span>{courseData.classType}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 py-12">
        {/* Course Overview */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-2 font-nunito">
            Course Overview
          </h2>
          <div
            className="text-usq-blue-black/80 lg:text-xl"
            dangerouslySetInnerHTML={{ __html: courseData.overview }}
          />
        </section>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {courseData.targetAudience &&
            courseData.targetAudience.length > 0 && (
              <Card className="border py-4 rounded-lg bg-usq-sky/40">
                <CardContent className="p-6">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-usq-teal">
                    <UsersRound className="inline-block mr-2 font-normal size-8 " />
                    Who This Course is For
                  </h3>
                  <ul className="space-y-2">
                    {courseData.targetAudience?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

          {courseData.benefits && courseData.benefits.length > 0 && (
            <Card className="border py-4 rounded-lg bg-usq-sky/40">
              <CardContent className="p-6">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-usq-teal">
                  <Shapes className="inline-block mr-2 font-normal size-8" />
                  Why Choose This Course
                </h3>
                <ul className="space-y-2">
                  {courseData.benefits?.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Learning Outcomes */}
        {courseData.learningOutcomes &&
          courseData.learningOutcomes.length > 0 && (
            <section className="flex flex-col lg:justify-center lg:items-center rounded-lg p-8 lg:px-8 lg:pb-16 bg-usq-sky/40">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:my-8 text-usq-teal">
                <GraduationCap className="inline-block mr-2 font-normal size-8 " />
                Learning Outcomes
              </h2>
              <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
                {courseData.learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="lg:text-xl flex items-start gap-2"
                  >
                    <Check className="size-6 text-usq-red mt-1 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
      </div>

      <BookTrialSection subject={subjectId} course={courseTitle} />

      {courseData.modules && courseData.modules.length > 0 && (
        <section className="my-12 container mx-auto text-center flex flex-col justify-center max-w-3xl text-usq-blue-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-nunito text-usq-red">
            Course Structure
          </h2>
          <div className="space-y-6 mx-4">
            <Accordion type="single" collapsible className="space-y-4">
              {courseData.modules.map((module, index) => (
                <AccordionItem
                  key={index}
                  value={`module-${index + 1}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-xl lg:text-2xl font-normal text-left cursor-pointer hover:scale-[1.005] hover:no-underline mx-2">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 py-2 text-start">
                      {module.contents.map((content, contentIndex) => (
                        <li
                          key={contentIndex}
                          className="text-usq-blue-black/90 lg:text-xl"
                        >
                          • &nbsp; {content}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6">
              <Button variant="secondary" className="w-full" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Full Curriculum
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
