"use client";

import React from "react";
import Image from "@/components/ui/image";
import { signIn } from "next-auth/react";

export default function SocialAuth() {
  const handleSignInWithGoogle = () => signIn("google");
  const handleSignInWithFaceBook = () => signIn("facebook");

  return (
    <div className="social-login">
      <button
        onClick={handleSignInWithGoogle}
        className="border-0 bg-transparent"
      >
        <Image
          src="/assets/google.png"
          height={40}
          width={40}
          className="img-fluid"
          alt=""
        />
      </button>
      <button
        onClick={handleSignInWithFaceBook}
        className="border-0 bg-transparent"
      >
        <Image
          src="/assets/fb.png"
          height={40}
          width={40}
          className="img-fluid"
          alt=""
        />
      </button>
    </div>
  );
}
