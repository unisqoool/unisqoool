import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Route,
  Lightbulb,
  Clock,
  GraduationCap,
  HeadphonesIcon,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Personalized Learning Paths",
    description:
      "Tailored learning experiences to match individual needs, helping students progress at their own pace.",
    icon: Route,
    iconClassName: "text-blue-500",
  },
  {
    title: "Interactive & Engaging Content",
    description:
      "Dynamic lessons with multimedia, quizzes, and real-time feedback to keep learners engaged and motivated.",
    icon: Lightbulb,
    iconClassName: "text-yellow-500",
  },
  {
    title: "24/7 Accessibility",
    description:
      "Learn anytime, anywhere—Unisqoool's flexible platform fits into your schedule.",
    icon: Clock,
    iconClassName: "text-green-500",
  },
  {
    title: "Expert-Led Courses",
    description:
      "Learn from qualified educators and industry experts, ensuring high-quality instruction and real-world relevance.",
    icon: GraduationCap,
    iconClassName: "text-red-500",
  },
  {
    title: "Comprehensive Support",
    description:
      "Get help whenever you need it with our dedicated customer and academic support teams.",
    icon: HeadphonesIcon,
    iconClassName: "text-purple-500",
  },
  {
    title: "Community Support",
    description:
      "Join a vibrant community of learners and educators, offering collaboration, peer support, and networking opportunities.",
    icon: Users,
    iconClassName: "text-indigo-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-usq-faded-peach">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito text-usq-red">
            Why Choose UNisqoool?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-none text-center cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4">
                    <IconComponent
                      className={`w-full h-full stroke-2 ${feature.iconClassName}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold font-podkova">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
