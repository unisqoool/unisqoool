import type { ReactNode } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Dashboard | Unisqoool",
  description: "Manage your classes and bookings",
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login?callbackUrl=/dashboard/bookings");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">{children}</main>
    </div>
  );
}
