"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQ[];
  initialCount?: number;
}

export default function FAQList({ faqs, initialCount = 3 }: FAQListProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, initialCount);

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {displayedFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg px-4"
          >
            <AccordionTrigger className="text-xl font-normal text-left cursor-pointer hover:scale-[1.005] hover:no-underline mx-2">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-usq-blue-black">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {faqs.length > initialCount && (
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            className="px-8 py-2 rounded-full border-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All FAQs"}
          </Button>
        </div>
      )}
    </div>
  );
}
