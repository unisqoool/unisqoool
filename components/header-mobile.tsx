"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MenuItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  items: MenuItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Button>
          <Button
            className="bg-black text-white hover:bg-black/90 w-full"
            onClick={() => setIsOpen(false)}
          >
            Book Free Trial
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
