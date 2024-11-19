import TestimonialCarousel from "./testimonial-carousel";

const testimonials = [
  {
    id: 1,
    name: "Priya",
    grade: "Aspiring Software Developer",
    image: "/assets/avatars/Priya.jpg",
    quote:
      "I always struggled with coding, but Unisqoool's hands-on approach and step-by-step guidance changed everything. After completing their interactive Python course, I was able to build my first app. Now, I’ve secured an internship at a tech company! Unisqoool didn’t just teach me how to code, it helped me believe in my potential.",
  },
  {
    id: 2,
    name: "Arjun",
    grade: "High School Student - Math Enthusiast",
    image: "/assets/avatars/Arjun.jpg",
    quote:
      "Math was always my weakest subject until I joined Unisqoool. Their personalized learning plans helped me grasp complex concepts with ease. The interactive lessons and quizzes made learning fun, and my grades improved dramatically. Thanks to Unisqoool, I topped my class and gained confidence in my math skills!",
  },
  {
    id: 3,
    name: "Maria",
    grade: " English Learner",
    image: "/assets/avatars/Maria.jpg",
    quote:
      "As a non-native English speaker, I struggled with fluency. Unisqoool’s immersive approach, which blends grammar lessons with real-world conversations, helped me practice daily. Now, I feel confident speaking English and have even secured a job in customer service. The feedback from instructors was always constructive and encouraging.",
  },
  {
    id: 4,
    name: "Aarav",
    grade: "Engineering Student - Science Mastery",
    image: "/assets/avatars/Arav.jpg",
    quote:
      "Science always seemed like a daunting subject, but Unisqoool made it engaging. The hands-on experiments and interactive simulations brought theory to life, making it easier to understand. I aced my finals and now feel more confident pursuing my engineering degree. Unisqoool helped me not just learn, but love science!",
  },
  {
    id: 5,
    name: "Neha",
    grade: "Business Professional - Hindi Language Learner",
    image: "/assets/avatars/Neha.jpg",
    quote:
      "I’ve always wanted to learn Hindi to connect with my roots and communicate better with my colleagues. Unisqoool’s interactive lessons and cultural insights made learning Hindi so much fun. Within months, I could read, write, and converse fluently in Hindi. It’s been a rewarding experience that opened new doors both professionally and personally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8 mx-auto max-w-screen-lg">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito">
          Success Stories
        </h2>

        <div className="max-w-6xl mx-auto">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
