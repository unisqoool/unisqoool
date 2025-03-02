"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/auth/login");
    return null;
  } else {
    router.push("/dashboard/bookings");
    return null;
  }

  // return (
  //   <div className="p-8">
  //     <h1 className="text-4xl font-bold font-nunito mb-4 text-usq-red">
  //       Welcome to your Dashboard, {session.user?.name || "User"}!
  //     </h1>
  //     <>
  //       <Button asChild variant="primary" className="font-nunito mt-4 mx-4">
  //         <Link href="/dashboard/bookings">View Bookings</Link>
  //       </Button>
  //       <Button
  //         variant="outline"
  //         onClick={() => signOut()}
  //         className="font-nunito mt-4"
  //       >
  //         Sign out
  //       </Button>
  //     </>
  //   </div>
  // );
}
