import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import HowItWorks from "./how-it-works";
import SubjectsSection from "./subjects-section";
import BookTrialSection from "../../components/book-trial-section";
import TestimonialsSection from "./testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <HowItWorks />
      <BookTrialSection />
      <TestimonialsSection />
    </>
  );
}
