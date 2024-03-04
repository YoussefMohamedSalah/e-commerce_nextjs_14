import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import SideNav from "@/components/myAccount/SideNav";
import AuthGuard from "../AuthGuard";
import Container from "@/components/ui/container";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function AccountLayout({ children, params: { locale } }: Props) {

  return (
    <AuthGuard>
      <div className="overlay" />
      <Header lang={String(locale)} />
      <Container>
        <section className="account-page-wrapper mb-5 mt--2rem ">
          <div className="row pt-3">
            <SideNav />
            {children}
          </div>
        </section>
        <Footer lang={String(locale)} />
      </Container>
    </AuthGuard>
  );
}
