import type { Booking } from "@/lib/types/booking";
import { formatDate, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  FileText,
  FlaskConical,
  Globe,
  MoreVertical,
} from "lucide-react";
import { BiLogoZoom } from "react-icons/bi";
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
    const lower = subject.toLowerCase();
    if (lower === "mathematics") return <BookOpen className="h-6 w-6" />;
    if (lower === "coding") return <Code className="h-6 w-6" />;
    if (lower === "english") return <FileText className="h-6 w-6" />;
    if (lower === "science") return <FlaskConical className="h-6 w-6" />;
    if (lower === "hindi") return <Globe className="h-6 w-6" />;
    return <BookOpen className="h-6 w-6" />;
  };

  return (
    <div className="p-4 border rounded-md shadow-sm hover:shadow transition-shadow">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Subject & Course Info */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md border">
            {getSubjectIcon(subjectName)}
          </div>
          <div>
            <h3 className="text-lg font-medium">{subjectName}</h3>
            <p className="text-sm text-muted-foreground">{course}</p>
          </div>
        </div>
        {/* Schedule Details */}
        <div className="flex flex-col sm:flex-row sm:justify-around text-center">
          {isSameDay ? (
            <div className="flex-1">
              <p className="text-sm">{startDate}</p>
              <p className="text-sm">
                {startTime} - {endTime}
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1">
                <p className="text-sm font-medium">Start</p>
                <p className="text-sm">{startDate}</p>
                <p className="text-sm">{startTime}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">End</p>
                <p className="text-sm">{endDate}</p>
                <p className="text-sm">{endTime}</p>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {booking.status === "cancelled" ? (
            <Button variant="ghost" disabled>
              Cancelled
            </Button>
          ) : (
            <Button asChild variant="outline" className="rounded-full">
              <a
                href={booking.meetingUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <BiLogoZoom className="h-4 w-4 text-[#0B5CFF]" />
                Join
                <span className="sr-only">Join Class</span>
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
              {booking.status !== "cancelled" ? (
                <DropdownMenuItem>
                  <a
                    href={`https://app.cal.com/booking/${booking.uid}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Make Changes
                  </a>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  <a
                    href={`https://app.cal.com/booking/${booking.uid}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View Details
                  </a>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
