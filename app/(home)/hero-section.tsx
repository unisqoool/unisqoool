import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSVG from "@/public/assets/person-studying-online.svg";

export default function HeroSection() {
  return (
    <section className="py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <Card className="bg-transparent border-none shadow-none lg:ms-4">
            <CardContent className="space-y-6 text-center lg:text-left p-0">
              {/* <p className="text-lg md:text-xl text-gray-600 uppercase tracking-wide">
                Personalized education. Online.
              </p> */}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-nunito leading-tight">
                Learn Without Limits, Achieve Beyond Boundaries
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 font-mansalva">
                Transforming Education, One Lesson at a Time.
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
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src={HeroSVG}
                alt="Person studying online"
                width={600}
                height={450}
                className="object-fill w-[1350px]"
                priority
              />

              {/* Badge */}
              {/* <Badge
                variant="default"
                className="absolute -top-6 -right-3 md:top-0 md:-right-12 bg-black text-white rounded-full p-6 transform rotate-12"
              >
                <p className="text-sm font-medium leading-tight text-center">
                  500+
                  <br />
                  Happy
                  <br />
                  Students
                </p>
              </Badge> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
