import Link from "next/link";
import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Login | Unisqoool",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto mb-40 flex w-full flex-col justify-center sm:w-[350px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-usq-red">Sign In</CardTitle>
            <CardDescription>Login with your email address</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-usq-cerulean hover:text-usq-red"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
