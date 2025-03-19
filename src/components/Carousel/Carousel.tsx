import styled from "@emotion/styled";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Carousel({
  children,
  carouselRef,
}: {
  children: React.ReactNode[];
  carouselRef?: React.RefObject<MultiCarousel | null>;
}) {
  return (
    <StyledCarousel
      ref={carouselRef}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
      }}
      swipeable={false}
      draggable={false}
      arrows={false}
      infinite
    >
      {children}
    </StyledCarousel>
  );
}

const StyledCarousel = styled(MultiCarousel)`
  height: 100%;
  width: 100%;

  .react-multi-carousel-track {
    height: 100%;
  }

  .react-multi-carousel-item {
    height: 100%;
  }
`;
