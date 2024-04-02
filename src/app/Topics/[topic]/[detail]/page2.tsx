// "use client";

import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import CommentForm from "@/components/CommentForm/CommentForm";
import get_topics_detail from "@/api_requests/get_sub_topic_detail";
import Image from "next/image";

export default async function Detail({ params: { topic, detail } }) {
  const sub_topics_detail = await get_topics_detail(topic, detail);
  const nav_itm = "py-10 w-full text-center";
  return (
    <div>
      {}
      <h2 className="text-center text-2xl p-5 font-bold">
        What is CyberSecurity
      </h2>
      <hr />
      <div className="flex ">
        <section className="bg-blue-200">
          {sub_topics_detail["data"].map((detail) => {
            return (
              <div key={detail.key} className="overflow-hidden p-3">
                <Image
                  className="float-left mr-3 mb-3"
                  width={150}
                  height={150}
                  alt="Mountains"
                  src={detail.image}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <p>{detail.content}</p>
              </div>
            );
          })}
          <br />
          <div>
            <img src="fish.jpeg" className="float-left m-3 w-32 h-32" alt="" />
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

      <section className="flex flex-col bg-red-200">
        <div className="w-20 sticky top-[calc(100vh-200px)] bg-red-200 px-2 overflow-x-hidden">
          <CommentForm />
        </div>
        <div className="w-auto">
          <div className="p-2">
            <div className="underline underline-offset-3">@DDHaven</div>
            <div>
              The hole cannot be codded in this form because the end has to meet
              the beginnin g and the fish ha s to grwo to be a big boy cause the
              end is near and the hen is lose
            </div>
          </div>{" "}
          <div className="p-2">
            <div className="underline underline-offset-3">@DDHaven</div>
            <div>
              The hole cannot be codded in this form because the end has to meet
              the beginnin g and the fish ha s to grwo to be a big boy cause the
              end is near and the hen is lose
            </div>
          </div>{" "}
          <div className="p-2">
            <div className="underline underline-offset-3">@DDHaven</div>
            <div>
              The hole cannot be codded in this form because the end has to meet
              the beginnin g and the fish ha s to grwo to be a big boy cause the
              end is near and the hen is lose
            </div>
          </div>{" "}
          <div className="p-2">
            <div className="underline underline-offset-3">@DDHaven</div>
            <div>
              The hole cannot be codded in this form because the end has to meet
              the beginnin g and the fish ha s to grwo to be a big boy cause the
              end is near and the hen is lose
            </div>
          </div>
          <div className="p-2">
            <div className="underline underline-offset-3">@DDHaven</div>
            <div>
              The hole cannot be codded in this form because the end has to meet
              the beginnin g and the fish ha s to grwo to be a big boy cause the
              end is near and the hen is lose
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="min-w-20  bg-transparent">
  <div id="sticky_elmt" className="">
    <CommentForm />
  </div>
</div>; */
}
