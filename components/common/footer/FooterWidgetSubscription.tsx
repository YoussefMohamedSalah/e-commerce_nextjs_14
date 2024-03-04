"use client";

import ArrowRight from "@/components/svg/arrowRight";
import Logo from "@/components/ui/logo";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Session } from "@/types/session";

interface Props {
  tSubscription: any;
  session: Session | null;
};

export default function FooterWidgetSubscription({ tSubscription, session }: Props) {
  const [email, setEmail] = useState("");
  const router = useRouter();


  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!session) return router.push('/login');

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${session?.user?.token!}`,
          },
          body: JSON.stringify({ email })

        }
      );
      let res = await response.json();
      if (res) {
        // setReviews(res.data)
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="subscribe">
      <h6 className="section-title fw-normal">
        {tSubscription.exclusive_benefits}
      </h6>
      <form onSubmit={handleFormSubmit} className="subscribe-form">
        <input
          type="email"
          className="form-control"
          placeholder={`${tSubscription.subscript_input_text}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="btn p-0 border-0 shadow-none btn-submit"
        >
          <ArrowRight />
        </button>
      </form>
      <p>{tSubscription.subscript_text}</p>
      <div className="img-fluid footer-logo">
        <Logo />
      </div>
    </div>
  );
}
