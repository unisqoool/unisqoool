import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Clock, Users } from "lucide-react";

interface ShortCourseData {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  gradeRange?: string;
  duration?: string;
}

interface ShortCourseCardProps {
  course: ShortCourseData;
}

export function ShortCourseCard({ course }: ShortCourseCardProps) {
  return (
    <Card className="border-2 border-usq-peach rounded-lg overflow-hidden py-4">
      <CardContent className="p-6 text-center md:text-start">
        <h3 className="text-3xl font-bold mb-4 font-podkova text-usq-red">
          {course.title}
        </h3>
        <div className="flex flex-col justify-center md:justify-start items-center gap-2 mb-6">
          {course.gradeRange && (
            <div className="flex w-full justify-center md:justify-start items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>Grades: {course.gradeRange}</span>
            </div>
          )}
          {course.duration && (
            <div className="flex w-full justify-center md:justify-start items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          )}
        </div>
        <p className="text-gray-500 mb-6 font-geist-sans min-h-[60px]">
          {course.description}
        </p>
        <Button asChild variant="primary" className="px-8">
          <Link href="#">Enroll Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
