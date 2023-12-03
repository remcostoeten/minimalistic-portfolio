'use client';
import { auth } from "@/core/(database)/firebase";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from 'react';
import Logo from "@/components/core/Logo";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import UserAuthForm from "@/components/user/user-auth-form";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { pageTransition } from "@/core/utillities/animations";
import EmailPasswordForm from "@/components/user/EmailPasswordForm";

export default function Signin() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  auth.onAuthStateChanged((user) => {
    if (user) {
      router.push('/dashboard');
    }
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.main initial="hidden"
        animate="show"
        exit="exit"
        variants={pageTransition}
        className="flex h-screen w-screen flex-col items-center justify-center">
        <Link href='/' className='absolute top-10 left-10 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
          <Icons.back className="mr-2 h-4 w-4" />
          Back
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center items-center">
            <Logo />
            <p className="inter text-2xl font-semibold tracking-tight">Welcome back</p>
            <div className="text-sm text-muted-foreground">
              Enter your email to sign in
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href='/signup' className="hover:text-brand underline underline-offset-4">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </m.main>
    </LazyMotion>
  );
            <Link href='/signup' className="hover:text-brand underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </div>
      </m.main>
    </LazyMotion>);
}


