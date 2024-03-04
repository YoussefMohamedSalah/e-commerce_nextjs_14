import React from "react";
import cn from "classnames";
import ResetOtpForm from "./SignUp/ConfirmationOtpForm";
import FingerPrint from "@/components/svg/fingerPrint";

interface PasswordResetProps {
  className?: string;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <div className="form-wrapper asides-gap">
        <FingerPrint />
        <div className="text-primary fz24 mb-3">Password reset</div>
        <div className="fz14 text-black-50 mb-2rem">
          We send a code to <span className="text-primary">medo@gmail.com</span>
        </div>
        {/* <ResetOtpForm /> */}
      </div>
    </div>
  );
};

export default PasswordReset;
