"use client";

import React, { useState, useEffect } from "react";

function HomeTextSlider() {
  const text1 = `Welcome to the Hub of Innovation! Dive into a world where technology meets imagination. From coding marvels to digital wonders, we're here to fuel your passion for all things tech. Join us as we explore, create, and redefine what's possible in the ever-evolving realm of technology.`;

  const text2 = `Step into the World of Web Wizards! Ready to unleash your creativity and build stunning websites that stand out from the crowd? Join us on a journey through the vibrant landscape of web development. From HTML to JavaScript, we'll equip you with the skills and knowledge to craft captivating digital experiences that leave a lasting impression.`;

  const text3 = `Embark on a Journey of Trading Triumphs! Imagine a world where your money works for you while you sleep. That's the power of automated trading! With our expert guidance and cutting-edge algorithms, we'll show you how to navigate the exciting realm of financial markets, turning data into dollars and dreams into reality.`;

  const allText = [text1, text2, text3];
  //, text2,

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // alert(currentIndex);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === allText.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, allText.length]);

  return (
    <>
      {allText.map((text, index) => (
        <div
          key={index}
          className={`fixed rounded-lg bg-white p-3 w-52 z-20 top-1/2 left-1/2 md:!left-[calc(50%+59px)] -translate-x-1/2 -translate-y-1/2 transform duration-[2000ms] rotate-y-90 ${
            index === currentIndex ? "!rotate-y-0" : "invisible"
          }`}
        >
          {text}
        </div>
      ))}
    </>
  );
}

export default HomeTextSlider;

//
