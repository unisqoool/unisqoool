"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/auth/login");
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold font-nunito mb-4 text-usq-red">
        Welcome to your Dashboard
      </h1>
      <p className="text-usq-blue-black font-nunito">
        Hello, {session.user?.name || "User"}!
      </p>
      <Button variant="outline" onClick={() => signOut()} className="font-nunito mt-4">
        Sign out
      </Button>
    </div>
  );
}
