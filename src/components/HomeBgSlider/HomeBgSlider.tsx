"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function HomeBgSlider({ srcs }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === srcs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {srcs.map((src, index) => (
        <Image
          key={index}
          className="-z-10 grayscale-[50%]"
          alt="Mountains"
          src={src}
          style={{
            objectFit: "fill",
            position: "fixed",
            width: "100%",
            height: "100%",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        />
      ))}
    </>
  );
}

export default HomeBgSlider;
