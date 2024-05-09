"use client";

import React from "react";
import Comma from "./Comma";
import Image, { StaticImageData } from "next/image";

type TestimonialType = {
  profileImg: StaticImageData;
  name: string;
  comment: string;
};

const TestimonialCard = ({ profileImg, name, comment }: TestimonialType) => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div>
        <Comma />
        <p style={{ fontSize: "18px" }} className="py-4 font-bromega">
          {comment}
        </p>
      </div>
      <div className="pt-0 flex flex-row gap-2 items-center">
        <Image src={profileImg} width={60} alt={name} quality={100} />
        <p style={{ fontSize: "22px" }} className="font-bromega">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
