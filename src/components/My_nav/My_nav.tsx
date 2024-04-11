"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { PiArrowElbowRightDown } from "react-icons/pi";
import { MdOutlineStorage } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

function My_nav({ django_topics }: any) {
  const nav_itm = "py-10 w-full text-center hover:bg-gray-400 cursor-pointer";
  const [navOpen, setnavOpen] = useState(true);
  const [topicOpen, setTopicOpen] = useState(false);

  const toggleNav = (index: any) => {
    if (navOpen == true) {
      setTopicOpen(false);
    }
    setnavOpen(!navOpen);
  };

  const toggleTopic = (index: any) => {
    setTopicOpen(!topicOpen);
  };

  return (
    <>
      <nav className="fixed flex items-center h-screen z-40 md:!relative md:!pl-32  md:!bg-gray-200 md:!h-[unset]">
        <div
          className={`md:!fixed md:!max-w-full md:!top-1/2 md:!-translate-y-1/2 left-0 w-32 overflow-hidden transition-all ease-linear transform origin-left duration-[200ms] ${
            navOpen ? "max-w-full" : "max-w-0"
          }`}
        >
          <div className={`h-auto items-center bg-gray-200 flex flex-col`}>
            <Link className={`${nav_itm}`} href={"/"}>
              Home
            </Link>
            <div onClick={toggleTopic} className={`${nav_itm} flex flex-col`}>
              <div className="flex justify-around items-center">
                <span className="items-center">Topics</span>
                {topicOpen ? (
                  <PiArrowElbowRightDown className="transform duration-[2000ms] scale-y-100 max-x-full" />
                ) : (
                  ""
                )}
              </div>

              <div
                className={`flex flex-col text-left px-2 bg-gray-400 transition-all ease-linear duration-[500ms] transform origin-top overflow-hidden ${
                  topicOpen ? "max-h-[500px]" : "p-0 max-h-0"
                }`}
              >
                {django_topics.map((topic: any) => {
                  return (
                    <Link
                      key={topic.id}
                      className="py-5 hover:bg-gray-200 w-full"
                      href={`/Topics/${topic.slug}`}
                    >
                      <span className="border-b-4 pb-1"> {topic.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link className={`${nav_itm}`} href={"/About"}>
              About
            </Link>
            <div className={`${nav_itm}`}>Chat Room</div>
          </div>
        </div>
        <div
          className="p-1 rounded-r-full bg-slate-50/75 md:hidden cursor-pointer"
          onClick={toggleNav}
        >
          {navOpen ? (
            <MdOutlineKeyboardDoubleArrowLeft
              size={45}
              className="animate-bounce-side"
            />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight
              size={45}
              className="animate-bounce-side"
            />
          )}
        </div>
      </nav>
      <div
        className={`z-30 fixed h-screen w-screen top-0 bg-slate-700/90 md:left-full ${
          navOpen ? "left-0" : "left-full"
        }`}
      ></div>
    </>
  );
}

export default My_nav;
