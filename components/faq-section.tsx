import FAQList from "./faq-list";

const faqs = [
  {
    question: "What is the class schedule usually like?",
    answer:
      "Classes are flexible and can be scheduled to fit your needs. We offer sessions 7 days a week, with various time slots available.",
  },
  {
    question: "How long are the class sessions?",
    answer:
      "Our standard class sessions are 55 minutes long, designed to maintain optimal attention and learning effectiveness.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "We offer a comprehensive range of courses across various subjects, including Mathematics, Coding, Science, English, Hindi, and more. We provide courses for all age groups and learning levels, from beginners to advanced learners.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Yes! We offer trial sessions for many of our courses. You can attend a free trial to get a feel for the course content, teaching methods, and platform before making a commitment.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Our classes are conducted online through interactive lessons, live sessions, and recorded content that you can access anytime. We use a mix of multimedia, quizzes, and assignments to keep learning engaging and effective.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes, Unisqoool offers flexible learning options. You can learn at your own pace, revisit lessons, and complete assignments as per your schedule. Some courses also have live sessions and group discussions that you can participate in.",
  },
  {
    question: " Are the courses suitable for beginners?",
    answer:
      "Absolutely! We offer courses for all levels, from beginner to advanced. Whether you’re new to the subject or looking to deepen your knowledge, we provide the right resources and support to help you succeed.",
  },
  {
    question: "How qualified are your teachers?",
    answer:
      "All our teachers are highly qualified professionals with relevant degrees and extensive teaching experience in their respective subjects.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer:
      "We maintain a low student-teacher ratio, typically 1:1 for personalized attention or small groups of up to 4 students for interactive sessions.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide comprehensive study materials, practice worksheets, and digital resources tailored to each course and student's needs.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white text-black py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito text-usq-red">
          Frequently Asked Questions
        </h2>
        <FAQList faqs={faqs} initialCount={3} />
      </div>
    </section>
  );
}
