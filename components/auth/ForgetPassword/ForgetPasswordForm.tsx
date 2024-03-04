"use client"

import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";
import { FormEvent, useState } from "react";
import Alert from "../Alert";
import ForgetPasswordOtpForm from "./ForgetPasswordOtpForm";
import FingerPrint from "@/components/svg/fingerPrint";

interface Props {
  tAuth: any;
  lang: string;
};

const defaultValues = {
  email: "",
};

const ForgetPasswordForm = ({ tAuth, lang }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [isOtp, setIsOtp] = useState<boolean>(false);


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    let statusCode;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/password/request-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": `${lang}`
          },
          body: JSON.stringify({ email })
        }
      );

      let res = await response.json();
      statusCode = response.status;

      if (statusCode === 200 || statusCode === 301) {
        setIsOtp(true)
        if (!res.data.success) {
          setError(res.data.message)
        } else {
          return {
            status: true,
            data: res.data
          }
        }
      } else if (statusCode === 422 || statusCode === 301) {
        setError(res.message)
      }
      else {
        setError('Network error you have error in your network')
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOtp)
    return (
      <>
        <div className="form-wrapper asides-gap">
          <FingerPrint />
          <div className="text-primary fz24 mb-3">{tAuth.forget_password}</div>
          <div className="fz14 text-black-50 mb-3">
            {tAuth.forget_password_msg}
          </div>
          <form onSubmit={onSubmit}>
            <div className="text-black">
              <div className="row">
                <Alert error={error} close={() => setError(null)} />
                <div className="col-12">
                  <div className="input-wrapper">
                    <label className="fz16 fw-500  d-block mb-2">
                      {tAuth.enter_email}
                    </label>
                    <input
                      type="email"
                      className="form-control mb24"
                      placeholder="Ex,Mohamed@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex justify-content-between gap-2 align-items-center mt-4">
                    <button type="submit" className="btn btn-primary fz16 py-3  w-75 ">
                      {isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : tAuth.send}
                    </button>
                    <Link
                      href={PAGES.LOGIN}
                      className="text-primary hover-link fz14 fw-500 "
                    >
                      {tAuth.back_to_login}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  return (
    <div className="form-wrapper asides-gap ">
      <ForgetPasswordOtpForm tAuth={tAuth} email={email} lang={lang} />;
    </div>
  );
};

export default ForgetPasswordForm;
