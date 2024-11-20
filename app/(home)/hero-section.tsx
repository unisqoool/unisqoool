import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSVG from "@/public/assets/person-studying-online.svg";

export default function HeroSection() {
  return (
    <section className="py-12 px-4 md:py-16 md:px-8 lg:py-20 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="space-y-6 text-center lg:text-left p-0 lg:ps-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-nunito leading-tight text-usq-blue-black">
                  Learn Without Limits, Achieve Beyond Boundaries
                </h1>

                <p className="text-xl md:text-2xl font-mansalva pb-8 text-usq-red">
                  Transforming Education, One Lesson at a Time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    variant="primary"
                    className="text-lg"
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
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/3">
            <Image
              src={HeroSVG}
              alt="Person studying online"
              width={600}
              height={450}
              className="object-fill w-[1350px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
