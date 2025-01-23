import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { FileBox, Rocket, Wrench } from "lucide-react";
import { ShortCourseCard } from "./short-course-card";

const shortCourses = {
  short_course_naplan: {
    id: "short_course_naplan",
    subjectId: "short_course",
    title: "NAPLAN",
    description: "Boosting skills for NAPLAN assessments, focusing on enhancing students' skills in literacy and numeracy. These concise, targeted courses help students improve their performance in the key areas assessed by NAPLAN.",
    gradeRange: "3rd, 5th, 7th & 9th",
    duration: "55 min",
  },
  short_course_budgeting: {
    id: "short_course_budgeting",
    subjectId: "short_course",
    title: "Budgeting",
    description: "Mastering the art of budgeting and financial planning, helping students develop essential money management skills for personal and professional success",
    gradeRange: "2nd to 12th",
    duration: "55 min",
  },
  short_course_icas: {
    id: "short_course_icas",
    subjectId: "short_course",
    title: "ICAS",
    description: "Preparing for the ICAS assessments, focusing on enhancing students' skills in English, Mathematics, Science, and Digital Technologies",
    gradeRange: "2nd to 12th",
    duration: "55 min",
  },
  short_course_financial_literacy: {
    id: "short_course_financial_literacy",
    subjectId: "short_course",
    title: "Financial Literacy",
    description: "Developing essential financial skills focusing on budgeting, saving, and investing for personal and professional success",
    gradeRange: "6th to 10th",
    duration: "55 min",
  },
  short_course_revision_classes: {
    id: "short_course_revision_classes",
    subjectId: "short_course",
    title: "Revision Classes",
    description: "Helping students consolidate knowledge and prepare for exams by focusing on key concepts and practice to boost confidence and performance",
    gradeRange: "All grades",
    duration: "55 min",
  },
  short_course_multiplication_tables: {
    id: "short_course_multiplication_tables",
    subjectId: "short_course",
    title: "Learn Multiplication Tables",
    description: "Using engaging methods to help students effectively learn and master multiplication tables for faster and more accurate calculations",
    gradeRange: "1st to 4th",
    duration: "55 min",
  },
  short_course_master_multiplication: {
    id: "short_course_master_multiplication",
    subjectId: "short_course",
    title: "Master Multiplication",
    description: "Building speed and accuracy in multiplication through interactive methods to reinforce key concepts for long-term success",
    gradeRange: "3rd onwards",
    duration: "55 min",
  },
  short_course_decode_division: {
    id: "short_course_decode_division",
    subjectId: "short_course",
    title: "Decode Division",
    description: "Conquering division by simplifying complex division problems and building confidence through engaging techniques",
    gradeRange: "3rd onwards",
    duration: "55 min",
  },
  short_course_fight_fractions: {
    id: "short_course_fight_fractions",
    subjectId: "short_course",
    title: "Fight Fractions",
    description: "Mastering fractions by simplifying and solving related problems with confidence",
    gradeRange: "3rd onwards",
    duration: "55 min",
  },
  short_course_ace_algebra: {
    id: "short_course_ace_algebra",
    subjectId: "short_course",
    title: "Ace Algebra",
    description: "Building a strong foundation in algebraic problem-solving by focusing on key concepts like equations and variables",
    gradeRange: "5th onwards",
    duration: "55 min",
  },
  short_course_creative_writing: {
    id: "short_course_creative_writing",
    subjectId: "short_course",
    title: "Creative Writing: Turn Imagination into Short Story",
    description: "Developing writing skills, story structure, and storytelling techniques to turn imagination into compelling short stories",
    gradeRange: "3rd to 6th",
    duration: "55 min",
  },
  short_course_command_grammar: {
    id: "short_course_command_grammar",
    subjectId: "short_course",
    title: "Command Over Grammar",
    description: "Enhancing writing and speaking skills by focusing on key grammatical rules and structures for clear communication",
    gradeRange: "1st to 8th",
    duration: "55 min",
  },
  short_course_learn_to_read_novel: {
    id: "short_course_learn_to_read_novel",
    subjectId: "short_course",
    title: "Learn to Read a Novel",
    description: "Developing skills for effective novel comprehension, analysis, and appreciation of literary techniques",
    gradeRange: "1st to 4th",
    duration: "55 min",
  },
  short_course_storytelling: {
    id: "short_course_storytelling",
    subjectId: "short_course",
    title: "Master the Art of Storytelling via Creative Writing",
    description: "Learning character development, plot, and narrative techniques to craft engaging stories that captivate readers",
    gradeRange: "3rd to 6th",
    duration: "55 min",
  },
  short_course_coding_game: {
    id: "short_course_coding_game",
    subjectId: "short_course",
    title: "Coding Adventure: Create Your Own Short Game",
    description: "Learning basic programming concepts and fostering creativity through game development",
    gradeRange: "1st to 4th",
    duration: "55 min",
  },
  short_course_interactive_greeting_card: {
    id: "short_course_interactive_greeting_card",
    subjectId: "short_course",
    title: "Create an Interactive Holiday Greeting Card",
    description: "Teaching basic programming and design skills to create personalized, engaging digital greeting cards",
    gradeRange: "1st to 4th",
    duration: "55 min",
  }
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
