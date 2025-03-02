"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
            // `/api/bookings?attendeeEmail=${session.user.email}`
            "/api/bookings?attendeeEmail=rairaianusha@gmail.com"
          );
          const data: BookingsResponse = await response.json();

          if (data.status === "success" && !!data.data) {
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
      <div className="container mx-auto py-8">
        <div className="py-8 text-center">Loading your bookings...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-usq-red">
          Welcome, {userName}!
        </h1>
        <p className="text-muted-foreground text-usq-blue-black">
          A line about learning
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
          defaultValue={"upcoming"}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-8 border-b w-full justify-start rounded-none bg-transparent p-0">
            <TabsTrigger
              value="upcoming"
              className={`rounded-t-lg px-6 py-3 text-sm font-medium ${
                activeTab === "upcoming"
                  ? "border-b-2 border-primary bg-muted"
                  : "border-b border-transparent hover:border-muted-foreground/30"
              }`}
            >
              Upcoming Class
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className={`rounded-t-lg px-6 py-3 text-sm font-medium ${
                activeTab === "past"
                  ? "border-b-2 border-primary bg-muted"
                  : "border-b border-transparent hover:border-muted-foreground/30"
              }`}
            >
              Past
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className={`rounded-t-lg px-6 py-3 text-sm font-medium ${
                activeTab === "cancelled"
                  ? "border-b-2 border-primary bg-muted"
                  : "border-b border-transparent hover:border-muted-foreground/30"
              }`}
            >
              Cancelled
            </TabsTrigger>
          </TabsList>

          <Card>
            <CardContent className="p-6">
              {/* <div className="grid grid-cols-[auto_1fr_1fr_auto_1fr_auto] gap-4 px-4 py-2 font-medium text-muted-foreground">
                  <div>Icon</div>
                  <div>Subject Name</div>
                  <div className="text-center">Course</div>
                  <div className="text-center">Start</div>
                  <div className="text-center">End</div>
                  <div></div>
                </div>
    
                <Separator className="my-2" /> */}

              <TabsContent value="upcoming" className="mt-0 space-y-0">
                {isLoading ? (
                  <div className="py-8 text-center">
                    Loading your upcoming classes...
                  </div>
                ) : upcomingBookings.length > 0 ? (
                  upcomingBookings.map((booking) => (
                    <div key={booking.id}>
                      <BookingCard booking={booking} />
                      <Separator />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center">
                    You don&apos;t have any upcoming classes.
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="mt-0 space-y-0">
                {isLoading ? (
                  <div className="py-8 text-center">
                    Loading your past classes...
                  </div>
                ) : pastBookings.length > 0 ? (
                  pastBookings.map((booking) => (
                    <div key={booking.id}>
                      <BookingCard booking={booking} />
                      <Separator />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center">
                    You don&apos;t have any past classes.
                  </div>
                )}
              </TabsContent>

              <TabsContent value="cancelled" className="mt-0 space-y-0">
                {isLoading ? (
                  <div className="py-8 text-center">
                    Loading your cancelled classes...
                  </div>
                ) : cancelledBookings.length > 0 ? (
                  cancelledBookings.map((booking) => (
                    <div key={booking.id}>
                      <BookingCard booking={booking} />
                      <Separator />
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center">
                    You don&apos;t have any cancelled classes.
                  </div>
                )}
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      )}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => signOut()}
          className="font-nunito mt-4"
        >
          Sign out
        </Button>
      </div>
    </div>
  );
}
