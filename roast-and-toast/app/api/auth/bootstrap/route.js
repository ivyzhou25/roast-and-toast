// app/api/auth/bootstrap/route.js
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User";

export async function GET() {
  await connectDB();

  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get full Clerk user object (for email, name, phone, etc.)
  const clerkUser = await currentUser();

  let user = await User.findOne({
    email: clerkUser?.emailAddresses[0]?.emailAddress,
  });

  if (!user) {
    user = await User.create({
      name: `${clerkUser?.firstName || ""} ${clerkUser?.lastName || ""}`.trim(),
      username: clerkUser?.username || clerkUser?.id, // fallback to Clerk id if no username
      phone: clerkUser?.phoneNumbers[0]?.phoneNumber || "",
      email: clerkUser?.emailAddresses[0]?.emailAddress,
    });
  }

  return NextResponse.json(user);
}
