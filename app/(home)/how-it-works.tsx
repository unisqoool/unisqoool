import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Book a slot",
    description:
      "Secure your preferred time and reserve a spot for a personalized learning session tailored to your needs.",
  },
  {
    number: "2",
    title: "Attend Trial Class",
    description:
      "Experience a free trial session to explore our teaching methods and decide if it's the right fit for you.",
  },
  {
    number: "3",
    title: "Get Custom Plan",
    description:
      "Receive a personalized learning plan designed to match your goals, pace, and preferences for maximum progress.",
  },
  {
    number: "4",
    title: "Regular Classes Begin",
    description:
      "Join our regular classes and embark on your learning journey with expert instructors and a structured curriculum.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center font-nunito text-usq-red">
          How It Works
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start max-w-6xl mx-auto mb-12 gap-8 pt-16 lg:pt-28 lg:pb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col lg:flex-row items-center gap-4 w-full"
            >
              <div className="text-center flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-usq-cerulean text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform translate-x-4" />
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="lg:hidden w-full flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg"
          >
            <Link href="/get-started">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
