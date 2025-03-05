"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomCarousel({
  no_of_items = 5,
  items = [],
  no_of_items_mobile = 1,
}: {
  items: React.ReactNode[];
  no_of_items?: number;
  no_of_items_mobile?: number;
}) {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: no_of_items,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: no_of_items,
          slidesToScroll: no_of_items,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: no_of_items_mobile,
          slidesToScroll: no_of_items_mobile,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="w-full" key={index}>
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomCarousel;
