"use client";

import type React from "react";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SocialButtonProps {
  provider: string;
  icon: React.ReactNode;
  text: string;
}

export function SocialButton({ provider, icon, text }: SocialButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl: "/dashboard/bookings" });
  };

  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
      <span className="ml-2">{text}</span>
    </Button>
  );
}
