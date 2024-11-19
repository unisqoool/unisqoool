import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-nunito">
          Let&apos;s Get Started
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Get started with your personalised learning experience now.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="/book-trial">Book Your Free Trial</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-dark border-white text-white hover:bg-white/10"
          >
            <Link href="/curriculum">Explore Curriculum</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
