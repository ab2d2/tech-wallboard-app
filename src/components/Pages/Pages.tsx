import MultiCarousel from "react-multi-carousel";

import { useState, useRef, useEffect } from "react";
import { timers } from "../../constants/timers";
import { Layout } from "../Layout/Layout";
import { Carousel } from "../Carousel/Carousel";
import { Page } from "../Page/page";
import { PageConfig } from "../../types";

export default function Pages({ pages }: { pages: PageConfig[] }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const carouselRef = useRef<MultiCarousel>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length || 0);
      // @ts-expect-error the `next` function does not actually need an argument and works as intended without one
      carouselRef.current?.next();
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(interval);
  }, [currentPageIndex, pages]);

  return (
    <Layout currentPage={pages[currentPageIndex]}>
      <Carousel carouselRef={carouselRef}>
        {pages.map((page, index) => (
          <Page
            key={index}
            currentPage={page}
            active={index === currentPageIndex}
          />
        ))}
      </Carousel>
    </Layout>
  );
}
