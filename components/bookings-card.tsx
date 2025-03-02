import type { Booking } from "@/lib/types/booking";
import { formatDate, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen, Code } from "lucide-react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const subjectName =
    booking.eventType.slug.charAt(0).toUpperCase() +
    booking.eventType.slug.slice(1);
  const course = booking.bookingFieldsResponses.course;
  const startDate = formatDate(booking.start);
  const startTime = formatTime(booking.start);
  const endDate = formatDate(booking.end);
  const endTime = formatTime(booking.end);

  const isSameDay = startDate === endDate;

  const getSubjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "mathematics":
        return <BookOpen className="h-6 w-6" />;
      case "coding":
        return <Code className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md border">
            {getSubjectIcon(subjectName)}
          </div>
          <div>
            <h3 className="text-lg font-medium">{subjectName}</h3>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium">{course}</p>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium">{startDate}</p>
          <p className="text-sm text-muted-foreground">{startTime}</p>
        </div>

        <div className="text-center flex items-center">
          <span className="mx-2">—</span>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium">{isSameDay ? "" : endDate}</p>
          <p className="text-sm text-muted-foreground">{endTime}</p>
        </div>

        <div className="flex items-center space-x-2">
          {booking.status !== "cancelled" && (
            <Button asChild variant="outline" className="rounded-full">
              <a
                href={booking.meetingUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Join Class
              </a>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              {booking.status !== "cancelled" && (
                <DropdownMenuItem className="text-destructive">
                  Cancel Class
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>Make Changes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
