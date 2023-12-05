'use client'
import * as React from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "@nextui-org/react";
import Spinner from "../loaders/Spinners";

const LoadingSpinner = () => (
  <Spinner variant="mini" />
);

export default function EmailPasswordForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const auth =
      getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-2 " onSubmit={handleSignIn}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <Button className="bg-white text-black" variant='solid' type="submit" disabled={isLoading}>
        {isLoading ? <LoadingSpinner /> : "Sign in"}
      </Button>
    </form>
  );
}