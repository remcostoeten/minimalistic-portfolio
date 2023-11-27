"use client"

import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/core/utillities/utils"
import { useRouter } from "next/navigation"
import signInWithProvider from "@/core/(database)/firebase"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [provider, setProvider] = React.useState<"google" | "github" | null>(null)
  const router = useRouter();

  const handleSignIn = React.useCallback((provider: "google" | "github") => {
    setIsLoading(true);
    setProvider(provider);
    signInWithProvider(provider, router);
  }, [router]);

  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => handleSignIn('google')}
        disabled={isLoading}
      >
        {isLoading && provider === 'google' ? (
          <Icons.spinner className="mx-4 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mx-4 h-4 w-4" />
        )}{" "}
        Continue with Google
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => handleSignIn('github')}
        disabled={isLoading}
      >
        {isLoading && provider === 'github' ? (
          <Icons.spinner className="mx-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.github className="mx-2 h-4 w-4" />
        )}{" "}
        Continue with Github
      </button>
    </div>
  )
}