import SubjectTabs from "./subject-tabs";

const subjectsData = {
  mathematics: {
    title: "Mathematics",
    description:
      "A description about what your teaching methodology is in Mathematics. It can also include:",
    bulletPoints: [
      "Any bullet points",
      "You think",
      "Would work",
      "Well for Parents",
    ],
    specialCourses: ["SAT Math", "Vedic Maths", "Abacus"],
    grades: Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`),
  },
  coding: {
    title: "Coding",
    description:
      "Learn programming with our structured curriculum designed for all skill levels.",
    bulletPoints: [
      "Project-based learning",
      "Interactive coding sessions",
      "Real-world applications",
      "Industry-standard practices",
    ],
    specialCourses: ["Web Development", "Python", "App Development"],
    grades: Array.from({ length: 8 }, (_, i) => `Level ${i + 1}`),
  },
  english: {
    title: "English",
    description:
      "Master English language skills through our comprehensive program.",
    bulletPoints: [
      "Grammar mastery",
      "Vocabulary building",
      "Creative writing",
      "Public speaking",
    ],
    specialCourses: ["IELTS Prep", "Business English", "Creative Writing"],
    grades: Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`),
  },
  science: {
    title: "Science",
    description:
      "Explore scientific concepts through practical experiments and theory.",
    bulletPoints: [
      "Hands-on experiments",
      "Interactive learning",
      "Scientific reasoning",
      "Real-world applications",
    ],
    specialCourses: ["Physics", "Chemistry", "Biology"],
    grades: Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`),
  },
  hindi: {
    title: "Hindi",
    description: "Learn Hindi language with our structured curriculum.",
    bulletPoints: [
      "Grammar fundamentals",
      "Reading comprehension",
      "Writing skills",
      "Speaking practice",
    ],
    specialCourses: ["Basic Hindi", "Advanced Hindi", "Hindi Literature"],
    grades: Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`),
  },
};

export default function SubjectsSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Subjects
          </h2>
        </div>

        <SubjectTabs subjectsData={subjectsData} />
      </div>
    </section>
  );
}
