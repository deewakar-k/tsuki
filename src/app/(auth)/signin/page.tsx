"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { Github } from "lucide-react";
import Image from "next/image";

export default function SignIn() {
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

  const handleGithubSignIn = async () => {
    try {
      await signIn.social({
        provider: "github",
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
          <h1 className="tracking-tight">Sign in</h1>
          <p className="text-sm text-muted-foreground">to continue to tsuki</p>
        </div>
        <div className="space-y-4">
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
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={handleGithubSignIn}
          >
            <Github className="mr-2" />
            Continue with Github
          </Button>
        </div>
      </div>
    </main>
  );
}
