import BookTrialSection from "@/components/book-trial-section";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import HowItWorks from "./how-it-works";
import SubjectsSection from "./subjects-section";
import TestimonialsSection from "./testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <span id="our-subjects">
        <SubjectsSection />
      </span>
      <HowItWorks />
      <span id="book-trial">
        <BookTrialSection />
      </span>
      <TestimonialsSection />
    </>
  );
}
