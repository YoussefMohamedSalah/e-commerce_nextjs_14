import dynamic from 'next/dynamic';
import { homeService } from "@/services/home.service";
import FeaturedOne from '@/components/home/featuredOne';
import FeaturedTwo from '@/components/home/featuredTwo';
import FeaturedThree from '@/components/home/featuredThree';
import Header from '@/components/common/header/Header';
import ProductsCarouselWrapper from '@/components/products/productsCarouselWrapper';
import Container from '@/components/ui/container';
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

const Footer = dynamic(() => import('../../components/common/footer/Footer'))
const MainCarousel = dynamic(() => import('../../components/home/mainCarousel'))
const TopCategories = dynamic(() => import('../../components/home/topCategories'))
const LatestBlogs = dynamic(() => import('../../components/home/latestBlogs'))
const BrandsCarouselWrapper = dynamic(() => import('../../components/home/brandsCarouselWrapper'))

interface Props {
  params: { locale: string };
};

async function getHomePage(lang: string) {
  const response = await homeService.getHomePage(lang);
  if (response && response.success) {
    return response.data;
  }
};

async function getMainCarousel(lang: string) {
  const response = await homeService.getMainCarousel(lang);
  if (response && response.success) {
    return response.data;
  }
};

async function getBlogs(lang: string) {
  const response = await homeService.getBlogs(lang);
  if (response && response.success) {
    return response;
  }
};

async function getBrands(lang: string) {
  const response = await homeService.getBrands(lang);
  if (response && response.success) {
    return response;
  }
};

async function getTopCategories(lang: string) {
  const response = await homeService.getTopCategories(lang);
  if (response && response.success) {
    return response;
  }
};

// getTopCategories
export default async function Home({ params: { locale } }: Props) {
  const session: Session | null = await getServerSession(authConfig);
  const mainCarouselData = await getMainCarousel(locale);
  const blogsData = await getBlogs(locale);
  const brandsData = await getBrands(locale);
  const homePageSectionsData = await getHomePage(locale);
  const categoriesData = await getTopCategories(locale)

  const handleContent = (section: any) => {
    switch (section.slug) {
      case 'new arrival':
        return <ProductsCarouselWrapper className={"d-flex"} data={section} title={`${section.name}`} isCategories={section.show_categories ? true : false} isBtn={true} session={session ? session : null} />;
      case 'First Four Banner':
        return <FeaturedOne data={section} />;
      case 'newbest':
        return <ProductsCarouselWrapper className={"d-flex"} data={section} title={`${section.name}`} isCategories={section.show_categories ? true : false} session={session ? session : null} />;
      case 'Second Four Banner 4':
        return <FeaturedTwo data={section} />;
      case 'newest':
        return <ProductsCarouselWrapper className={"d-md-flex"} data={section} title={`${section.name}`} isCategories={section.show_categories ? true : false} session={session ? session : null} />;
      case 'Two Slider':
        return <FeaturedThree data={section} />;
      default:
        break;
    }
  };

  return (
    <>
      <div className="overlay" />
      <Header lang={String(locale)} />
      <Container>
        <main className="">
          {homePageSectionsData && (
            <>
              <MainCarousel data={mainCarouselData} />
              <TopCategories data={categoriesData.data} locale={locale} isSubCategory={false} />
              {homePageSectionsData.map((section: any) =>
                <div key={section.id}>
                  {handleContent(section)}
                </div>
              )}
            </>
          )}
          {brandsData && <BrandsCarouselWrapper brands={brandsData} isBtns={false} locale={locale} />}
          {blogsData && <LatestBlogs blogs={blogsData} />}
        </main>
        <Footer lang={String(locale)} />
      </Container>
    </>
  );
}
