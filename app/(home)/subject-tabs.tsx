"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SubjectData {
  title: string;
  description: string;
  bulletPoints: string[];
  specialCourses: string[];
  grades: string[];
}

interface SubjectTabsProps {
  subjectsData: { [key: string]: SubjectData };
}

export default function SubjectTabs({ subjectsData }: SubjectTabsProps) {
  const [activeTab, setActiveTab] = useState("mathematics");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-6xl mx-auto"
    >
      <TabsList className="w-full flex justify-start mb-8 border-b">
        {Object.keys(subjectsData).map((subject) => (
          <TabsTrigger
            key={subject}
            value={subject}
            className="flex-1 px-4 py-2 text-sm font-medium text-center border-b-2 border-transparent hover:border-gray-300 focus:outline-none"
            style={{
              borderBottomColor:
                activeTab === subject ? "black" : "transparent",
            }}
          >
            {subjectsData[subject].title}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(subjectsData).map(([key, data]) => (
        <TabsContent key={key} value={key}>
          <Card className="border rounded-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold">{data.title}</h3>
                  <p className="text-gray-600">{data.description}</p>
                  <ul className="space-y-2">
                    {data.bulletPoints.map((point, index) => (
                      <li key={index} className="text-gray-600">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {data.specialCourses.map((course, index) => (
                      <Button
                        key={index}
                        variant="default"
                        className="bg-black text-white hover:bg-black/90"
                      >
                        {course}
                      </Button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.grades.map((grade, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="border-2"
                      >
                        {grade}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
