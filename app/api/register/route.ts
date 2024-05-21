import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing data" }, { status: 400 });
    }

    const userAlreadyExist = await prisma.user.findFirst({
      where: { email: email },
    });

    if (userAlreadyExist?.id) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (err: any) {
    console.log("register error", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
