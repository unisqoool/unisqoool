import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Book a slot",
    description:
      "Small description about this step in no more than three lines at this size",
  },
  {
    number: "2",
    title: "Attend Trial Class",
    description:
      "Small description about this step in no more than four lines at this size",
  },
  {
    number: "3",
    title: "Get Custom Plan",
    description:
      "Small description about this step in no more than four lines at this size",
  },
  {
    number: "4",
    title: "Regular Classes Begin",
    description:
      "Small description about this step in no more than four lines at this size",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto mb-12 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col md:flex-row items-center gap-4 w-full"
            >
              <div className="text-center flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform translate-x-4" />
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="md:hidden w-full flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-black/90 px-8"
          >
            <Link href="/get-started">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
