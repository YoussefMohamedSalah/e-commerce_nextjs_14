"use client";

import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";
import { SignupTerms } from "@/types/auth";
import { useState } from "react";
import ConfirmationOtpForm from "./ConfirmationOtpForm";
import SocialAuth from "../SocialAuth";
import Alert from "../Alert";

interface SignUpFormProps {
  className?: string;
  tAuth: any;
  lang: string;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ className, tAuth, lang }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputPasswordConfirmation, setInputPasswordConfirmation] = useState<
    string
  >("");
  const [isOtp, setIsOtp] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);

    const dataObj: SignupTerms = {
      name: fName,
      last_name: lName,
      email: inputEmail,
      phone: "",
      password: inputPassword,
      password_confirmation: inputPasswordConfirmation,
    };

    let statusCode;
    try {
      // send do server
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": `${lang}`
          },
          body: JSON.stringify(dataObj)
        }
      );

      let res = await response.json()

      statusCode = response.status
      // if success
      if (statusCode === 200) {
        setIsOtp(true)
        if (!res.data.success) {
          setError(res.data.message)
        } else {
          return {
            status: true,
            data: res.data
          }
        }
      } else if (statusCode === 422) {
        setError(res.message)
      } else {
        setError('Network error you have error in your network')
      }
      setIsLoading(false);
    } catch (err: any) {
      console.log(err)
      setError(err)
    }
  }

  if (!isOtp)
    return (
      <div className="form-wrapper asides-gap ">
        <div className="text-primary fz24 mb-3">{tAuth.create_account}</div>
        <div className="fz14 text-black-50 mb-3">
          {tAuth.have_account}
          <Link href={PAGES.LOGIN} className="fw-500 text-blue hover-link">
            {tAuth.login}
          </Link>
        </div>
        <SocialAuth />
        <div className="or text-secondary fz14"> {tAuth.or}</div>
        <form onSubmit={handleSubmit}>
          <div className="text-black">
            <div className="row">
              <Alert error={error} close={() => setError(null)} />
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="fz16 fw-500  d-block mb-2">
                    {tAuth.f_name}
                  </label>
                  <input
                    type="text"
                    className="form-control mb24"
                    placeholder={tAuth.f_name_ex}
                    value={fName}
                    onChange={e => setFName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-wrapper">
                  <label className="fz16 fw-500  d-block mb-2">
                    {tAuth.l_name}
                  </label>
                  <input
                    type="text"
                    className="form-control mb24"
                    placeholder={tAuth.l_name_ex}
                    value={lName}
                    onChange={e => setLName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-wrapper">
                  <label className="fz16 fw-500  d-block mb-2">
                    {tAuth.email}
                  </label>
                  <input
                    type="email"
                    className="form-control mb24"
                    placeholder={tAuth.email}
                    value={inputEmail}
                    onChange={e => setInputEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-wrapper">
                  <label className="fz16 fw-500  d-block mb-2">
                    {tAuth.password}
                  </label>
                  <input
                    type="password"
                    className="form-control mb24"
                    value={inputPassword}
                    onChange={e => setInputPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-wrapper">
                  <label className="fz16 fw-500  d-block mb-2">
                    {tAuth.confirm_password}
                  </label>
                  <input
                    type="password"
                    className="form-control mb24"
                    value={inputPasswordConfirmation}
                    onChange={e => setInputPasswordConfirmation(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="fz12 text-black-50 mt-4">
                  {tAuth.signup_agreement}{" "}
                  <Link href={PAGES.TERMS} className="text-blue hover-link">
                    {tAuth.terms_of_use}
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary fz16 py-3 mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : tAuth.create_account}
                </button>
              </div>
            </div>
          </div>
        </form>{" "}
      </div>
    );
  return (
    <div className="form-wrapper asides-gap ">
      <ConfirmationOtpForm tAuth={tAuth} email={inputEmail} lang={lang} />;
    </div>
  );
};

export default SignUpForm;
