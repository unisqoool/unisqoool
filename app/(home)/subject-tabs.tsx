"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SubjectData {
  title: string;
  description: string;
  bulletPoints?: string[];
  specialCourses: string[];
  grades?: string[];
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
      className="w-full max-w-screen-lg mx-auto flex flex-col gap-8"
    >
      <TabsList className="flex flex-wrap justify-center bg-transparent gap-2 mb-8">
        {Object.keys(subjectsData).map((subject) => (
          <TabsTrigger
            key={subject}
            value={subject}
            className="bg-usq-faded-peach text-usq-blue-black flex-shrink-0 px-3 py-2 text-lg font-medium text-center border-b-2 border-transparent hover:border-gray-300 hover:bg-usq-peach focus:bg-usq-peach focus:text-usq-red sm:flex-1 focus:outline-none active:bg-red-500 rounded-lg"
            style={{
              borderColor: activeTab === subject ? "#ef7167" : "transparent",
            }}
          >
            {subjectsData[subject].title}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(subjectsData).map(([key, data]) => (
        <TabsContent key={key} value={key}>
          <Card className="border rounded-lg mt-8 lg:mt-0">
            <CardContent className="px-8 py-20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold">{data.title}</h3>
                  <p>{data.description}</p>
                  <ul className="space-y-2">
                    {!!data.bulletPoints &&
                      data.bulletPoints.map((point, index) => (
                        <li key={index} className="text-gray-600">
                          • {point}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {data.specialCourses.map((course, index) => (
                      <Button key={index} variant="primary">
                        {course}
                      </Button>
                    ))}
                  </div>

                  {!!data.grades && data.grades.length > 0 && (
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
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
