import AuthAside from "@/components/auth/AuthAside";
import SignIn from "@/components/auth/SignIn/SignIn";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Login",
  description: "Page Description"
};

interface Props {
  params: { locale: string };
}


export default function LoginPage({ params: { locale } }: Props) {
  const t = useTranslations("Auth");
  return (
    <main>
      <div className="create-account-container">
        <div className="container-fluid">
          <div className="row">
            <AuthAside className={"col-md-5"} text={`${t("auth-side-msg")}`} />
            <SignIn className={"col-md-7"} lang={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
