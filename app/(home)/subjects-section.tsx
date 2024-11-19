import SubjectTabs from "./subject-tabs";

const subjectsData = {
  mathematics: {
    title: "Mathematics",
    description:
      "We focus on building strong conceptual understanding through interactive lessons, step-by-step guidance, and real-world applications. We use visual aids, adaptive learning tools, and continuous feedback to ensure students grasp key concepts, develop problem-solving skills, and learn at their own pace.",
    bulletPoints: [],
    specialCourses: ["SAT", "NAPLAN", "ICAS", "AMO", "Vedic Maths", "Abacus"],
    grades: Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`),
  },
  coding: {
    title: "Coding",
    description:
      "We combine hands-on practice with theory, ensuring students learn by building real projects. We focus on interactive lessons, problem-solving exercises, and step-by-step coding challenges, while providing instant feedback and personalized support to help learners master programming languages and develop practical coding skills.",
    bulletPoints: [],
    specialCourses: [
      "Web Development",
      "Python",
      "Scratch",
      "Roblox",
      "Minecraft",
      "Block Coding",
    ],
    grades: [],
  },
  english: {
    title: "English",
    description:
      "Our English teaching methodology emphasizes immersive, communicative learning. We combine grammar and vocabulary lessons with interactive activities, reading, writing, and speaking exercises. Through real-world contexts, personalized feedback, and multimedia resources, we help students build confidence and fluency in both written and spoken English",
    bulletPoints: [],
    specialCourses: [
      "Verbal, Written and Creative",
      "Phonics",
      "Business Communication",
      "Spoken English",
    ],
    grades: Array.from({ length: 8 }, (_, i) => `Grade ${i + 1}`),
  },
  science: {
    title: "Science",
    description:
      "We focus on inquiry-based learning, encouraging curiosity and exploration. Through hands-on experiments, interactive simulations, and real-world applications, students grasp key scientific concepts. We combine visual aids, critical thinking exercises, and personalized feedback to foster a deep understanding of science and its practical uses.",
    bulletPoints: [],
    specialCourses: ["Physics", "Chemistry", "Biology"],
    grades: Array.from({ length: 8 }, (_, i) => `Grade ${i + 1}`),
  },
  hindi: {
    title: "Hindi",
    description:
      "Our Hindi teaching methodology integrates language fundamentals with cultural context. Through interactive lessons, storytelling, vocabulary building, and conversational practice, we focus on reading, writing, and speaking skills. Students engage with multimedia resources and personalized feedback to gain fluency and confidence in Hindi, fostering both language and cultural appreciation.",
    bulletPoints: [],
    specialCourses: ["Verbal Hindi", "Written Hindi", "Creative Hindi"],
    grades: Array.from({ length: 8 }, (_, i) => `Grade ${i + 1}`),
  },
};

export default function SubjectsSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito">
            Our Subjects
          </h2>
        </div>

        <SubjectTabs subjectsData={subjectsData} />
      </div>
    </section>
  );
}
