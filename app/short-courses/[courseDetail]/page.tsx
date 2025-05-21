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
const shortCourses = {
  short_course_financial_literacy: {
    id: "short_course_financial_literacy",
    subjectId: "short_course",
    title: "Financial Literacy",
    description: "Developing essential financial skills focusing on budgeting, saving, and investing for personal and professional success",
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
    description: "Using engaging methods to help students effectively learn and master multiplication tables for faster and more accurate calculations",
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