export interface SubjectData {
  id: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  courses: string[]; // Array of course IDs
}

export const subjectsData: { [key: string]: SubjectData } = {
  mathematics: {
    id: "mathematics",
    title: "Mathematics",
    description:
      "We focus on building strong conceptual understanding through interactive lessons, step-by-step guidance, and real-world applications. We use visual aids, adaptive learning tools, and continuous feedback to ensure students grasp key concepts, develop problem-solving skills, and learn at their own pace.",
    bulletPoints: [],
    courses: [
      "math_sat",
      "math_naplan",
      "math_imo",
      "math_vedic",
      "math_abacus",
      "math_grade_1",
      "math_grade_2",
      "math_grade_3",
      "math_grade_4",
      "math_grade_5",
      "math_grade_6",
    ],
  },
  coding: {
    id: "coding",
    title: "Coding",
    description:
      "We combine hands-on practice with theory, ensuring students learn by building real projects. We focus on interactive lessons, problem-solving exercises, and step-by-step coding challenges, while providing instant feedback and personalized support to help learners master programming languages and develop practical coding skills.",
    bulletPoints: [],
    courses: [
      "coding_beginners",
      "coding_intermediate",
      "coding_advance",
      "coding_professional",
    ],
  },
  english: {
    id: "english",
    title: "English",
    description:
      "Our English teaching methodology emphasizes immersive, communicative learning. We combine grammar and vocabulary lessons with interactive activities, reading, writing, and speaking exercises. Through real-world contexts, personalized feedback, and multimedia resources, we help students build confidence and fluency in both written and spoken English",
    bulletPoints: [],
    courses: [
      "english_sat",
      "english_naplan",
      "english_ieo",
      "english_grade_1",
      "english_grade_2",
      "english_grade_3",
      "english_grade_4",
      "english_grade_5",
      "english_grade_6",
    ],
  },
  science: {
    id: "science",
    title: "Science",
    description:
      "We focus on inquiry-based learning, encouraging curiosity and exploration. Through hands-on experiments, interactive simulations, and real-world applications, students grasp key scientific concepts. We combine visual aids, critical thinking exercises, and personalized feedback to foster a deep understanding of science and its practical uses.",
    bulletPoints: [],
    courses: [
      "science_grade_1",
      "science_grade_2",
      "science_grade_3",
      "science_grade_4",
      "science_grade_5",
      "science_grade_6",
    ],
  },
  hindi: {
    id: "hindi",
    title: "Hindi",
    description:
      "Our Hindi teaching methodology integrates language fundamentals with cultural context. Through interactive lessons, storytelling, vocabulary building, and conversational practice, we focus on reading, writing, and speaking skills. Students engage with multimedia resources and personalized feedback to gain fluency and confidence in Hindi, fostering both language and cultural appreciation.",
    bulletPoints: [],
    courses: [
      "hindi_grade_1",
      "hindi_grade_2",
      "hindi_grade_3",
      "hindi_grade_4",
      "hindi_grade_5",
      "hindi_grade_6",
    ],
  },
};

export const getSubjectTitleFromId = (subjectId: string) => {
  const subject = subjectsData[subjectId];
  return subject ? subject.title : null;
};
