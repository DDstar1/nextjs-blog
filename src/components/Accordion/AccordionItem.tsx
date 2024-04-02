"use client";

import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { Collapse } from "react-collapse";

function AccordionItem({ faqs }: any) {
  const [isOpen, setIsOpen] = useState(null);

  const toggleItem = (index: any) => {
    setIsOpen(index == isOpen ? null : index);
  };

  return (
    <div>
      {faqs.map((data: any, index: any) => {
        return (
          <div
            className="p-5 px-10 cursor-pointer"
            onClick={() => toggleItem(index)}
            key={data.id}
          >
            <div className="flex items-center justify-between ">
              <h3 className="font-bold">{data.title} </h3>
              {isOpen == index ? <FiMinusCircle /> : <IoMdAddCircleOutline />}
            </div>
            <p
              className={`pr-3 mb-2 transition-all ease-in overflow-hidden ${
                isOpen == index ? "max-h-48" : "max-h-0"
              }`}
            >
              {data.content}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AccordionItem;
