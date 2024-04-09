"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ suggestions }: any) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Repeat the suggestions to fill up to 6 items
  const repeatedSuggestions = [];
  while (repeatedSuggestions.length < 6) {
    repeatedSuggestions.push(...suggestions);
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {repeatedSuggestions.slice(0, 6).map((data, index) => (
          <div className="mx-3 cursor-pointer" key={index}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <figure className="border-gray-300 flex flex-col items-center justify-center p-5 overflow-hidden">
                <iframe
                  src={data.url}
                  frameBorder="0"
                  title={`Carousel Item ${index}`}
                ></iframe>
                <figcaption className="bg-gray-800 text-white italic p-3 text-center w-full">
                  {data.website_name}
                </figcaption>
              </figure>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
