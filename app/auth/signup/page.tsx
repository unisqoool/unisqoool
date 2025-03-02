import Link from "next/link";
import type { Metadata } from "next";
import { SignUpForm } from "@/components/auth/signup-form";
import { SocialButton } from "@/components/auth/social-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: "Sign Up | Unisqoool",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto mb-24 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-usq-red">Sign Up</CardTitle>
            <CardDescription>
              Choose your preferred sign up method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SocialButton
              provider="google"
              icon={<FcGoogle className="h-5 w-5" />}
              text="Sign up with Google"
            />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <SignUpForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
