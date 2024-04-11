// "use client";

import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import CommentForm from "@/components/CommentForm/CommentForm";
import Detail_img from "@/components/Detail_img/Detail_img";
import Detail_iframe from "@/components/Detail_iframe/Detail_iframe";
import Date from "@/components/date";
import get_topics_detail from "@/api_requests/get_sub_topic_detail";
import get_topics_comments from "@/api_requests/get_sub_topic_comment";
import get_topics_suggestions from "@/api_requests/get_sub_topic_suggests";
import get_sub_topics from "@/api_requests/get_sub_topics";
import Link from "next/link";

export default async function Detail({ params: { topic, detail_slug } }: any) {
  const sub_topics_detail = await get_topics_detail(topic, detail_slug);
  const sub_topics_comments = await get_topics_comments(topic, detail_slug);
  const sub_topics_suggestions = await get_topics_suggestions(
    topic,
    detail_slug
  );
  const sub_topics = await get_sub_topics(topic);

  const nav_itm = "py-10 w-full text-center";
  return (
    <div>
      {/* {}
      <Script
        id="main_abs_js"
        src="/js/main_abs.js"
        strategy="beforeInteractive"
      /> */}
      <div id="main_abs" className="relative top-0 w-full">
        <h2 className="text-center text-2xl p-5 font-bold capitalize">
          {detail_slug.replace(/-/g, " ")}
        </h2>
        <hr />
        <div className="">
          <section className="bg-blue-100 pb-9 relative">
            <section className="z-30 float-right bg-red-100 flex-none w-0 hover:w-auto  hover:absolute  hover:top-0  hover:right-0 ease-linear duration-1000 p-3 truncate transition-all">
              <h2 className="mb-2 text-center text-xl">CyberSecurity Topics</h2>
              <hr className="h-[2px] bg-black " />
              {sub_topics.map((sub_topic: any) => {
                return (
                  <Link
                    key={sub_topic.id}
                    href={`/topics/${sub_topic.topic}/${sub_topic.slug}`}
                  >
                    <div className="mb-3 capitalize">
                      {sub_topic.slug.replace(/-/g, " ")}
                    </div>
                  </Link>
                );
              })}
            </section>
            {sub_topics_detail.map((detail: any, index: number) => {
              return (
                <div key={index} className="overflow-hidden p-3">
                  {detail.embed_url ? (
                    <Detail_iframe
                      embed_link={detail.embed_url}
                      description={detail.video_title}
                    />
                  ) : detail.image ? (
                    <Detail_img src={detail.image} />
                  ) : null}
                  <p>{detail.content}</p>
                </div>
              );
            })}
            <br />
            {/* <div>
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
            </div> */}
          </section>
        </div>

        {sub_topics_suggestions[0] ? (
          <>
            <h2 className="text-center text-2xl p-5 font-bold">
              Suggested Pages
            </h2>
            <hr />
            <Carousel suggestions={sub_topics_suggestions} />
          </>
        ) : (
          <></>
        )}
      </div>

      <section id="under_main_abs" className="flex relative mt-10">
        <div className="w-auto  bg-red-100 z-20">
          <h2 className="text-center">Comments Section</h2>
          <hr className="h-[2px] bg-black " />
          {sub_topics_comments.map((comment: any) => {
            return (
              <div className="p-2" key={comment.key}>
                <div className="">
                  <span className="underline underline-offset-3 mx-5 align-bottom font-semibold">
                    @{comment.name}
                  </span>
                  <span className="text-xs vertical align-sub">
                    <Date dateString={comment.created} />
                  </span>
                </div>
                <div>{comment.comment}</div>
              </div>
            );
          })}

          {/* <div className="p-2">
            <div className="underline underline-offset-3">@DDHaven</div>
            <div>
              The hole cannot be codded in this form because the end has to meet
              the beginnin g and the fish ha s to grwo to be a big boy cause the
              end is near and the hen is lose
            </div>
          </div> */}
        </div>
        <div className="min-w-36  bg-transparent">
          <div
            id="sticky_elmt"
            className="sticky top-[calc(100vh-210px)] bg-red-100 py-2 border-l-[1px]  border-black"
          >
            <h2 className="text-center text-lg">Comment Form</h2>
            <hr className="h-[2px] bg-black " />
            <CommentForm topicSlug={topic} subtopicSlug={detail_slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
