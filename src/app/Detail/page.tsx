"use client";

import React from "react";
import Carousel from "@/components/Carousel/Carousel";

export default function Detail() {
  const nav_itm = "py-10 w-full text-center";
  return (
    <div>
      <h2 className="text-center text-2xl p-5 font-bold">
        What is CyberSecurity
      </h2>
      <hr />
      <div className="flex ">
        <section className="bg-blue-200">
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          <br />
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </section>
        <section className="bg-red-200 z-10 flex-none w-0 hover:w-auto ease-linear duration-1000 p-3 truncate transition-all">
          <h2 className="mb-3 text-center text-xl">CyberSecurity Topics</h2>
          <hr />
          <div className="mb-3">Home</div>
          <div className="mb-3">Topics</div>
          <div className="mb-3">About</div>
          <div className="mb-3">Chat Room</div>
          <div className="mb-3">ChatsdvsdvdsRoom</div>
        </section>
      </div>

      <h2 className="text-center text-2xl p-5 font-bold">Suggested Pages</h2>
      <hr />
      <Carousel />

      <section>
        <form action="" className="flex flex-col bg-grey-200">
          <textarea name="comment" id="comment">
            dssdds
          </textarea>
          <input type="button" value="submit" />
        </form>
      </section>
    </div>
  );
}
