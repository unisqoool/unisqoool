"use client";

import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface IProps {
  subject?: string;
  course?: string;
}

const subjects = ["mathematics", "coding", "english", "science", "hindi"];

export default function CalBooking({
  subject: initialSubject,
  course,
}: IProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(
    initialSubject
  );
  const [showSubjectSelect, setShowSubjectSelect] = useState(!initialSubject);

  const calLink = selectedSubject
    ? `unisqoool/${selectedSubject}${course ? `?course=${course}` : ""}`
    : "";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "trial-class-unisqool" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0081a7" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleBackToSubjects = () => {
    setShowSubjectSelect(true);
  };

  const handleSubjectSelect = (value: string) => {
    setSelectedSubject(value);
    setShowSubjectSelect(false);
  };

  const renderSubjectSelect = () => (
    <div className="flex justify-center mb-6">
      <div className="w-full max-w-xs">
        <Select onValueChange={handleSubjectSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  if (showSubjectSelect) {
    return renderSubjectSelect();
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {!initialSubject && (
        <Button
          variant="ghost"
          size="sm"
          className="text-usq-blue-black hover:text-usq-cerulean mb-4"
          onClick={handleBackToSubjects}
        >
          <ChevronLeft className="size-6 me-auto" />
          Back to all subjects
        </Button>
      )}
      <Cal
        namespace="trial-class-unisqool"
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
