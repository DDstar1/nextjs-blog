"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiSquareRemove } from "react-icons/ci";

function Detail_img({ src }: { src: string }) {
  const [scaled, setScaled] = useState(false);

  const toggleScale = () => {
    setScaled(!scaled);
  };

  return (
    <>
      <Image
        className="float-left mr-3 mb-3 cursor-pointer"
        width={150}
        height={150}
        onClick={toggleScale}
        alt="Mountains"
        src={src}
        style={{
          objectFit: "cover",
        }}
      />
      <div
        className={`fixed w-screen h-screen bg-slate-500 z-40 left-0 top-0 transition-transform transform ease-linear duration-1000 scale-y-0 ${
          scaled ? "scale-y-100" : ""
        }`}
      >
        <CiSquareRemove
          size={100}
          className="inline-block m-2 cursor-pointer z-50 relative"
          onClick={toggleScale}
        />
        <Image
          className="grayscale-[50%]"
          alt="Mountains"
          fill
          src={src}
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}

export default Detail_img;
