'use client';
import { auth, firestore } from '@/core/(database)/firebase';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'sonner';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function RegisterForm() {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const [
    createUserWithEmailAndPasswordHook,
    userCredentials,
    loading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);

  // Firebase logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error) setError('');

    const { password, confirmPassword, email } = signUpForm;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPasswordHook(email, password);
  };
  const createUserDocument = async (user: User) => {
    await addDoc(
      collection(firestore, 'users'),
      JSON.parse(JSON.stringify(user))
    );
  };


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (userCredentials) {
      createUserDocument(userCredentials.user);
      toast.success('Account created successfully!');
    }
  }, [userCredentials]);

  useEffect(() => {
    if (createUserError) {
      toast.error('An error occurred during sign up.');
    }
  }, [createUserError]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-2">
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
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
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
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign Up"}
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