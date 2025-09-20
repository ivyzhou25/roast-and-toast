// app/api/auth/bootstrap/route.js
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";

export async function GET() {
  await connectDB();
  const { userId } = auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let user = await User.findOne({ clerkId: userId });
  if (!user)
    user = await User.create({
      clerkId: userId,
      points: 0,
      streak: 0,
      tags: [],
    });

  return NextResponse.json(user);
}
