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
    <header className="border-b lg:px-8 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex justify-center items-center h-[16px]">
            <Image src="/assets/logo.png" alt="Logo" width={150} height={85} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="bg-white text-black hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-2">
              Contact Us
            </Button>
            <Button className="bg-black text-white hover:bg-black/90">
              Book Free Trial
            </Button>
          </div>

          <MobileMenu items={menuItems} />
        </div>
      </div>
    </header>
  );
}
