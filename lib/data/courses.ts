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
  overview: string;
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
      "This course covers key math concepts for first graders, including number recognition, basic addition and subtraction, shapes, time, and measurement. It focuses on developing problem-solving skills, building a strong mathematical foundation, and fostering a love for learning math.",
    targetAudience: [
      "First-grade students who are beginning to learn math concepts.",
      "Children who need support in developing basic math skills and number fluency.",
      "Parents and educators seeking a structured curriculum to help young learners succeed in math.",
    ],
    benefits: [
      "It provides a solid foundation in math, ensuring readiness for more advanced concepts.",
      "The course is designed to make learning engaging and accessible, encouraging confidence and success in math.",
      "It includes hands-on activities and interactive lessons to help children understand and apply math concepts effectively.",
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
    overview:
      "This course expands on foundational math skills, introducing more advanced concepts such as addition and subtraction with larger numbers, simple multiplication, telling time, and understanding money. Students will continue to develop problem-solving abilities and critical thinking skills.",
    targetAudience: [
      "Second-grade students who have mastered basic math concepts and are ready for more advanced learning.",
      "Children who need extra practice with addition, subtraction, and early multiplication skills.",
      "Parents and educators looking to build on students' math knowledge with a structured approach.",
    ],
    benefits: [
      "It helps strengthen math fluency and introduces key concepts that are essential for future math success.",
      "The course uses engaging, hands-on methods to make learning fun and interactive.",
      "It ensures students are well-prepared for third-grade math and beyond, fostering a love for learning and confidence in math",
    ],
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
    overview:
      "This course builds on previous math skills, focusing on more complex addition, subtraction, multiplication, and division. It also introduces concepts like fractions, measurement, and data interpretation, helping students apply math to real-world problems.",
    targetAudience: [
      "Third-grade students who have a solid grasp of basic arithmetic and are ready to tackle more challenging concepts.",
      "Children who need additional practice with multiplication, division, and understanding fractions.",
      "Parents and educators aim to develop critical thinking and problem-solving skills in young learners.",
    ],
    benefits: [
      "It strengthens students' math skills and prepares them for more advanced topics in higher grades.",
      "The course incorporates practical applications, making math more relatable and engaging.",
      "It encourages a deeper understanding of math, fostering both confidence and enthusiasm for learning.",
    ],
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
    overview:
      "This course focuses on expanding mathematical knowledge, including multi-digit multiplication, long division, fractions, decimals, and basic geometry concepts. Students will build problem-solving strategies and enhance their understanding of mathematical operations and relationships.",
    targetAudience: [
      "Fourth-grade students who have a basic understanding of arithmetic and are ready to explore more complex math concepts.",
      "Children who need extra practice with multiplication, division, and working with fractions and decimals.",
      "Parents and educators seek to support students in developing strong problem-solving and critical thinking skills.",
    ],
    benefits: [
      "It provides a strong foundation in key math concepts, ensuring students are prepared for future academic challenges.",
      "The course engages students with real-life applications and interactive exercises to make learning enjoyable.",
      "It encourages logical thinking and helps students develop the skills needed to solve more complex math problems independently.",
    ],
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
    overview:
      "This course deepens students' understanding of mathematics with topics like multi-digit multiplication and division, advanced fractions, decimals, percentages, geometry, and basic algebraic concepts. Students will refine their problem-solving skills and prepare for middle school math challenges.",
    targetAudience: [
      "Fifth-grade students who are ready to master more complex mathematical concepts and operations.",
      "Children who need extra practice with fractions, decimals, and beginning algebra.",
      "Parents and educators looking to solidify students' math skills and foster independent learning.",
    ],
    benefits: [
      "It provides a comprehensive foundation for middle school math, ensuring long-term academic success.",
      "The course offers practical, real-world examples to make abstract concepts more relatable and easier to grasp.",
      "It helps build confidence and critical thinking skills, making students more comfortable with challenging math topics.",
    ],
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
    overview:
      "This course introduces more advanced mathematical concepts, including ratios, proportions, integers, fractions, decimals, percentages, and basic algebra. Students will strengthen their problem-solving skills and develop a deeper understanding of mathematical reasoning to prepare for middle school and beyond.",
    targetAudience: [
      "Sixth-grade students who have a solid foundation in basic arithmetic and are ready to tackle more complex math topics.",
      "Children who need additional support with fractions, decimals, and basic algebraic concepts.",
      "Parents and educators seek to build strong math skills and foster a deeper understanding of mathematical concepts.",
    ],
    benefits: [
      "It prepares students for higher-level math courses by introducing foundational concepts that are critical for success in future grades.",
      "The course offers interactive lessons and practical examples, making challenging concepts more accessible and engaging.",
      "It helps students develop critical thinking and analytical skills, ensuring they are well-equipped for middle school math and beyond.",
    ],
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
      "This course focuses on preparing students for the SAT Math section by covering essential topics such as algebra, problem-solving, data analysis, geometry, and advanced mathematics. Students will learn to apply mathematical concepts to solve real-world problems, improve their problem-solving speed, and strengthen their test-taking strategies. The course includes targeted practice sessions, drills, and timed mock tests to build confidence and accuracy. Students will receive personalized feedback to help identify areas for improvement. By the end of the course, learners will be well-equipped with the skills and strategies needed to perform confidently and effectively on the SAT Math section",
    learningOutcomes: [
      "Master Core Math Concepts: Develop proficiency in key areas such as algebra, geometry, trigonometry, and data analysis, with a focus on problem-solving and application of mathematical principles.",
      "Enhance Problem-Solving Skills: Build strategies for tackling complex word problems, translating real-world scenarios into mathematical expressions, and using logical reasoning to arrive at solutions.",
      "Strengthen Arithmetic and Algebraic Skills: Improve operations with rational and irrational numbers, equations, inequalities, functions, and expressions to handle both basic and advanced algebraic problems.",
      "Data Analysis and Interpretation: Gain the ability to interpret and analyze data from graphs, tables, and charts, and apply statistical concepts to solve problems related to probability, mean, median, and standard deviation.",
    ],
  },
  math_naplan: {
    id: "math_naplan",
    subjectId: "mathematics",
    title: "NAPLAN",
    description: "Preparation for NAPLAN numeracy assessments",
    type: "competitive",
    ageRange: "6+",
    duration: "55 min",
    overview:
      "This course is designed to help students prepare for the Math section of the NAPLAN test, focusing on key topics such as number operations, algebra, geometry, measurement, and data analysis. Through a series of practice questions and interactive lessons, students will develop their problem-solving and critical thinking skills. The course emphasizes understanding mathematical concepts and applying them to real-life scenarios. Regular mock tests and personalized feedback will help track progress and improve test-taking strategies. By the end of the course, students will feel confident in their ability to approach the NAPLAN Math test with accuracy and efficiency.",
    learningOutcomes: [
      "Number and Operations: Develop strong foundational skills in arithmetic, including operations with whole numbers, fractions, decimals, and percentages, ensuring fluency in basic calculations and problem-solving.",
      "Algebra and Patterns: Strengthen understanding of algebraic concepts, including solving equations, recognizing patterns, and working with variables and expressions to build problem-solving strategies.",
      "Geometry and Measurement: Improve knowledge of geometric shapes, spatial reasoning, area, volume, and the use of measurement tools to solve practical problems related to length, angles, and 2D/3D shapes.",
      "Data and Probability: Enhance skills in interpreting and analyzing data, including the ability to work with graphs, tables, and statistics, and to understand basic concepts of probability and outcomes.",
    ],
  },
  math_imo: {
    id: "math_imo",
    subjectId: "mathematics",
    title: "IMO",
    description: "Advanced training for International Mathematics Olympiad",
    type: "competitive",
    ageRange: "12+",
    duration: "55 min",
    overview:
      "This course is designed to prepare students for the International Mathematics Olympiad (IMO), focusing on advanced problem-solving techniques and mathematical concepts. Students will delve into topics such as algebra, number theory, combinatorics, geometry, and mathematical logic. The course emphasizes developing critical thinking, analytical skills, and the ability to tackle complex problems through creative solutions. With challenging exercises, mock tests, and personalized feedback, students will enhance their mathematical abilities and build confidence in approaching competitive exams. This comprehensive preparation ensures students are well-equipped to excel in the IMO and other math competitions.",
    learningOutcomes: [
      "Advanced Problem-Solving Techniques: Develop expertise in solving complex and abstract mathematical problems using creative strategies, mathematical reasoning, and a variety of methods such as induction, contradiction, and combinatorics.",
      "Deep Understanding of Mathematical Concepts: Build a solid grasp of advanced topics such as number theory, algebra, geometry, combinatorics, and mathematical logic, and apply them in various problem-solving contexts.",
      "Critical Thinking and Proof Techniques: Strengthen skills in constructing rigorous mathematical proofs, including direct proofs, proof by induction, and proof by contradiction, ensuring clarity and logical consistency in solutions.",
      "Mathematical Competition Strategies: Enhance speed and accuracy in solving problems under timed conditions, practicing problem-solving in the format of the IMO, and building resilience in approaching difficult and unfamiliar mathematical challenges.",
    ],
  },
  math_abacus: {
    id: "math_abacus",
    subjectId: "mathematics",
    title: "Abacus",
    description: "Mental math using the abacus tool",
    type: "special",
    ageRange: "8+",
    duration: "55 min",
    overview: "Coming soon...",
    features: ["Mastering Math the Abacus Way"],
  },
  math_vedic: {
    id: "math_vedic",
    subjectId: "mathematics",
    title: "Vedic",
    description: "Ancient Indian system of mental arithmetic",
    type: "special",
    ageRange: "10+",
    duration: "55 min",
    overview: "Coming soon...",
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
    overview:
      "This course introduces the fundamentals of coding, teaching beginners how to write basic programs using beginner-friendly programming languages. Students will learn essential concepts like variables, loops, and conditionals, providing a strong foundation for future coding endeavors.",
    targetAudience: [
      "Individuals with no prior coding experience who want to get started in programming.",
      "Students or adults interested in learning how to create simple applications and understand the basics of computer science.",
      "Parents and educators looking to introduce coding in an easy and engaging way.",
    ],
    benefits: [
      "It provides a structured and accessible introduction to coding, making complex concepts easier to grasp.",
      "The course uses hands-on projects and interactive exercises to help learners build practical coding skills.",
      "It lays a solid foundation for more advanced programming courses and tech-related careers in the future.",
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
    overview:
      "This course builds on foundational coding knowledge, introducing more advanced concepts like object-oriented programming, data structures, and algorithms. Students will work on creating more complex projects, enhancing their coding skills and problem-solving abilities.",
    targetAudience: [
      "Individuals who have basic coding knowledge and want to expand their skills and tackle more complex programming challenges.",
      "Students or professionals looking to gain a deeper understanding of coding concepts and improve their problem-solving techniques.",
      "Parents and educators seeking to support learners in progressing from beginner to intermediate coding skills.",
    ],
    benefits: [
      "It strengthens students' understanding of core coding concepts, preparing them for advanced programming or real-world applications.",
      "The course offers hands-on projects that develop both coding and critical thinking skills.",
      "It equips learners with the tools to create more dynamic and functional applications, laying the groundwork for future tech careers.",
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
    overview:
      "This course dives into complex programming topics like advanced algorithms, system design, databases, and software development. Students will work on large-scale projects, honing their coding expertise and preparing for real-world software development challenges.",
    targetAudience: [
      "Experienced coders looking to deepen their understanding of advanced concepts and refine their programming skills.",
      "Individuals interested in pursuing careers in software engineering, app development, or data science.",
      "Professionals or students who want to master advanced techniques for solving complex problems in coding.",
    ],
    benefits: [
      "It provides comprehensive, in-depth knowledge that prepares learners for high-level coding tasks and real-world tech roles.",
      "The course emphasizes practical applications, ensuring students can build complex, scalable projects.",
      "It strengthens problem-solving skills and technical expertise, making students competitive in the tech industry.",
    ],
  },
  coding_professional: {
    id: "coding_professional",
    subjectId: "coding",
    title: "Professional",
    description: "Industry-level programming and software development",
    type: "special",
    ageRange: "18+",
    features: ["Advanced frameworks", "Version control", "Agile methodologies"],
    overview:
      "This advanced course is designed for those aiming to become professional software developers, covering topics like full-stack development, cloud computing, machine learning, and DevOps. Students will work on building industry-standard applications and gaining real-world experience in the tech field.",
    targetAudience: [
      "Experienced developers or coding professionals seeking to specialize in high-demand areas like full-stack development or machine learning.",
      "Individuals preparing for career advancement in software engineering, data science, or IT management.",
      "Professionals looking to build expertise in cutting-edge technologies and industry best practices.",
    ],
    benefits: [
      "It offers in-depth knowledge of advanced technologies and practical experience in building professional-grade applications.",
      "The course is tailored to industry standards, ensuring students gain skills directly applicable to high-level tech careers.",
      "It provides career-focused training, equipping learners with the expertise needed to excel in competitive coding roles and leadership positions.",
    ],
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
    overview:
      "This course focuses on building essential literacy skills, including phonics, vocabulary, reading comprehension, and basic writing. Students will develop a love for reading and writing through interactive lessons, helping them gain confidence in expressing themselves.",
    targetAudience: [
      "First-grade students who are beginning to learn reading and writing or need additional support in these areas.",
      "Children who are ready to improve their phonics, vocabulary, and basic sentence structure.",
      "Parents and educators looking to create a strong literacy foundation for young learners.",
    ],
    benefits: [
      "It helps students build essential reading and writing skills that will support future academic success.",
      "The course uses engaging and age-appropriate activities to make learning fun and interactive.",
      "It encourages creativity and self-expression, helping students develop confidence in their language abilities.",
    ],
  },
  english_grade_2: {
    id: "english_grade_2",
    subjectId: "english",
    title: "Grade 2",
    description: "Developing reading and writing abilities",
    type: "grade",
    ageRange: "6-7",
    duration: "45 min",
    overview:
      "This course strengthens foundational literacy skills, focusing on reading fluency, vocabulary expansion, sentence structure, and basic writing. Students will engage in fun activities to enhance comprehension and writing, preparing them for more advanced language skills.",
    targetAudience: [
      "Second-grade students who are developing reading and writing skills and are ready to build more confidence.",
      "Children who need extra practice with fluency, vocabulary, and constructing complete sentences.",
      "Parents and educators looking to foster literacy development and creativity in young learners.",
    ],
    benefits: [
      "It helps reinforce and expand essential literacy skills, laying the groundwork for future language success.",
      "The course provides engaging, hands-on activities that make learning fun and promote active participation.",
      "It builds reading comprehension and writing skills, helping students express themselves clearly and confidently.",
    ],
  },
  english_grade_3: {
    id: "english_grade_3",
    subjectId: "english",
    title: "Grade 3",
    description: "Enhancing comprehension and expression",
    type: "grade",
    ageRange: "7-8",
    duration: "45 min",
    overview:
      "This course focuses on enhancing reading comprehension, vocabulary development, sentence structure, and creative writing. Students will explore different types of texts, practice summarizing, and develop the skills to write clearly and coherently.",
    targetAudience: [
      "Third-grade students who are ready to strengthen their reading and writing abilities.",
      "Children who need additional practice with comprehension, vocabulary, and constructing more complex sentences.",
      "Parents and educators seeking to improve students' critical thinking and written expression skills.",
    ],
    benefits: [
      "It deepens students' understanding of language and strengthens essential literacy skills needed for academic success.",
      "The course incorporates a variety of engaging texts and activities to keep learning interactive and fun.",
      "It builds strong reading and writing habits, preparing students for more advanced language arts concepts in later grades.",
    ],
  },
  english_grade_4: {
    id: "english_grade_4",
    subjectId: "english",
    title: "Grade 4",
    description: "Advancing language proficiency",
    type: "grade",
    ageRange: "8-9",
    duration: "45 min",
    overview:
      "This course focuses on enhancing reading comprehension, expanding vocabulary, and improving writing skills. Students will explore different genres of literature, develop paragraph writing techniques, and work on grammar to strengthen their overall language skills.",
    targetAudience: [
      "Fourth-grade students who are ready to tackle more complex texts and improve their writing skills.",
      "Children who need support with grammar, sentence structure, and organizing their thoughts in writing.",
      "Parents and educators looking to develop critical reading and writing skills for academic growth.",
    ],
    benefits: [
      "It strengthens reading and writing abilities, preparing students for higher-level language arts tasks.",
      "The course engages students with diverse reading materials and activities to foster a deeper understanding of language.",
      "It builds confidence in writing and comprehension, ensuring students are ready for future English challenges.",
    ],
  },
  english_grade_5: {
    id: "english_grade_5",
    subjectId: "english",
    title: "Grade 5",
    description: "Refining communication skills",
    type: "grade",
    ageRange: "9-10",
    duration: "45 min",
    overview:
      "This course focuses on refining reading comprehension, advanced vocabulary, and writing skills. Students will work on analyzing different types of texts, writing essays, and mastering grammar and punctuation, building strong language foundations for middle school.",
    targetAudience: [
      "Fifth-grade students who are ready to enhance their reading, writing, and critical thinking skills.",
      "Children who need additional practice with essay writing, grammar, and understanding complex texts.",
      "Parents and educators looking to prepare students for the demands of middle school English.",
    ],
    benefits: [
      "It develops essential writing and analytical skills needed for success in higher grades.",
      "The course offers engaging, real-world applications of language skills to foster deeper learning.",
      "It builds confidence in reading and writing, helping students communicate effectively in both academic and everyday contexts.",
    ],
  },
  english_grade_6: {
    id: "english_grade_6",
    subjectId: "english",
    title: "Grade 6",
    description: "Preparing for advanced language studies",
    type: "grade",
    ageRange: "10-11",
    duration: "45 min",
    overview:
      "This course focuses on advanced reading comprehension, writing skills, and critical analysis of various texts. Students will work on crafting essays, exploring literary elements, and improving grammar, punctuation, and vocabulary to prepare for more complex middle school English.",
    targetAudience: [
      "Sixth-grade students who are ready to deepen their reading, writing, and analytical skills.",
      "Children who need support with understanding complex texts and developing strong writing techniques.",
      "Parents and educators are looking to build a strong foundation for students as they transition into middle school English.",
    ],
    benefits: [
      "It enhances students' ability to analyse and interpret various texts, fostering critical thinking skills.",
      "The course provides structured practice in writing and grammar, ensuring students are well-prepared for middle school.",
      "It engages students with challenging materials and activities, promoting a deeper love for reading and writing.",
    ],
  },
  english_sat: {
    id: "english_sat",
    subjectId: "english",
    title: "SAT",
    description: "Comprehensive SAT English and Writing preparation",
    type: "competitive",
    overview:
      "This course is designed to help students master the English skills required for the SAT, focusing on reading comprehension, writing, and language usage. Students will explore various reading passages, including literature, history, and science, and learn to analyse and interpret texts effectively. The course also covers grammar, sentence structure, and rhetorical skills, with a strong emphasis on improving writing clarity and coherence. Through targeted practice and strategies, students will build the skills necessary to excel in the SAT English section, boosting their confidence and performance on test day. Personalized feedback and mock tests are included to track progress and refine skills.",
    learningOutcomes: [
      "Master Reading Comprehension: Develop skills to analyze and interpret complex texts, identifying main ideas, themes, and supporting details in a variety of genres, including literature, historical documents, and science-related passages.",
      "Improve Grammar and Syntax: Strengthen knowledge of standard English conventions, focusing on punctuation, sentence structure, verb tense, subject-verb agreement, and effective use of transitions to improve clarity and coherence in writing.",
      "Critical Writing Skills: Enhance the ability to craft well-organized, clear, and persuasive essays with a focus on logical argumentation, evidence support, and strong writing mechanics in response to given prompts.",
      "Expand Vocabulary: Increase understanding and effective use of high-frequency academic vocabulary, with a focus on context clues and word relationships to improve reading and writing performance on the SAT.",
    ],
  },
  english_naplan: {
    id: "english_naplan",
    subjectId: "english",
    title: "NAPLAN",
    description: "Preparation for NAPLAN literacy assessments",
    type: "competitive",
    overview:
      "This course is designed to prepare students for the English component of the NAPLAN test, focusing on key areas such as reading comprehension, writing, grammar, and language conventions. Students will engage with various text types, including narratives, persuasive essays, and informational texts, while developing their ability to analyse and respond critically. The course emphasizes improving spelling, punctuation, and sentence structure to ensure clarity and coherence in writing. Through targeted practice exercises, students will build confidence in their ability to tackle NAPLAN's diverse English tasks. Regular assessments and personalized feedback will help track progress and refine skills for optimal performance on test day.",
    learningOutcomes: [
      "Reading Comprehension Skills: Develop the ability to understand and analyze various text types, including narrative, persuasive, and informative texts, by identifying key ideas, themes, and supporting details.",
      "Writing Proficiency: Strengthen skills in constructing well-organized written responses, including persuasive and narrative essays, focusing on clear expression, logical structure, and appropriate tone.",
      "Grammar and Language Conventions: Enhance knowledge of grammar, punctuation, spelling, and sentence structure to ensure accuracy and clarity in both written and oral communication.",
      "Vocabulary and Word Usage: Improve vocabulary and the ability to use context to infer meanings, enabling more effective communication and better performance in reading and writing tasks.",
    ],
  },
  english_ieo: {
    id: "english_ieo",
    subjectId: "english",
    title: "IEO",
    description: "Advanced English skills for olympiad competitions",
    type: "competitive",
    overview:
      "This course is designed to help students prepare for the International English Olympiad (IEO), focusing on enhancing their English proficiency in areas such as reading comprehension, grammar, vocabulary, and writing. Students will work through a variety of exercises that improve their ability to analyze texts, identify errors, and strengthen their overall language skills. The course also covers the development of critical thinking and language application through creative writing and short-answer questions. With regular practice tests and personalized feedback, students will gain confidence and sharpen their problem-solving abilities for the IEO. This comprehensive preparation ensures that students are well-equipped to excel in the exam.",
    learningOutcomes: [
      "Reading and Comprehension: Develop the ability to critically analyze diverse texts, identifying main ideas, inferences, and underlying themes, and understanding the nuances of both literary and non-literary passages.",
      "Vocabulary and Language Skills: Enhance vocabulary usage through exposure to a variety of word types, idiomatic expressions, and context-based word meaning, improving both reading comprehension and written communication.",
      "Grammar and Language Conventions: Strengthen knowledge of English grammar, including sentence structure, punctuation, and usage, to ensure correct application in both written and spoken forms.",
      "Effective Writing: Build the ability to produce clear, coherent, and logically structured essays and responses across various genres, demonstrating creativity, critical thinking, and adherence to writing conventions.",
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
    overview:
      "This course introduces young learners to the wonders of the natural world through fun, hands-on experiments and engaging lessons. Students will explore basic concepts in biology, physics, and earth sciences, developing curiosity and a foundational understanding of science.",
    targetAudience: [
      "Grade 1 students are eager to learn about the world around them through interactive and enjoyable science lessons.",
      "Young learners interested in developing basic scientific knowledge and inquiry skills.",
      "Parents looking for a structured, age-appropriate science curriculum for their children.",
    ],
    benefits: [
      "Provides a hands-on, interactive approach to learning science that sparks curiosity and creativity.",
      "Focuses on building a strong foundation in essential scientific concepts and critical thinking.",
      "Encourages exploration and learning through simple experiments and real-world examples.",
    ],
  },
  science_grade_2: {
    id: "science_grade_2",
    subjectId: "science",
    title: "Grade 2",
    description: "Exploring the natural world",
    type: "grade",
    ageRange: "6-7",
    duration: "45 min",
    overview:
      "This course builds on Grade 1 concepts by exploring more complex topics in biology, physics, and earth science. Students will engage with interactive activities, experiments, and observations to deepen their understanding of the natural world and its processes.",
    targetAudience: [
      "Grade 2 students who are curious about science and ready to explore more advanced concepts.",
      "Learners eager to develop their scientific inquiry and observation skills through hands-on activities.",
      "Parents seeking an educational and fun way for their children to learn about the environment, living organisms, and simple scientific principles.",
    ],
    benefits: [
      "Expands on basic science concepts with more detailed lessons and activities to foster deeper understanding.",
      "Focuses on hands-on learning and real-world connections to make science fun and engaging.",
      "Encourages critical thinking and problem-solving skills that are essential for future scientific learning.",
    ],
  },
  science_grade_3: {
    id: "science_grade_3",
    subjectId: "science",
    title: "Grade 3",
    description: "Understanding scientific processes",
    type: "grade",
    ageRange: "7-8",
    duration: "45 min",
    overview:
      "This course introduces students to more advanced scientific concepts, including ecosystems, matter, energy, and the human body. Through engaging experiments, observations, and discussions, students will develop a deeper understanding of the natural world and scientific processes.",
    targetAudience: [
      "Grade 3 students with a basic understanding of science, looking to explore more complex topics.",
      "Learners who enjoy hands-on experiments and want to understand how the world works.",
      "Parents seek a structured approach to enhance their child's scientific knowledge and curiosity.",
    ],
    benefits: [
      "Focuses on real-world science applications, helping students connect what they learn to everyday life.",
      "Encourages active learning with fun, interactive activities and experiments.",
      "Strengthens critical thinking and problem-solving skills while building a solid foundation for future science education.",
    ],
  },
  science_grade_4: {
    id: "science_grade_4",
    subjectId: "science",
    title: "Grade 4",
    description: "Investigating physical and life sciences",
    type: "grade",
    ageRange: "8-9",
    duration: "45 min",
    overview:
      "This course explores more detailed scientific topics, including plant and animal life cycles, the solar system, energy, and forces. Students will engage in hands-on activities and experiments to enhance their understanding of these fundamental concepts and foster scientific inquiry.",
    targetAudience: [
      "Grade 4 students ready to explore more advanced scientific topics in biology, physics, and earth science.",
      "Learners who enjoy conducting experiments and discovering how scientific concepts apply to the world around them.",
      "Parents looking for a curriculum that strengthens their child's scientific knowledge and problem-solving abilities.",
    ],
    benefits: [
      "Provides a deeper understanding of core scientific concepts through engaging, hands-on activities.",
      "Encourages critical thinking and curiosity about the natural world and its processes.",
      "Builds a strong foundation for future scientific studies while making learning enjoyable and interactive.",
    ],
  },
  science_grade_5: {
    id: "science_grade_5",
    subjectId: "science",
    title: "Grade 5",
    description: "Advancing scientific inquiry skills",
    type: "grade",
    ageRange: "9-10",
    duration: "45 min",
    overview:
      "This course delves into more complex scientific concepts such as ecosystems, matter, the human body, and the environment. Students will conduct experiments and apply scientific methods to deepen their understanding of the natural world and its interconnections.",
    targetAudience: [
      "Grade 5 students with a solid foundation in science who are ready to explore more intricate topics.",
      "Learners interested in developing critical thinking and applying scientific principles to real-world situations.",
      "Parents looking for an advanced science curriculum to prepare their children for middle school.",
    ],
    benefits: [
      "Covers a broad range of advanced scientific topics with a focus on hands-on learning and inquiry.",
      "Encourages students to think critically and apply the scientific method to solve problems.",
      "Strengthens knowledge and prepares students for more advanced scientific studies in future grades.",
    ],
  },
  science_grade_6: {
    id: "science_grade_6",
    subjectId: "science",
    title: "Grade 6",
    description: "Preparing for advanced scientific studies",
    type: "grade",
    ageRange: "10-11",
    duration: "45 min",
    overview:
      "This course explores advanced scientific topics such as ecosystems, forces, energy, the human body, and earth processes. Through in-depth experiments, critical analysis, and real-world applications, students will develop a strong understanding of scientific concepts and the world around them.",
    targetAudience: [
      "Grade 6 students ready to explore advanced concepts in biology, physics, and earth science.",
      "Learners who are eager to deepen their understanding of scientific principles and the scientific method.",
      "Parents seeking a comprehensive science curriculum that prepares their child for middle school and beyond.",
    ],
    benefits: [
      "Provides a solid foundation in core scientific topics with a focus on experimentation and observation.",
      "Encourages critical thinking, problem-solving, and the practical application of scientific knowledge.",
      "Prepares students for higher-level science learning, ensuring they are well-equipped for future academic challenges.",
    ],
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
    overview:
      "This course introduces young learners to the basics of the Hindi language, focusing on vocabulary, simple sentence structures, and phonetics. It emphasizes building reading, writing, and speaking skills through interactive lessons and activities.",
    targetAudience: [
      "Young learners (Grade 1) starting their Hindi language journey.",
      "Students looking to strengthen foundational Hindi skills in a fun and engaging way.",
      "Parents seeking a structured curriculum for their children to learn Hindi.",
    ],
    benefits: [
      "Easy-to-follow lessons designed to cater to beginners, ensuring a smooth learning experience.",
      "Interactive and enjoyable activities that make language learning fun and memorable.",
      "Builds a strong foundation in Hindi that can be expanded in later grades.",
    ],
  },
  hindi_grade_2: {
    id: "hindi_grade_2",
    subjectId: "hindi",
    title: "Grade 2",
    description: "Developing Hindi reading and writing abilities",
    type: "grade",
    ageRange: "6-7",
    duration: "45 min",
    overview:
      "This course builds on Grade 1 foundations, enhancing vocabulary, sentence structure, and reading comprehension. It introduces students to simple stories, poems, and grammar concepts, further developing their ability to express themselves in Hindi.",
    targetAudience: [
      "Students in Grade 2 who have a basic understanding of Hindi and want to expand their skills.",
      "Young learners aiming to improve their reading, writing, and speaking abilities in Hindi.",
      "Parents who want a structured, progressive learning plan for their children in Hindi.",
    ],
    benefits: [
      "Expands on existing knowledge with more complex vocabulary and sentence structures.",
      "Engaging lessons with stories, poems, and activities that make learning enjoyable.",
      "Strengthens comprehension and grammar skills, building confidence in using Hindi effectively.",
    ],
  },
  hindi_grade_3: {
    id: "hindi_grade_3",
    subjectId: "hindi",
    title: "Grade 3",
    description: "Enhancing Hindi comprehension and expression",
    type: "grade",
    ageRange: "7-8",
    duration: "45 min",
    overview:
      "This course deepens students' understanding of Hindi through more advanced vocabulary, grammar rules, and sentence construction. It introduces short stories, rhymes, and creative writing to further develop reading, writing, and communication skills.",
    targetAudience: [
      "Grade 3 students who have a foundational knowledge of Hindi and want to advance their language skills.",
      "Learners looking to strengthen their Hindi grammar, vocabulary, and expression.",
      "Parents seeking a comprehensive curriculum to help their children become more proficient in Hindi.",
    ],
    benefits: [
      "Builds on previous knowledge with a focus on enhancing grammar and vocabulary.",
      "Encourages creativity through writing exercises, stories, and poems.",
      "Boosts confidence in both written and spoken Hindi, preparing students for higher language proficiency.",
    ],
  },
  hindi_grade_4: {
    id: "hindi_grade_4",
    subjectId: "hindi",
    title: "Grade 4",
    description: "Advancing Hindi language proficiency",
    type: "grade",
    ageRange: "8-9",
    duration: "45 min",
    overview:
      "This course focuses on refining language skills through advanced vocabulary, complex sentence structures, and deeper grammar concepts. Students will engage with stories, essays, and comprehension exercises to strengthen their reading, writing, and speaking abilities.",
    targetAudience: [
      "Grade 4 students looking to expand their understanding of Hindi and improve their writing and speaking skills.",
      "Learners who have a solid foundation in Hindi and are ready to tackle more complex concepts.",
      "Parents seeking an in-depth curriculum to enhance their child's Hindi proficiency.",
    ],
    benefits: [
      "Emphasizes advanced grammar and vocabulary for a deeper understanding of the language.",
      "Provides diverse activities like writing essays and analyzing stories to improve comprehension and expression.",
      "Prepares students for more complex language learning in later grades while reinforcing confidence in Hindi.",
    ],
  },
  hindi_grade_5: {
    id: "hindi_grade_5",
    subjectId: "hindi",
    title: "Grade 5",
    description: "Refining Hindi communication skills",
    type: "grade",
    ageRange: "9-10",
    duration: "45 min",
    overview:
      "This course focuses on mastering advanced grammar, diverse vocabulary, and fluent sentence construction. Through engaging stories, essays, and discussions, students will refine their reading, writing, and speaking skills to become more proficient in Hindi.",
    targetAudience: [
      "Grade 5 students looking to solidify their Hindi language skills and enhance their writing and communication.",
      "Learners who have a strong foundation in Hindi and want to delve into more complex grammatical and literary concepts.",
      "Parents aim to provide their children with a robust and comprehensive Hindi curriculum.",
    ],
    benefits: [
      "Focuses on mastering advanced grammar, which is essential for fluent language use.",
      "Provides a variety of engaging content, such as stories and essays, to improve both comprehension and expression.",
      "Prepares students for higher-level language proficiency, supporting their continued success in Hindi.",
    ],
  },
  hindi_grade_6: {
    id: "hindi_grade_6",
    subjectId: "hindi",
    title: "Grade 6",
    description: "Preparing for advanced Hindi language studies",
    type: "grade",
    ageRange: "10-11",
    duration: "45 min",
    overview:
      "This course focuses on advanced language skills, including complex grammar rules, detailed vocabulary, and literary appreciation. Students will engage with a variety of texts, such as stories, poems, and essays, to strengthen their reading, writing, and analytical abilities in Hindi.",
    targetAudience: [
      "Grade 6 students who are ready to explore more complex Hindi language concepts and improve fluency.",
      "Learners with a strong foundation in Hindi who want to deepen their understanding of grammar, literature, and communication.",
      "Parents looking for an advanced curriculum to challenge their child and enhance their Hindi skills.",
    ],
    benefits: [
      "Strengthens understanding of complex grammar and vocabulary to build advanced proficiency.",
      "Encourages critical thinking and analytical skills through the study of diverse literary texts.",
      "Prepares students for high-level Hindi learning in future grades and enhances their overall language competency.",
    ],
  },
};

export const getCourseData = (courseId: string) => {
  const subject = coursesData[courseId];
  return subject ? subject : null;
};

export const getCourseDataBySubjectId = (subjectId: string): CourseData[] => {
  return Object.values(coursesData).filter(
    (course) => course.subjectId === subjectId
  );
};
