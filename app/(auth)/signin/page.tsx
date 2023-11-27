'use client';
import Link from "next/link"

import { UserAuthForm } from "@/components/user/user-auth-form"

import Logo from "@/components/core/Logo"
import { Icons } from "@/components/icons"
import { auth } from "@/core/(database)/firebase"
import { useRouter } from "next/navigation"

export default function Signin() {
  const user = auth.currentUser;
  const router = useRouter();
  if (user) {
    router.push('/dashboard');
    console.log("User is already logged in");
  } else {
    console.log("User is not logged in");
  }

  return (
    <main className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"          
        className='absolute top-10 left-10 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
        <>
          <Icons.back className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center items-center">
          <Logo />
          <p className="inter text-2xl font-semibold tracking-tight">Sign in</p>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="hover:text-brand underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
