import AuthAside from "@/components/auth/AuthAside";
import SignUp from "@/components/auth/SignUp/SignUp";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Signup",
  description: "Page Description"
};

interface Props {
  params: { locale: string };
}

export default function Signup({ params: { locale } }: Props) {
  const t = useTranslations("Auth");
  return (
    <main>
      <div className="create-account-container">
        <div className="container-fluid">
          <div className="row">
            <AuthAside className={"col-md-5"} text={`${t("auth-side-msg")}`} />
            <SignUp className={"col-md-7"} lang={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
