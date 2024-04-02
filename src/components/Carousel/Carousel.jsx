"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="slider-container overflow-hidden mb-10">
      <Slider {...settings}>
        <div className="mr-0">
          <figure className="border-gray-300 flex flex-col p-5 w-32">
            <img className="w-32 h-32" src="" />
            <figcaption className="bg-gray-800 text-white italic p-3 text-center">
              An elephant at sunset
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="border-gray-300 flex flex-col p-5 w-32">
            <img className="w-32 h-32" src="" />
            <figcaption className="bg-gray-800 text-white italic p-3 text-center">
              An elephant at sunset
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="border-gray-300 flex flex-col p-5 w-32">
            <img className="w-32 h-32" src="" />
            <figcaption className="bg-gray-800 text-white italic p-3 text-center">
              An elephant at sunset
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="border-gray-300 flex flex-col p-5 w-32">
            <img className="w-32 h-32" src="" />
            <figcaption className="bg-gray-800 text-white italic p-3 text-center">
              An elephant at sunset
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="border-gray-300 flex flex-col p-5 w-32">
            <img className="w-32 h-32" src="" />
            <figcaption className="bg-gray-800 text-white italic p-3 text-center">
              An elephant at sunset
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="border-gray-300 flex flex-col p-5 w-32">
            <img className="w-32 h-32" src="" />
            <figcaption className="bg-gray-800 text-white italic p-3 text-center">
              An elephant at sunset
            </figcaption>
          </figure>
        </div>
      </Slider>
    </div>
  );
}
