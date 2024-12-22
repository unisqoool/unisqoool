interface ModuleContent {
  title: string;
  contents: string[];
}

export interface CourseData {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  type: "grade" | "competitive" | "special";
  ageRange?: string;
  duration?: string;
  classType?: string;
  overview?: string;
  targetAudience?: string[];
  benefits?: string[];
  learningOutcomes?: string[];
  modules?: ModuleContent[];
  features?: string[];
}

export const coursesData: { [key: string]: CourseData } = {
  // Mathematics Courses
  math_grade_1: {
    id: "math_grade_1",
    subjectId: "mathematics",
    title: "Grade 1",
    description: "Foundational mathematics for young learners",
    type: "grade",
    ageRange: "5-6",
    duration: "55 min",
    classType: "1:1 Classes",
    overview:
      "Our Grade 1 Mathematics course lays the foundation for mathematical thinking. Through engaging activities and interactive lessons, students will develop a strong number sense, learn basic operations, and explore shapes and measurements.",
    targetAudience: [
      "Students aged 5-6 years",
      "Children entering or in Grade 1",
      "Young learners interested in building a strong math foundation",
    ],
    benefits: [
      "Develop strong number sense and counting skills",
      "Learn addition and subtraction with confidence",
      "Explore shapes and basic geometry concepts",
      "Build problem-solving and critical thinking skills",
    ],
    learningOutcomes: [
      "Count, read, and write numbers up to 100",
      "Perform basic addition and subtraction operations",
      "Recognize and describe basic 2D and 3D shapes",
      "Understand and use simple measurement concepts",
    ],
    modules: [
      {
        title: "Module 1",
        contents: [
          "Introduction to key concepts",
          "Basic principles and foundations",
          "Practice exercises and applications",
          "Assessment and review",
        ],
      },
      {
        title: "Module 2",
        contents: [
          "Introduction to key concepts",
          "Basic principles and foundations",
          "Practice exercises and applications",
          "Assessment and review",
        ],
      },
      {
        title: "Module 3",
        contents: [
          "Introduction to key concepts",
          "Basic principles and foundations",
          "Practice exercises and applications",
          "Assessment and review",
        ],
      },
      {
        title: "Module 4",
        contents: [
          "Introduction to key concepts",
          "Basic principles and foundations",
          "Practice exercises and applications",
          "Assessment and review",
        ],
      },
      // ... other modules
    ],
    features: ["Counting, Adding, and More!"],
  },
  math_grade_2: {
    id: "math_grade_2",
    subjectId: "mathematics",
    title: "Grade 2",
    description: "Building on foundational concepts",
    type: "grade",
    ageRange: "6-7",
    duration: "55 min",
    features: ["Building Math Skills Every Day"],
  },
  math_grade_3: {
    id: "math_grade_3",
    subjectId: "mathematics",
    title: "Grade 3",
    description: "Advancing mathematical skills",
    type: "grade",
    ageRange: "7-8",
    duration: "55 min",
    features: ["Adding, Subtracting, and Exploring!"],
  },
  math_grade_4: {
    id: "math_grade_4",
    subjectId: "mathematics",
    title: "Grade 4",
    description: "Developing problem-solving abilities",
    type: "grade",
    ageRange: "8-9",
    duration: "55 min",
    features: ["Mastering Multiplication and Division"],
  },
  math_grade_5: {
    id: "math_grade_5",
    subjectId: "mathematics",
    title: "Grade 5",
    description: "Solving Bigger Problems with Math",
    type: "grade",
    ageRange: "9-10",
    duration: "55 min",
    features: ["Exploring Fractions, Decimals, and More!"],
  },
  math_grade_6: {
    id: "math_grade_6",
    subjectId: "mathematics",
    title: "Grade 6",
    description: "Advanced Math Skills for Future Success",
    type: "grade",
    ageRange: "10-11",
    duration: "55 min",
    features: ["Exploring Algebra and Geometry"],
  },
  math_sat: {
    id: "math_sat",
    subjectId: "mathematics",
    title: "SAT",
    description: "Comprehensive SAT math preparation",
    type: "competitive",
    ageRange: "12+",
    duration: "55 min",
    classType: "Small Group Classes",
    overview:
      "Our SAT Mathematics Preparation course is designed to equip students with the knowledge, strategies, and confidence needed to excel in the math section of the SAT. Through rigorous practice and targeted instruction, students will master key concepts and test-taking techniques.",
    targetAudience: [
      "High school students planning to take the SAT",
      "Students aiming to improve their SAT math scores",
      "Learners seeking to strengthen their overall math skills",
    ],
    benefits: [
      "Comprehensive coverage of all SAT math topics",
      "Strategies for tackling different question types",
      "Timed practice to improve speed and accuracy",
      "Personalized feedback and progress tracking",
    ],
    learningOutcomes: [
      "Master algebra, geometry, and trigonometry concepts tested on the SAT",
      "Develop effective problem-solving strategies for SAT-style questions",
      "Improve time management skills for the math section",
      "Gain confidence in tackling challenging math problems",
    ],
    features: ["Ace Your SAT Math with Confidence"],
  },
  math_naplan: {
    id: "math_naplan",
    subjectId: "mathematics",
    title: "NAPLAN",
    description: "Preparation for NAPLAN numeracy assessments",
    type: "competitive",
    ageRange: "6+",
    duration: "55 min",
    features: ["Aligned with Australian Curriculum"],
  },
  math_imo: {
    id: "math_imo",
    subjectId: "mathematics",
    title: "IMO",
    description: "Advanced training for International Mathematics Olympiad",
    type: "competitive",
    ageRange: "12+",
    duration: "55 min",
    features: ["The Path to Math Olympiad Excellence"],
  },
  math_abacus: {
    id: "math_abacus",
    subjectId: "mathematics",
    title: "Abacus",
    description: "Mental math using the abacus tool",
    type: "special",
    ageRange: "8+",
    duration: "55 min",
    features: ["Mastering Math the Abacus Way"],
  },
  math_vedic: {
    id: "math_vedic",
    subjectId: "mathematics",
    title: "Vedic Mathematics",
    description: "Ancient Indian system of mental arithmetic",
    type: "special",
    ageRange: "10+",
    duration: "55 min",
    features: ["Math Made Easy with Ancient Vedic Methods"],
  },

  // Coding Courses
  coding_beginners: {
    id: "coding_beginners",
    subjectId: "coding",
    title: "Beginner",
    description: "Introduction to basic programming concepts",
    type: "special",
    ageRange: "8-12",
    features: [
      "Block-based coding",
      "Simple game development",
      "Logic building",
    ],
  },
  coding_intermediate: {
    id: "coding_intermediate",
    subjectId: "coding",
    title: "Intermediate",
    description: "Advancing programming skills with text-based languages",
    type: "special",
    ageRange: "12-15",
    features: [
      "Python basics",
      "Web development fundamentals",
      "Simple app creation",
    ],
  },
  coding_advance: {
    id: "coding_advance",
    subjectId: "coding",
    title: "Advanced",
    description: "Complex programming concepts and project-based learning",
    type: "special",
    ageRange: "15-18",
    features: ["Data structures", "Algorithms", "Full-stack development"],
  },
  coding_professional: {
    id: "coding_professional",
    subjectId: "coding",
    title: "Professional",
    description: "Industry-level programming and software development",
    type: "special",
    ageRange: "18+",
    features: ["Advanced frameworks", "Version control", "Agile methodologies"],
  },

  // English Courses
  english_grade_1: {
    id: "english_grade_1",
    subjectId: "english",
    title: "Grade 1",
    description: "Building foundational language skills",
    type: "grade",
    ageRange: "5-6",
    duration: "45 min",
  },
  english_grade_2: {
    id: "english_grade_2",
    subjectId: "english",
    title: "Grade 2",
    description: "Developing reading and writing abilities",
    type: "grade",
    ageRange: "6-7",
    duration: "45 min",
  },
  english_grade_3: {
    id: "english_grade_3",
    subjectId: "english",
    title: "Grade 3",
    description: "Enhancing comprehension and expression",
    type: "grade",
    ageRange: "7-8",
    duration: "45 min",
  },
  english_grade_4: {
    id: "english_grade_4",
    subjectId: "english",
    title: "Grade 4",
    description: "Advancing language proficiency",
    type: "grade",
    ageRange: "8-9",
    duration: "45 min",
  },
  english_grade_5: {
    id: "english_grade_5",
    subjectId: "english",
    title: "Grade 5",
    description: "Refining communication skills",
    type: "grade",
    ageRange: "9-10",
    duration: "45 min",
  },
  english_grade_6: {
    id: "english_grade_6",
    subjectId: "english",
    title: "Grade 6",
    description: "Preparing for advanced language studies",
    type: "grade",
    ageRange: "10-11",
    duration: "45 min",
  },
  english_sat: {
    id: "english_sat",
    subjectId: "english",
    title: "SAT",
    description: "Comprehensive SAT English and Writing preparation",
    type: "competitive",
    features: ["Critical reading", "Essay writing", "Grammar and usage"],
  },
  english_naplan: {
    id: "english_naplan",
    subjectId: "english",
    title: "NAPLAN",
    description: "Preparation for NAPLAN literacy assessments",
    type: "competitive",
    features: [
      "Reading comprehension",
      "Writing tasks",
      "Language conventions",
    ],
  },
  english_ieo: {
    id: "english_ieo",
    subjectId: "english",
    title: "IEO",
    description: "Advanced English skills for olympiad competitions",
    type: "competitive",
    features: [
      "Vocabulary enhancement",
      "Advanced grammar",
      "Analytical reading",
    ],
  },

  // Science Courses
  science_grade_1: {
    id: "science_grade_1",
    subjectId: "science",
    title: "Grade 1",
    description: "Introduction to basic scientific concepts",
    type: "grade",
    ageRange: "5-6",
    duration: "45 min",
  },
  science_grade_2: {
    id: "science_grade_2",
    subjectId: "science",
    title: "Grade 2",
    description: "Exploring the natural world",
    type: "grade",
    ageRange: "6-7",
    duration: "45 min",
  },
  science_grade_3: {
    id: "science_grade_3",
    subjectId: "science",
    title: "Grade 3",
    description: "Understanding scientific processes",
    type: "grade",
    ageRange: "7-8",
    duration: "45 min",
  },
  science_grade_4: {
    id: "science_grade_4",
    subjectId: "science",
    title: "Grade 4",
    description: "Investigating physical and life sciences",
    type: "grade",
    ageRange: "8-9",
    duration: "45 min",
  },
  science_grade_5: {
    id: "science_grade_5",
    subjectId: "science",
    title: "Grade 5",
    description: "Advancing scientific inquiry skills",
    type: "grade",
    ageRange: "9-10",
    duration: "45 min",
  },
  science_grade_6: {
    id: "science_grade_6",
    subjectId: "science",
    title: "Grade 6",
    description: "Preparing for advanced scientific studies",
    type: "grade",
    ageRange: "10-11",
    duration: "45 min",
  },

  // Hindi Courses
  hindi_grade_1: {
    id: "hindi_grade_1",
    subjectId: "hindi",
    title: "Grade 1",
    description: "Building foundational Hindi language skills",
    type: "grade",
    ageRange: "5-6",
    duration: "45 min",
  },
  hindi_grade_2: {
    id: "hindi_grade_2",
    subjectId: "hindi",
    title: "Grade 2",
    description: "Developing Hindi reading and writing abilities",
    type: "grade",
    ageRange: "6-7",
    duration: "45 min",
  },
  hindi_grade_3: {
    id: "hindi_grade_3",
    subjectId: "hindi",
    title: "Grade 3",
    description: "Enhancing Hindi comprehension and expression",
    type: "grade",
    ageRange: "7-8",
    duration: "45 min",
  },
  hindi_grade_4: {
    id: "hindi_grade_4",
    subjectId: "hindi",
    title: "Grade 4",
    description: "Advancing Hindi language proficiency",
    type: "grade",
    ageRange: "8-9",
    duration: "45 min",
  },
  hindi_grade_5: {
    id: "hindi_grade_5",
    subjectId: "hindi",
    title: "Grade 5",
    description: "Refining Hindi communication skills",
    type: "grade",
    ageRange: "9-10",
    duration: "45 min",
  },
  hindi_grade_6: {
    id: "hindi_grade_6",
    subjectId: "hindi",
    title: "Grade 6",
    description: "Preparing for advanced Hindi language studies",
    type: "grade",
    ageRange: "10-11",
    duration: "45 min",
  },
};

export const getCourseData = (courseId: string) => {
  const subject = coursesData[courseId];
  return subject ? subject : null;
};
