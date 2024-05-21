"use client";

import Input from "@/components/Input";
import React, { useState, useEffect, useCallback } from "react";

import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const register = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/register", {
        name,
        email,
        password,
      });

      toast.success("Successfully registered");
      router.push("/login");
    } catch (err: any) {
      console.error("Registration error:", err);
      toast.error(
        err?.response?.data?.error || "An error occurred during registration"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action="#" method="POST">
      <div className="mb-4">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </div>
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

      <div
        onClick={register}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full cursor-pointer text-center"
      >
        Register
      </div>

      <div className=" flex gap-1 mt-6 text-blue-500 text-center">
        <p>Already have an account?</p>
        <Link href={"/login"}>
          <span className="underline hover:text-blue-700">Login</span>
        </Link>
      </div>
    </form>
  );
}
