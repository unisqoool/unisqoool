"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookingCard } from "@/components/bookings-card";
import type { Booking, BookingsResponse } from "@/lib/types/booking";
import { isUpcoming, isPast } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BookingsPage() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    const fetchBookings = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch(
            `/api/bookings?attendeeEmail=${session.user.email}`
          );
          const data: BookingsResponse = await response.json();

          if (data.status === "success" && data.data) {
            setBookings(data.data);
          }
        } catch (error) {
          console.error("Error fetching bookings:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchBookings();
  }, [session]);

  const upcomingBookings = bookings.filter(
    (booking) => booking.status !== "cancelled" && isUpcoming(booking.start)
  );
  const pastBookings = bookings.filter(
    (booking) => booking.status !== "cancelled" && isPast(booking.start)
  );
  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "cancelled"
  );

  const userName = session?.user?.name?.split(" ")[0] || "Student";

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <div className="py-8 text-center text-usq-blue-black text-xl">
          Loading your bookings...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-usq-red">
          Welcome, {userName}!
        </h1>
        <p className="text-lg text-usq-blue-black">
          This is your bookings dashboard.
        </p>
      </div>

      {!upcomingBookings.length &&
      !pastBookings.length &&
      !cancelledBookings.length &&
      !isLoading ? (
        <div className="py-8 text-center">
          You don&apos;t have any bookings yet.
          <br />
          <Link
            href="/#book-trial"
            className="text-usq-cerulean hover:text-usq-red"
          >
            Book a class now!
          </Link>
        </div>
      ) : (
        <Tabs
          defaultValue="upcoming"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full mb-8 justify-center gap-2 bg-transparent">
            <TabsTrigger
              value="upcoming"
              className={`px-6 py-3 text-lg font-medium rounded-t-md focus:outline-none transition-colors bg-usq-faded-peach hover:bg-usq-peach text-usq-blue-black ${
                activeTab === "upcoming"
                  ? "border-b-2 border-usq-faded-red"
                  : "border-b border-transparent"
              }`}
            >
              Upcoming Classes
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className={`px-6 py-3 text-lg font-medium rounded-t-md focus:outline-none transition-colors bg-usq-faded-peach hover:bg-usq-peach text-usq-blue-black ${
                activeTab === "past"
                  ? "border-b-2 border-usq-faded-red bg-usq-peach"
                  : "border-b border-transparent"
              }`}
            >
              Past Classes
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className={`px-6 py-3 text-lg font-medium rounded-t-md focus:outline-none transition-colors bg-usq-faded-peach hover:bg-usq-peach text-usq-blue-black ${
                activeTab === "cancelled"
                  ? "border-b-2 border-usq-faded-red bg-usq-peach"
                  : "border-b border-transparent"
              }`}
            >
              Cancelled Classes
            </TabsTrigger>
          </TabsList>

          <Card className="shadow-sm max-w-3xl mx-auto">
            <CardContent className="p-6 space-y-6">
              <TabsContent value="upcoming">
                {upcomingBookings.length > 0 ? (
                  upcomingBookings.map((booking) => (
                    <div key={booking.id} className="my-4">
                      <BookingCard booking={booking} />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-usq-blue-black">
                    You don&apos;t have any upcoming classes.
                    <br />
                    <Link
                      href="/#book-trial"
                      className="text-usq-cerulean hover:text-usq-red"
                    >
                      Book a class now!
                    </Link>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past">
                {pastBookings.length > 0 ? (
                  pastBookings.map((booking) => (
                    <div key={booking.id} className="my-4">
                      <BookingCard booking={booking} />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-usq-blue-black">
                    You don&apos;t have any past classes.
                  </div>
                )}
              </TabsContent>

              <TabsContent value="cancelled">
                {cancelledBookings.length > 0 ? (
                  cancelledBookings.map((booking) => (
                    <div key={booking.id} className="my-4">
                      <BookingCard booking={booking} />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-usq-blue-black">
                    You don&apos;t have any cancelled classes.
                  </div>
                )}
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      )}
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          onClick={() => signOut()}
          className="font-nunito"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
