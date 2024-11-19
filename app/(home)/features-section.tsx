import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const features = [
  {
    title: "Reason #1",
    description: "A description of the reason, may be about the same length",
  },
  {
    title: "Reason #2",
    description: "A description of the reason, may be about the same length",
  },
  {
    title: "Reason #3",
    description: "A description of the reason, may be about the same length",
  },
  {
    title: "Reason #4",
    description: "A description of the reason, may be about the same length",
  },
  {
    title: "Reason #5",
    description: "A description of the reason, may be about the same length",
  },
  {
    title: "Reason #6",
    description: "A description of the reason, may be about the same length",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose UNisqoool?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 mb-4">
                  <Star className="w-full h-full stroke-3 text-yellow-500 fill-yellow-500" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
