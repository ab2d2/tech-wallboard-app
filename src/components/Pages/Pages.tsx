import MultiCarousel from "react-multi-carousel";

import { useState, useRef, useEffect } from "react";
import { timers } from "../../constants/timers";
import { Layout } from "../Layout/Layout";
import { Carousel } from "../Carousel/Carousel";
import { Page } from "../Page/page";
import { useStore } from "@tanstack/react-store";
import { pageStore } from "../../data/page-store";

export default function Pages() {
  const pages = useStore(pageStore, (state) => Object.values(state));
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const carouselRef = useRef<MultiCarousel>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length || 0);
      if (pages.length > 1) {
        carouselRef.current?.next(currentPageIndex);
      }
    }, timers.secondsPerPage * 1000);

    return () => clearInterval(interval);
  }, [currentPageIndex, pages]);

  return (
    <Layout>
      <Carousel carouselRef={carouselRef}>
        {pages.map((page, index) => (
          <Page key={page.id} page={page} active={index === currentPageIndex} />
        ))}
      </Carousel>
    </Layout>
  );
}
