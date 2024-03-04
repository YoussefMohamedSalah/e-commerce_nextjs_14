import React from "react";
import Link from "@/components/ui/link";
import cn from "classnames";
import LogoWithName from "@/components/svg/logoWithName";

interface AuthAsideProps {
  className?: string;
  text?: string;
}

const AuthAside: React.FC<AuthAsideProps> = ({ className, text }) => {
  return (
    <div className={cn("px-0", className)}>
      <div className="gradiant-side d-flex flex-wrap">
        <Link
          href="/"
          className="top-logo d-flex gap-1 align-items-center align-self-start"
        >
          <LogoWithName />
        </Link>
        <div className="fz28 text-white fw-bold login-slogan d-md-flex  flex-xl-shrink-0 text-center w-100 flex-grow-1 justify-content-center">
          <q>
            {text}
          </q>
        </div>
      </div>
    </div>
  );
};

export default AuthAside;
