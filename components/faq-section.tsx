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
      "Our standard class sessions are 60 minutes long, designed to maintain optimal attention and learning effectiveness.",
  },
  {
    question: "What subjects do you offer?",
    answer:
      "We offer a comprehensive range of subjects including Mathematics, Science, English, Hindi, and Coding, catering to different academic levels.",
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
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <FAQList faqs={faqs} initialCount={3} />
      </div>
    </section>
  );
}
