"use client";

import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center gap-6">
      <SignedOut>
        <h1 className="text-2xl font-bold">Welcome to Friend Profiles 🎉</h1>
        <p className="text-gray-600">Sign in to join or create a group</p>

        {/* ✅ Use routing="hash" instead of "path" */}
        <div className="w-[320px]">
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      <SignedIn>
        <h1 className="text-2xl font-bold">You’re signed in 🚀</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </main>
  );
}
