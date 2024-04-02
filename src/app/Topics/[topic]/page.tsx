import React from "react";
import Image from "next/image";
import SearchBar from "@/components/searchBar/SearchBar";
import get_sub_topics from "@/api_requests/get_sub_topics";
import Link from "next/link";

export default async function Topics({
  params: { topic },
}: {
  params: { topic: string };
}) {
  const sub_topics = await get_sub_topics(topic);
  return (
    <div>
      <SearchBar />

      <h1 className="text-center text-2xl p-5 font-bold">
        {sub_topics[0].topic}
      </h1>
      <hr />

      <div className="flex text-center flex-wrap">
        {sub_topics.map((sub_topic: any) => {
          return (
            <Link
              key={sub_topic.id}
              href={`/Topics/${sub_topic.topic}/${sub_topic.id}`}
            >
              <figure className="border-gray-300 flex flex-col p-5 mx-auto hover:scale-105">
                <Image
                  className="grayscale-[50%] -z-10 w-full aspect-square"
                  width={200}
                  height={50}
                  alt="Mountains"
                  src={sub_topic.image_url}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <figcaption className="bg-gray-800 text-white italic p-3 text-center">
                  {sub_topic.name}
                </figcaption>
              </figure>{" "}
            </Link>
          );
        })}

        <figure className="border-gray-300 flex flex-col p-5 max-w-220 mx-auto">
          <img className="w-32 h-32" src="" />
          <figcaption className="bg-gray-800 text-white italic p-3 text-center">
            An elephant at sunset
          </figcaption>
        </figure>

        <figure className="border-gray-300 flex flex-col p-5 max-w-220 mx-auto">
          <img className="w-32 h-32" src="" />
          <figcaption className="bg-gray-800 text-white italic p-3 text-center">
            An elephant at sunset
          </figcaption>
        </figure>

        <figure className="border-gray-300 flex flex-col p-5 max-w-220 mx-auto">
          <img className="w-32 h-32" src="" />
          <figcaption className="bg-gray-800 text-white italic p-3 text-center">
            An elephant at sunset
          </figcaption>
        </figure>

        <figure className="border-gray-300 flex flex-col p-5 max-w-220 mx-auto">
          <img className="w-32 h-32" src="" />
          <figcaption className="bg-gray-800 text-white italic p-3 text-center">
            An elephant at sunset
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
