import React from "react";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

import Header from "@/components/Header";

interface ChildrenProps {
  children: React.ReactNode;
}

export default async function ProtectedRootLayout({ children }: ChildrenProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }
  return (
    <main>
      <Header session={session} />
      <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
    </main>
  );
}
