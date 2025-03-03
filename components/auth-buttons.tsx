"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function AuthButtons({ ...props }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Button variant="ghost" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    );
  }

  if (session) {
    return (
      <Button
        asChild
        variant="secondary"
        className={props.className}
        onClick={props.onClick}
      >
        <Link href="/dashboard/bookings">Dashboard</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant="outline"
      className={props.className}
      onClick={props.onClick}
    >
      <Link href="/auth/login">Login</Link>
    </Button>
  );
}
