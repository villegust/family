"use client";

import { signOut } from "next-auth/react";

const Header = ({ session }: any) => {
  const signout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <header className="bg-white shadow-lg h-24 w-screen hidden md:flex justify-between fixed inset-0">
        <a
          href=""
          className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        >
          <img
            className=""
            src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
            alt=""
          />
        </a>

        <div className="border flex items-center px-4 lg:px-6 xl:px-8">
          {session ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-medium px-4 xl:px-6 py-2 xl:py-3 rounded-xl mr-2"
              onClick={signout}
            >
              Sign Out
            </button>
          ) : (
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 xl:px-6 py-2 xl:py-3 rounded-xl mr-2"
              href="/login"
            >
              Get Started
            </a>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
