import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="space-y-6 text-center lg:text-left p-0">
              <p className="text-lg md:text-xl text-gray-600 uppercase tracking-wide">
                YOUR TAG LINE
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                A big heading that talks about your vision and/or mission
              </h1>

              <p className="text-xl md:text-2xl text-gray-600">
                A sub-heading that follows the heading
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 text-lg"
                >
                  <Link href="/book-trial">Book Your Free Trial</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 text-lg"
                >
                  <Link href="/curriculum">Explore Curriculum</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
              <Image
                src="/assets/happy-students.avif"
                alt="Decorative mountain peaks"
                fill
                className="object-contain"
                priority
              />

              {/* Badge */}
              <Badge
                variant="default"
                className="absolute -top-6 -right-6 md:top-0 md:-right-12 bg-black text-white rounded-full p-6 transform rotate-12"
              >
                <p className="text-sm font-medium leading-tight text-center">
                  500+
                  <br />
                  Happy
                  <br />
                  Students
                </p>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
