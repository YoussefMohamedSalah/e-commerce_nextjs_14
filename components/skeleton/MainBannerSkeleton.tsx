import Skeleton from "react-loading-skeleton";
import Container from "../ui/container";

const MainBannerSkeleton = () => {
  return (
    <section className="header-slider">
      <Container>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div style={{ maxHeight: "500px" }}>
              <Skeleton width={1128} height={500} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainBannerSkeleton;
