"use client";

import Input from "@/components/Input";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const login = async () => {
    setIsLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Login in");
      router.push("/dashboard");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setIsLoading(false);
  };

  return (
    <form action="#" method="POST">
      <div className="mb-4">
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          type="password"
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="text-blue-500"
        />
        <label htmlFor="remember" className="text-gray-600 ml-2">
          Remember Me
        </label>
      </div>
      <div className="mb-6 text-blue-500">
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>
      <div
        onClick={login}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer text-center"
      >
        Login
      </div>

      <div className=" flex gap-1 mt-6 text-blue-500 text-center">
        <p>Don't have an account?</p>
        <Link href={"/register"}>
          <span className="underline hover:text-blue-700">Register</span>
        </Link>
      </div>
    </form>
  );
}
