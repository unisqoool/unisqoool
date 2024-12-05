import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { CourseData } from "@/lib/data/courses";

interface CourseCardProps {
  course: CourseData;
  subjectId: string;
}

export function CourseCard({ course, subjectId }: CourseCardProps) {
  return (
    <Card className="border rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        {course.type === "grade" ? (
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration} classes</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Age: {course.ageRange}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 mb-6">
            {course.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-gray-500">{feature}</span>
              </div>
            ))}
          </div>
        )}
        <Button asChild variant="secondary" className="w-full">
          <Link href={`/${subjectId}/${course.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
