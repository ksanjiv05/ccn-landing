"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const default_responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CustomCarousel({
  no_of_items = 5,
  items = [],
  no_of_items_mobile = 1,
}: {
  items: React.ReactNode[];
  no_of_items?: number;
  no_of_items_mobile?: number;
}) {
  const [responsive, setResponsive] = React.useState(default_responsive);

  React.useEffect(() => {
    setResponsive({
      ...default_responsive,
      desktop: {
        ...default_responsive.desktop,
        items: no_of_items,
      },
      mobile: {
        ...default_responsive.mobile,
        items: no_of_items_mobile,
      },
    });
  }, [no_of_items, no_of_items_mobile]);

  return (
    <Carousel
      // centerMode
      // showDots={true}
      autoPlay
      autoPlaySpeed={2000}
      responsive={responsive}
      arrows={false}
      infinite
    >
      {items.map((item, index) => (
        <div className="w-full" key={index}>
          {item}
        </div>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
