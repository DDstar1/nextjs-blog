"use client";

import React, { useState, useEffect } from "react";

function HomeTextSlider() {
  const text1 = `vnvjvnsdjvnjsdv vkjnsnvs jsdnjv snvjsvosdvo jnvjsdnvjnsdjv jnvdsnvnd jdsnvjsdnvjnds jvdjnsdjnv eejnccand jnajajcn jknacanc nacacn nacjacn nacancnac acnjancojsa jnjcan jnnjn kjjn`;

  const text2 = `ncn cpokaopc cioad nocnz onodoi nvoidov onvodv odnvodsv donvoidvi ovnkdnv vnodn odnvjdnsv vndjdnv dvodvnjdvn jvndjndv jnvjdnv jdvnndv dnvndv sdvnosdn jvnjdsnv oivdnoisdnv jnvndjnv vnjsdnv jvdnjsdnv vdjdvnjdsnv vjkdnjsdv dvsjdvdv jvdsndv dvjdvnd vddsvjds vjndsvn vdndnv dv ksens nfvnf jfnf fb`;

  const text3 = `vndoj blkmtj yopyjho iovgjiorejg ognorg non svjoi nroo vdfnsfvs oisjdo oinov sdvnsodfov onoso novnso oingoisn oinovsio ionoinb onovn onvowneo oinons sdvnonv neoesn ongweo onwone oiwneon oeewnv owenvonw weo n weoinoewn oeno einweew oewn vowev`;

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
