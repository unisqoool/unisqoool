import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const bgStyle = {
    backgroundImage: "url('/assets/cta-bg.png')",
    backgroundSize: "contain",
    baclgroundRepeat: "no-repeat",
  };

  return (
    <section className="bg-usq-teal px-4 py-16 lg:px-16 lg:py-16 lg:text-start lg:me-auto">
      <div
        className="container mx-auto px-4 py-20 w-full text-center rounded-2xl bg-white"
        style={bgStyle}
      >
        <div className="inline-block bg-white py-2">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-nunito text-usq-red bg-white">
            Let&apos;s Get Started
          </h2>

          <p className="text-lg lg:text-xl text-usq-blue-black bg-white mb-8 font-podkova">
            Get started with your personalised learning experience now.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 ">
            <Button asChild size="lg" variant="secondary">
              <Link href="/#book-trial">Book Your Free Trial</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/#our-subjects">Explore Curriculum</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
