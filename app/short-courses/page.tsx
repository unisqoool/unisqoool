import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { FileBox, Rocket, Wrench } from "lucide-react";
import { ShortCourseCard } from "./short-course-card";

const shortCourses = {
  short_course_naplan: {
    id: "short_course_naplan",
    subjectId: "short_course",
    title: "NAPLAN",
    description:
      "Boosting skills for NAPLAN assessments, focusing on enhancing students' skills in literacy and numeracy. These concise, targeted courses help students improve their performance in the key areas assessed by NAPLAN.",
    gradeRange: "3rd, 5th, 7th & 9th",
    duration: "55 min",
  },
  short_course_budgeting: {
    id: "short_course_budgeting",
    subjectId: "short_course",
    title: "Budgeting",
    description:
      "Mastering the art of budgeting and financial planning, helping students develop essential money management skills for personal and professional success",
    gradeRange: "2nd to 12th",
    duration: "55 min",
  },
  short_course_icas: {
    id: "short_course_icas",
    subjectId: "short_course",
    title: "ICAS",
    description:
      "Preparing for the ICAS assessments, focusing on enhancing students' skills in English, Mathematics, Science, and Digital Technologies",
    gradeRange: "2nd to 12th",
    duration: "55 min",
  },
};

const features = [
  {
    icon: Rocket,
    title: "Quick Completion",
    description: "Finish in a few sessions",
  },
  {
    icon: Wrench,
    title: "Real Projects",
    description: "Build Your Own Things",
  },
  {
    icon: FileBox,
    title: "Keep your files",
    description: "Get project files & resources",
  },
];

const ShortCourses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[{ label: "Short Courses", href: "/short-courses" }]}
      />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-usq-red mb-4 font-podkova">
            SHORT COURSES
          </h1>
          <p className="text-lg text-usq-blue-black max-w-2xl mx-auto">
            Unisqoool offers short courses to help students revise, learn, and
            master topics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-usq-faded-peach flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-usq-red" />
                  </div>
                  <h3 className="text-xl font-bold text-usq-blue-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-usq-blue-black">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-24">
          <div className="grid grid-cols-1 gap-12">
            {Object.values(shortCourses).map((course) => (
              <ShortCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortCourses;
