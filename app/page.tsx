"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);
  return (
    <>
      <main className="flex flex-col items-center overflow-x-hidden z-10">
        <Header />
        <LandingPage />

        <div className="flex items-end w-full bg-white">
          <Footer />
        </div>
      </main>
    </>
  );
}
