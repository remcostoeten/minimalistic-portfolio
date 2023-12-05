import React, { useState } from 'react';
import { auth, firestore } from '@/core/(database)/firebase';
import { User, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'sonner';
import { Button, buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { cn, Spinner } from '@nextui-org/react';
import { Icons } from '../icons';

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const createUserDocument = async (user: User, name: string) => {
    await addDoc(
      collection(firestore, 'users'),
      { ...JSON.parse(JSON.stringify(user)), displayName: name }
    );
  };


  const provider = ['google', 'github']

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignIn = async (providerName: string) => {
    let provider;

    if (providerName === 'google') {
      provider = googleProvider;
    } else if (providerName === 'github') {
      provider = githubProvider;
    } else {
      throw new Error(`Unsupported provider: ${providerName}`);
    }

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await createUserDocument(user, signUpForm.name);
      }
      toast.success('Logged in successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        signUpForm.email,
        signUpForm.password
      );

      if (user) {
        await createUserDocument(user, signUpForm.name);
      }

      toast.success('Account created successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className='flex flex-col gap-1'>
          <Input
            name="name"
            placeholder="Name"
            type="name"
            onChange={onChange}
            required
            className="border p-2"
          />

          <Input
            name="email"
            placeholder="Email"
            type="email"
            onChange={onChange}
            required
            className="border p-2"
          />

          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={onChange}
            required
            className="border p-2"
          />

          {
            error && (
              <p className="text-center text-red-500 text-sm">{error}</p>
            )
          }

          <Button
            type="submit"
            variant='white'
            className="mt-2 mb-2 w-full h-9 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </div>



        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }), 'w-full')}
            onClick={() => handleSignIn('google')}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading && provider.includes('github') ? (
              <Spinner />
            ) : (
              <Icons.google className="mx-4 h-4 w-4" />
            )}{" "}
            Continue with Google
          </button>

          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }), 'w-full')}
            onClick={() => handleSignIn('github')}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading && provider.includes('github') ? (
              <Spinner />
            ) : (
              <Icons.github className="mx-4 h-4 w-4" />
            )}{" "}
            Continue with Github
          </button>
        </div>
      </form >
    </>
  );
}
