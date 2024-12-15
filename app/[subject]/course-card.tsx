import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Users } from "lucide-react";
import { CourseData } from "@/lib/data/courses";

interface CourseCardProps {
  course: CourseData;
  subjectId: string;
}

export function CourseCard({ course, subjectId }: CourseCardProps) {
  return (
    <Card className="border-2 border-usq-peach rounded-lg overflow-hidden py-4">
      <CardContent className="p-6 text-center">
        <h3 className="text-3xl font-bold mb-2 font-podkova text-usq-red">{course.title}</h3>
        <p className="text-gray-500 mb-2 font-geist-sans">
          {course.description}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-6">
          {/* {!!course.duration && (
            <div className="flex w-full justify-center items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{course.duration} classes</span>
            </div>
          )} */}
          {!!course.ageRange && (
            <div className="flex w-full justify-center items-center gap-2 text-sm text-gray-500 -mt-2">
              <Users className="w-4 h-4" />
              <span>Age: {course.ageRange}</span>
            </div>
          )}
          {/* {!!course.features &&
            course.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="text-sm text-gray-500">{feature}</span>
              </div>
            ))} */}
        </div>
        <Button asChild variant="primary" className="px-8">
          <Link href={`/${subjectId}/${course.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
