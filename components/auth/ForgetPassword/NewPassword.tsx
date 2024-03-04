"use client"

import React, { useEffect, useState } from "react";
import cn from "classnames";
import NewPasswordForm from "../NewPasswordForm";
import PasswordDone from "../PasswordDone";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  lang: string;
  tAuth: any;
};

const NewPassword: React.FC<Props> = ({ className, lang, tAuth }) => {
  const [otp, setOtp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let resetObj = localStorage.getItem("reset_password");
      if (resetObj) {
        let resetObject = JSON.parse(resetObj)
        setOtp(resetObject.otp || "");
        setEmail(resetObject.email || "")
      }
    }
  }, []);

  const onSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => {
      router.push("/login")
    }, 5000)
  }

  return (
    <div className={cn(className)}>
      {!isSuccess ? (
        <NewPasswordForm otp={otp} email={email} lang={lang} tAuth={tAuth} onSuccess={onSuccess} />
      ) : (
        <PasswordDone tAuth={tAuth} />
      )}
    </div>
  );
};

export default NewPassword;
