import React from "react";
import cn from "classnames";
import CheckDoneIcon from "@/components/svg/checkDone";

interface NewPasswordDoneProps {
  className?: string;
  tAuth: any;
};

const PasswordDone: React.FC<NewPasswordDoneProps> = ({ className, tAuth }) => {
  return (
    <div className={`form-wrapper asides-gap ${cn(className)}`}>
      <div className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <CheckDoneIcon />
        </div>
        <div className="text-primary fz24 mb-2">
          {tAuth.all_done}
        </div>
        <div className="fz14 text-black-50 mb-2rem">
          {tAuth.activated_account}
        </div>
        <p className="fz14 text-black">
          {tAuth.redirected_message}
        </p>
      </div>
    </div>
  );
};

export default PasswordDone;
