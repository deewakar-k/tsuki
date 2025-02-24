"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";

export default function SignUp() {
  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-left font-medium">
          <h1 className="tracking-tight">Sign up</h1>
          <p className="text-sm text-muted-foreground">to continue to tsuki</p>
        </div>
        <div className="space-y-6">
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleGoogleSignIn}
          >
            <Image
              src="/svg/google.svg"
              alt=""
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </Button>
          <hr />
          <div className="space-y-4">
            <Input
              startIcon={Mail}
              type="email"
              placeholder="Email"
              required
              className="pl-10 text-left"
            />
            <Input
              startIcon={Lock}
              type="password"
              placeholder="Password"
              required
              className="pl-10 text-left"
            />
          </div>
          <Button type="submit" className="w-full ">
            Create account
          </Button>
        </div>
      </div>
    </main>
  );
}
