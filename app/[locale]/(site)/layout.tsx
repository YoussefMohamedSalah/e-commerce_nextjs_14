import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Container from "@/components/ui/container";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function SiteLayout({ children, params: { locale } }: Props) {
  return (
    <div>
      <Header lang={String(locale)} />
      <Container>
        {children}
        <Footer lang={String(locale)} />
      </Container>
    </div>
  );
}
