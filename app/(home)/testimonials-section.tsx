import TestimonialCarousel from "./testimonial-carousel";

const testimonials = [
  {
    id: 1,
    name: "Harry Potter",
    grade: "10, Student",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "A testimonial that sounds very inspirational, and tells prospective students why they should pay for your courses, it can be long, but not too long as people don't read them. Make them medium-sized yet impactful.",
  },
  {
    id: 2,
    name: "Hermione Granger",
    grade: "12, Student",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The personalized attention and innovative teaching methods have significantly improved my understanding of complex topics. The teachers are always ready to help and make learning enjoyable.",
  },
  {
    id: 3,
    name: "Ron Weasley",
    grade: "11, Student",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "What I love most about UNisqoool is how they make difficult concepts easy to understand. The interactive sessions and practice materials have helped me improve my grades dramatically.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8 mx-auto max-w-screen-lg">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Success Stories
        </h2>

        <div className="max-w-6xl mx-auto">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
