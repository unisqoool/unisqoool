import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "./header-mobile";
import Image from "next/image";

const menuItems = [
  { href: "/about", label: "About Us" },
  { href: "/mathematics", label: "Mathematics" },
  { href: "/coding", label: "Coding" },
  { href: "/english", label: "English" },
  { href: "/science", label: "Science" },
  { href: "/hindi", label: "Hindi" },
];

export default function Header() {
  return (
    <header className="border-b lg:px-8 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex justify-center items-center h-[16px]">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={150}
              height={85}
              className="w-40 lg:w-52"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-usq-blue-black hover:text-usq-cerulean"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="bg-white text-black hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-2">
              Contact Us
            </Button>
            <Button variant="primary">
              Book Free Trial
            </Button>
          </div>

          <MobileMenu items={menuItems} />
        </div>
      </div>
    </header>
  );
}
