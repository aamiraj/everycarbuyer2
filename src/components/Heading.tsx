"use client";

import React from "react";

type HeadingType = {
  content: string;
  marked: string;
  rest: string;
};

const Heading = ({ content, marked, rest = "" }: HeadingType) => {
  return (
      <h1 style={{
        padding: "40px 0"
      }} className="font-bold text-3xl md:text-3xl text-center font-bromega">
        <span>{content}</span>
        <span className="text-3xl md:text-3xl text-center font-bromega markerBG">
          {marked}
        </span>
        <span>{rest}</span>
      </h1>
  );
};

export default Heading;
