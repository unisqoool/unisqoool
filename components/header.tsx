import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCourseDataBySubjectId } from "@/lib/data/courses";
import ClientHeader from "./client-header";
import { AuthButtons } from "./auth-buttons";

const menuItems = [
  { href: "/about", label: "About Us" },
  {
    href: "/mathematics",
    label: "Mathematics",
    courses: getCourseDataBySubjectId("mathematics"),
  },
  {
    href: "/coding",
    label: "Coding",
    courses: getCourseDataBySubjectId("coding"),
  },
  {
    href: "/english",
    label: "English",
    courses: getCourseDataBySubjectId("english"),
  },
  {
    href: "/science",
    label: "Science",
    courses: getCourseDataBySubjectId("science"),
  },
  {
    href: "/hindi",
    label: "Hindi",
    courses: getCourseDataBySubjectId("hindi"),
  },
  { href: "/short-courses", label: "Short Courses" },
  { href: "/blog", label: "Blogs" },
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
              width={450}
              height={255}
              className="w-40 lg:w-52"
              priority
            />
          </Link>

          <ClientHeader menuItems={menuItems} />

          <div className="bg-white text-black hidden lg:flex items-center space-x-4">
            <AuthButtons />
            <Button asChild variant="primary">
              <Link href="/#book-trial">Book Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
