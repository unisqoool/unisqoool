"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    // Log the error for debugging
    if (error) {
      console.error("Authentication error:", error);
    }
  }, [error]);

  const getErrorMessage = () => {
    switch (error) {
      case "OAuthSignin":
        return "Error starting the OAuth sign in process.";
      case "OAuthCallback":
        return "Error in the OAuth callback process.";
      case "OAuthCreateAccount":
        return "Error creating a user in the database.";
      case "EmailCreateAccount":
        return "Error creating a user in the database.";
      case "Callback":
        return "Error in the OAuth callback handler.";
      case "OAuthAccountNotLinked":
        return "Email already exists with a different provider.";
      case "EmailSignin":
        return "Error sending the email for sign in.";
      case "CredentialsSignin":
        return "Invalid credentials. Please check your email and password.";
      case "SessionRequired":
        return "You must be signed in to access this page.";
      default:
        return "An unknown error occurred during authentication.";
    }
  };

  return (
    <Suspense>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <CardTitle className="text-xl">Authentication Error</CardTitle>
              </div>
              <CardDescription>
                There was a problem with your authentication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {getErrorMessage()}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/auth/login">Back to Login</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Suspense>
  );
}
