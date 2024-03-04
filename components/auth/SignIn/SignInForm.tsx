"use client";

import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "../Alert";

interface SignUpFormProps {
  className?: string;
  tAuth: {
    login: string;
    forget_password: string;
    email: string;
    password: string;
  };
  lang: string;
}

export default function SignInForm({ className, lang, tAuth }: SignUpFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { email, password, forget_password, login } = tAuth;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);

    try {
      let res = await signIn("credentials", {
        email: data.get("email"),
        password: data.get("password"),
        locale: lang,
        redirect: false,
      });

      if (res) {
        if (res?.error) {
          let errorMsg = res.error.split(":");
          setError(errorMsg[1]);
        } else {
          // Handle successful login
          router.push(`/${lang}`);
        }
      } else {
        // Handle the case where res is null or undefined
        console.error("Sign in response is null or undefined");
        setError("An unexpected error occurred during sign in.");
      }
    } catch (error) {
      // Handle other errors, if any
      console.error("Error during sign in:", error);
      setError("An error occurred during sign in.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="text-black">
        <div className="row">
          <Alert error={error} close={() => setError(null)} />
          <div className="col-12">
            <div className="input-wrapper">
              <label className="fz16 fw-500 d-block mb-2">
                {email}
              </label>
              <input
                type="email"
                name="email"
                className="form-control mb24"
                placeholder={email}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-wrapper">
              <label className="fz16 fw-500 d-block mb-2">
                {password}
              </label>
              <input
                type="password"
                name="password"
                className="form-control mb24"
              />
            </div>
          </div>
          <div className="col-12">
            <Link
              href={PAGES.FORGET_PASSWORD}
              className="text-blue hover-link fz14 fw-500 d-block"
            >
              {forget_password}
            </Link>

            <button
              type="submit"
              className="btn btn-primary fz16 py-3 mt-4 d-block"
              disabled={isLoading}
            >
              {isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : login}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
