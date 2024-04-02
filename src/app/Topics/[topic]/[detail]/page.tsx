// "use client";

import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import CommentForm from "@/components/CommentForm/CommentForm";
import Detail_img from "@/components/Detail_img/Detail_img";
import Date from "@/components/date";
import get_topics_detail from "@/api_requests/get_sub_topic_detail";
import get_topics_comments from "@/api_requests/get_sub_topic_comment";
import Image from "next/image";
import Script from "next/script";

import bg2 from "../../../../../public/img/me2.jpg";
import { CiSquareRemove } from "react-icons/ci";

export default async function Detail({
  params: { topic, detail },
}: {
  params: { topic: string; detail: string };
}) {
  const sub_topics_detail = await get_topics_detail(topic, detail);
  const sub_topics_comments = await get_topics_comments(topic, detail);
  const nav_itm = "py-10 w-full text-center";
  return (
    <div>
      {}
      <Script
        id="main_abs_js"
        src="/js/main_abs.js"
        strategy="beforeInteractive"
      />
      <div id="main_abs" className="relative top-0 w-full">
        <h2 className="text-center text-2xl p-5 font-bold">
          What is CyberSecurity
        </h2>
        <hr />
        <div className="flex ">
          <section className="bg-blue-200">
            {sub_topics_detail.map((detail: any) => {
              return (
                <div key={detail.key} className="overflow-hidden p-3">
                  <Detail_img src={detail.image} />

                  <p>{detail.content}</p>
                </div>
              );
            })}
            <br />
            <div>
              <img
                src="fish.jpeg"
                className="float-left m-3 w-32 h-32"
                alt=""
              />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
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
      </div>

      <section id="under_main_abs" className="flex relative">
        <div className="w-auto  bg-red-200 z-20">
          <h2 className="text-center">Comment Section</h2>
          <hr />
          {sub_topics_comments.map((comment: any) => {
            return (
              <div className="p-2" key={comment.key}>
                <div className="flex justify-around align-bottom">
                  <span className="underline underline-offset-3">
                    @{comment.name}
                  </span>
                  <span className="float-right text-xs ">
                    <Date dateString={comment.created} />
                  </span>
                </div>
                <div>{comment.comment}</div>
              </div>
            );
          })}
          <div className="px-2">
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
        <div className="min-w-36  bg-transparent">
          <div
            id="sticky_elmt"
            className="sticky top-[calc(100vh-210px)] bg-red-200 py-2"
          >
            <h2 className="text-center text-lg">Comment Section</h2>
            <hr />
            <CommentForm topicSlug={topic} subtopicId={detail} />
          </div>
        </div>
      </section>
    </div>
  );
}
