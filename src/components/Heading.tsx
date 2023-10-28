"use client";

import React from "react";
type HeadingType = {
  content: string;
  marked: string;
  rest: string;
};
const Heading = ({ content, marked, rest="" }: HeadingType) => {
  return (
    <div className="m-2 p-6">
      <p className="font-bold text-3xl text-center font-bromega">
        {content}
        <span className="px-4 py-8 text-3xl text-center font-bromega markerBG">
          {marked}
        </span>
        {rest}
      </p>
    </div>
  );
};

export default Heading;
