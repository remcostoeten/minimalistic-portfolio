'use client';
import { auth, firestore } from '@/core/(database)/firebase';
import { User, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import React from 'react';

export default function RegisterForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
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
      <Input
        name="name"
        placeholder="Name"
        type="name"
        onChange={onChange}
        required
        className="border p-2"
      />
      {error && (
        <p className="text-center text-red-500 text-sm">
          {error}
        </p>
      )}
      <Button variant='outline'
        type="submit"
        className="mt-2 mb-2 w-full h-9 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Sign Up"}
      </Button>
      <div className="flex justify-center text-sm">
        <p className="mr-1">Already a redditor?</p>
        <p className="text-blue-500 font-bold cursor-pointer">
          Log In
        </p>
      </div>
    </form>
  );
}