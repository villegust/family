"use client";

import React from "react";

import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <section>
      <form action="#" method="POST">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 font-medium text-sm"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-2/3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 font-medium text-sm"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-2/3 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="text-blue-500 h-3 w-3"
          />
          <label htmlFor="remember" className="text-gray-600 ml-2 text-sm">
            Remember Me
          </label>
        </div>
        <div className="mb-6 text-blue-500 text-base">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-2/3"
          onClick={handleRedirect}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
