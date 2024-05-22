import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) {
          throw new Error("Missing email and password!");
        }
        if (!credentials?.email) {
          throw new Error("Missing email!");
        }
        if (!credentials?.password) {
          throw new Error("Missing password!");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.id || !user.hashedPassword) {
          throw new Error("User doesn't exist!");
        }
        const correctPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!correctPassword) {
          throw new Error("Incorrect password!");
        }
        return user;
        // return {
        //   id: user.id + "",
        //   email: user.email,
        //   name: user.name,
        // };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};

export default NextAuth(authOptions);
