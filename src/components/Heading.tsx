"use client";

import React from "react";

type HeadingType = {
  content: string;
  marked: string;
  rest: string;
};

const Heading = ({ content, marked, rest = "" }: HeadingType) => {
  return (
      <h1 className="font-bold text-4xl text-center font-bromega">
        <span>{content}</span>
        <span className="text-4xl text-center font-bromega markerBG">
          {marked}
        </span>
        <span>{rest}</span>
      </h1>
  );
};

export default Heading;
