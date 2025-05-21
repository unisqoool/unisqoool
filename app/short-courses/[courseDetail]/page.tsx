"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Users } from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback } from "react";
import { useSession } from "next-auth/react";
import Script from "next/script";

//TODO need api for this
// This is just a dummy data
const shortCourses = {
  short_course_financial_literacy: {
    id: "short_course_financial_literacy",
    subjectId: "short_course",
    title: "Financial Literacy",
    description:
      "Developing essential financial skills focusing on budgeting, saving, and investing for personal and professional success",
    gradeRange: "6th to 10th",
    pricePerClass: 15,
    totalClasses: 15,
    totalPrice: 225,
    duration: "55 min",
    learningOutcomes: [
      "Understand basic financial concepts and terminology",
      "Create and maintain a personal budget",
      "Learn effective saving and investment strategies",
      "Develop skills for making informed financial decisions",
      "Understand the importance of financial planning",
      "Apply financial knowledge to real-world scenarios"
    ]
  },
  short_course_multiplication_tables: {
    id: "short_course_multiplication_tables",
    subjectId: "short_course",
    title: "Learn Multiplication Tables",
    description:
      "Using engaging methods to help students effectively learn and master multiplication tables for faster and more accurate calculations",
    gradeRange: "1st to 4th",
    pricePerClass: 10,
    totalClasses: 4,
    totalPrice: 40,
    duration: "55 min",
    learningOutcomes: [
      "Master multiplication tables from 1 to 12",
      "Develop quick mental calculation skills",
      "Apply multiplication in real-world problems",
      "Build confidence in mathematical operations",
      "Learn fun and effective memorization techniques"
    ]
  },
  short_course_master_multiplication: {
    id: "short_course_master_multiplication",
    subjectId: "short_course",
    title: "Master Multiplication",
    description:
      "Building speed and accuracy in multiplication through interactive methods to reinforce key concepts for long-term success",
    gradeRange: "3rd to 6th Grade",
    pricePerClass: 12,
    totalClasses: 8,
    totalPrice: 96,
    duration: "55 min",
    learningOutcomes: [
      "Reinforce foundational multiplication skills",
      "Improve speed and accuracy in multiplication",
      "Solve complex multiplication problems with ease",
      "Use interactive tools and strategies",
      "Apply multiplication in practical scenarios"
    ]
  },
  short_course_decode_division: {
    id: "short_course_decode_division",
    subjectId: "short_course",
    title: "Decode Division",
    description:
      "Conquering division by simplifying complex division problems and building confidence through engaging techniques",
    gradeRange: "3rd to 6th Grade",
    pricePerClass: 12,
    totalClasses: 8,
    totalPrice: 96,
    duration: "55 min",
    learningOutcomes: [
      "Understand division concepts and terminology",
      "Break down complex division problems",
      "Relate division to multiplication",
      "Boost confidence through repetitive practice",
      "Apply division in real-life problem-solving"
    ]
  },
  short_course_fight_fractions: {
    id: "short_course_fight_fractions",
    subjectId: "short_course",
    title: "Fight Fractions",
    description:
      "Mastering fractions by simplifying and solving related problems with confidence",
    gradeRange: "3rd to 5th Grade",
    pricePerClass: 14,
    totalClasses: 10,
    totalPrice: 140,
    duration: "55 min",
    learningOutcomes: [
      "Understand fractions and their types",
      "Simplify and compare fractions",
      "Perform operations on fractions",
      "Apply fractions in practical math problems",
      "Visualize fractions using engaging tools"
    ]
  },
  short_course_ace_algebra: {
    id: "short_course_ace_algebra",
    subjectId: "short_course",
    title: "Ace Algebra",
    description:
      "Building a strong foundation in algebraic problem-solving by focusing on key concepts like equations and variables",
    gradeRange: "5th to 8th Grade",
    pricePerClass: 15,
    totalClasses: 15,
    totalPrice: 225,
    duration: "55 min",
    learningOutcomes: [
      "Understand algebraic expressions and equations",
      "Solve linear equations with variables",
      "Learn to simplify and factor expressions",
      "Graph basic algebraic functions",
      "Apply algebra in real-world contexts"
    ]
  },
  short_course_creative_writing: {
    id: "short_course_creative_writing",
    subjectId: "short_course",
    title: "Creative Writing: Turn Imagination into Short Story",
    description:
      "Developing writing skills, story structure, and storytelling techniques to turn imagination into compelling short stories",
    gradeRange: "3rd to 6th",
    pricePerClass: 10,
    totalClasses: 15,
    totalPrice: 150,
    duration: "55 min",
    learningOutcomes: [
      "Create engaging story plots",
      "Develop imaginative characters",
      "Understand story structure (beginning, middle, end)",
      "Use literary devices like dialogue and imagery",
      "Enhance vocabulary and grammar through writing"
    ]
  },
  short_course_command_grammar_1: {
    id: "short_course_command_grammar_1",
    subjectId: "short_course",
    title: "Command Over Grammar",
    description:
      "Enhancing writing and speaking skills by focusing on key grammatical rules and structures for clear communication",
    gradeRange: "1st to 4th Grade",
    pricePerClass: 10,
    totalClasses: 15,
    totalPrice: 150,
    duration: "55 min",
    learningOutcomes: [
      "Identify and use parts of speech correctly",
      "Build grammatically correct sentences",
      "Understand subject-verb agreement",
      "Use punctuation marks properly",
      "Enhance clarity in writing and speaking"
    ]
  },
  short_course_command_grammar_2: {
    id: "short_course_command_grammar_2",
    subjectId: "short_course",
    title: "Command Over Grammar",
    description:
      "Enhancing writing and speaking skills by focusing on key grammatical rules and structures for clear communication",
    gradeRange: "5th to 8th Grade",
    pricePerClass: 12,
    totalClasses: 15,
    totalPrice: 180,
    duration: "55 min",
    learningOutcomes: [
      "Master advanced grammatical concepts",
      "Eliminate common grammatical errors",
      "Improve sentence structure and coherence",
      "Apply grammar rules in essays and reports",
      "Boost verbal and written communication"
    ]
  },
  short_course_learn_to_read_novel: {
    id: "short_course_learn_to_read_novel",
    subjectId: "short_course",
    title: "Learn to Read a Novel",
    description:
      "Developing skills for effective novel comprehension, analysis, and appreciation of literary techniques",
    gradeRange: "1st to 4th",
    pricePerClass: 10,
    totalClasses: 12,
    totalPrice: 120,
    duration: "55 min",
    learningOutcomes: [
      "Improve reading fluency and comprehension",
      "Understand characters, plot, and setting",
      "Identify literary devices like similes and metaphors",
      "Enhance vocabulary and inference skills",
      "Develop love for reading and literature"
    ]
  },
  short_course_storytelling: {
    id: "short_course_storytelling",
    subjectId: "short_course",
    title: "Master the Art of Storytelling via Creative Writing",
    description:
      "Learning character development, plot, and narrative techniques to craft engaging stories that captivate readers",
    gradeRange: "3rd to 6th",
    pricePerClass: 12,
    totalClasses: 10,
    totalPrice: 120,
    duration: "55 min",
    learningOutcomes: [
      "Master narrative structure and plot development",
      "Create compelling characters",
      "Use sensory details to enhance stories",
      "Build suspense and engage readers",
      "Deliver stories effectively through writing or speech"
    ]
  },
  short_course_coding_game: {
    id: "short_course_coding_game",
    subjectId: "short_course",
    title: "Coding Adventure: Create Your Own Short Game",
    description:
      "Learning basic programming concepts and fostering creativity through game development",
    gradeRange: "1st to 4th",
    pricePerClass: 10,
    totalClasses: 10,
    totalPrice: 100,
    duration: "55 min",
    learningOutcomes: [
      "Understand basic coding concepts (loops, events)",
      "Create simple games using block-based coding",
      "Apply logical thinking and sequencing",
      "Encourage creativity in game design",
      "Test and debug simple code"
    ]
  },
  short_course_interactive_greeting_card: {
    id: "short_course_interactive_greeting_card",
    subjectId: "short_course",
    title: "Create an Interactive Holiday Greeting Card",
    description:
      "Teaching basic programming and design skills to create personalized, engaging digital greeting cards",
    gradeRange: "1st to 4th",
    pricePerClass: 10,
    totalClasses: 10,
    totalPrice: 100,
    duration: "55 min",
    learningOutcomes: [
      "Design personalized greeting cards",
      "Learn basic programming for interactivity",
      "Understand animation and transitions",
      "Incorporate text, images, and sound",
      "Build confidence in creative digital expression"
    ]
  }
};
export default function ShortCourseDetails() {
  const { courseDetail: id } = useParams();
  const courseId = Array.isArray(id) ? id[0] : id;
  const course = shortCourses[courseId as keyof typeof shortCourses];
  const { data: session } = useSession();

  const handleEnroll = useCallback(async () => {
    // 1. create order on server
    const res = await fetch("/api/razorpay/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: course.totalPrice,
        receipt: course.id,
        currency: "USD",
      }),
    });
    const { order } = await res.json();

    // 2. configure checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // loaded from env
      amount: order.amount,
      currency: order.currency,
      name: "UNisqoool",
      description: course.id,
      order_id: order.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      handler: (response: any) => {
        // on success: redirect or show confirmation
        window.location.href = `/payment-success?order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}`;
      },
      prefill: {
        // only spread in these props when they exist:
        ...(session?.user?.email && session?.user?.name
          ? {
              email: session.user.email,
              name: session.user.name,
            }
          : {}),
      },
      theme: { color: "#ef7167" },
    };

    // 3. open Razorpay checkout
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  }, [course, session]);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="min-h-screen bg-white">
        <Breadcrumbs
          items={[
            { label: "Short Courses", href: "/short-courses" },
            { label: course.title, href: `/short-courses/${course.id}` },
          ]}
        />

        {/* Hero Section */}
        <div className="bg-usq-faded-peach py-12 md:ps-8">
          <div className="container mx-auto md:px-4 text-center lg:text-start lg:px-0">
            <h1 className="text-5xl lg:text-6xl text-usq-red font-bold mb-6 font-podkova">
              {course.title}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {course.gradeRange && (
                <div className="inline-flex items-center bg-usq-peach/40 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Grades: {course.gradeRange}</span>
                </div>
              )}
              {course.duration && (
                <div className="inline-flex items-center bg-usq-peach/40 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-12 py-12">
          {/* Course Overview */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-4 font-nunito">Course Overview</h2>
            <p className="text-usq-blue-black/80 lg:text-xl">{course.description}</p>
          </section>

          {/* Learning Outcomes */}
          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <section className="flex flex-col lg:justify-center lg:items-center rounded-lg p-8 lg:px-8 lg:pb-16 bg-usq-sky/40 mb-12">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:my-8 text-usq-teal">
                Learning Outcomes
              </h2>
              <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="lg:text-xl flex items-start gap-2">
                    <Check className="size-6 text-usq-red mt-1 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pricing and Enrollment */}
          <Card className="border-2 border-usq-peach rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-start">
                  <h3 className="text-2xl font-bold mb-2">Course Pricing</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      ${course.pricePerClass} per class × {course.totalClasses} classes
                    </p>
                    <p className="text-2xl font-bold text-usq-red">
                      Total: ${course.totalPrice}
                    </p>
                  </div>
                </div>
                <Button onClick={handleEnroll} variant="primary" size="lg" className="px-8">
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
} 