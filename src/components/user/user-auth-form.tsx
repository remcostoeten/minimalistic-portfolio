"use client"

import * as React from "react"
import { Spinnaker } from "next/font/google"
import { useRouter } from "next/navigation"
import signInWithProvider from "@/core/(database)/firebase"
import { cn } from "@/core/utillities/utils"
import { Spinner } from "@nextui-org/react"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface UserAuthFormProps {
  className?: string
}

export default function UserAuthForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [provider, setProvider] = React.useState<"google" | "github" | null>(
    null
  )

  const handleSignIn = React.useCallback(
    async (provider: "google" | "github") => {
      setIsLoading(true)
      setProvider(provider)

      const { default: signInWithProvider } = await import(
        "@/core/(database)/firebase"
      )

      signInWithProvider(provider, router)
    },
    [router]
  )

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        onClick={() => handleSignIn("google")}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading && provider === "google" ? (
          <Spinner />
        ) : (
          <Icons.google className="mx-4 h-4 w-4" />
        )}{" "}
        Continue with Google
      </button>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        onClick={() => handleSignIn("github")}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading && provider === "github" ? (
          <Spinner />
        ) : (
          <Icons.github className="mx-2 h-4 w-4" />
        )}{" "}
        Continue with Github
      </button>
    </div>
  )
}
