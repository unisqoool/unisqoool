"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CourseData } from "@/lib/data/courses";
import { AuthButtons } from "./auth-buttons";

interface MenuItem {
  href: string;
  label: string;
  courses?: CourseData[];
}

interface MobileMenuProps {
  items: MenuItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (href: string) => {
    setOpenSections((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        asChild
        className="lg:hidden size-12 hover:text-usq-cerulean"
      >
        <Button variant="ghost" size="lg" className="p-2">
          <Menu className="w-full h-full text-usq-blue-black" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] overflow-y-scroll"
      >
        <nav className="flex flex-col space-y-4 mt-8">
          {items.map((item) =>
            item.courses ? (
              <Collapsible
                key={item.href}
                open={openSections.includes(item.href)}
                onOpenChange={() => toggleSection(item.href)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900">
                  <span>{item.label}</span>
                  {openSections.includes(item.href) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 mt-2 space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-usq-red"
                  >
                    Explore All {item.label} Courses
                  </Link>
                  {item.courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`${item.href}/${course.id}`}
                      className="block text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {course.title}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-2">
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <AuthButtons className="w-full my-4" />
            </Button>
            <Button
              asChild
              variant="primary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/#book-trial">Book Free Trial</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
