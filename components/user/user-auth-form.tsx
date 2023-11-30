"use client"

import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/core/utillities/utils";
import { useRouter } from "next/navigation";
import signInWithProvider from "@/core/(database)/firebase";

// Memoized Icons
const MemoizedGoogleIcon = React.memo(Icons.google);
const MemoizedGithubIcon = React.memo(Icons.github);

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

// Loading Spinner Component
const LoadingSpinner = () => (
  <Icons.spinner className="mx-4 h-4 w-4 animate-spin" />
);

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [provider, setProvider] = React.useState<"google" | "github" | null>(null);
  const router = useRouter();

  // Dynamic import for signInWithProvider
  const handleSignIn = React.useCallback(async (provider: "google" | "github") => {
    setIsLoading(true);
    setProvider(provider);

    // Dynamically import the signInWithProvider function
    const { default: signInWithProvider } = await import("@/core/(database)/firebase");

    signInWithProvider(provider, router);
  }, [router]);

  return (
    <div className={cn("auth-form-grid", className)} {...props}>

      <div className='flex flex-col gap-2 items-center justify-center'>   <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => handleSignIn('google')}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading && provider === 'google' ? (
          <LoadingSpinner />
        ) : (
          <MemoizedGoogleIcon className="mx-4 h-4 w-4" />
        )}{" "}
        Continue with Google
      </button>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => handleSignIn('github')}
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading && provider === 'github' ? (
            <LoadingSpinner />
          ) : (
            <MemoizedGithubIcon className="mx-2 h-4 w-4" />
          )}{" "}
          Continue with Github
        </button>
      </div>
    </div>
  );
}
