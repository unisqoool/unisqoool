"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";
import { useCallback } from "react";
import { useSession } from "next-auth/react";

interface ShortCourseData {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  gradeRange?: string;
  pricePerClass: number;
  totalClasses: number;
  totalPrice: number;
  duration?: string;
}

interface ShortCourseCardProps {
  course: ShortCourseData;
}

export function ShortCourseCard({ course }: ShortCourseCardProps) {
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

  return (
    <Card className="border-2 border-usq-peach rounded-lg overflow-hidden py-4">
      <CardContent className="p-6 text-center md:text-start">
        <h3 className="text-3xl font-bold mb-4 font-podkova text-usq-red">
          {course.title}
        </h3>

        <div className="flex flex-col justify-center md:justify-start items-center gap-2 mb-6">
          {course.gradeRange && (
            <div className="flex w-full justify-center md:justify-start items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>Grades: {course.gradeRange}</span>
            </div>
          )}
          {course.duration && (
            <div className="flex w-full justify-center md:justify-start items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
          )}
        </div>

        <p className="text-gray-500 mb-6 font-geist-sans min-h-[60px]">
          {course.description}
        </p>

        {/* desktop: price + classes + button inline */}
        <div className="hidden md:flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>${course.pricePerClass} per class</span>
            <span>·</span>
            <span>Total {course.totalClasses} classes</span>
          </div>
          <Button onClick={handleEnroll} variant="primary" className="px-8">
            Enroll Now
          </Button>
        </div>

        {/* mobile: stacked & centered */}
        <div className="flex md:hidden flex-col items-center gap-2 mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>${course.pricePerClass} per class</span>
            <span>·</span>
            <span>Total {course.totalClasses} classes</span>
          </div>
          <Button onClick={handleEnroll} variant="primary" className="px-8">
            Enroll Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
