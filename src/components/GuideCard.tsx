"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

type GuideType = {
  id: string;
  img: StaticImageData;
  title: string;
  desc: string;
};

const GuideCard = ({ id, img, title, desc }: GuideType) => {
  return (
    <div className="mt-6 guideCardShadow">
      <div className="relative rounded-none h-56">
        <Image
          src={img}
          alt={title}
          fill
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="my-8">
        <div className="flex">
          <p className="outlinedNumber">{id}</p>
          <p
            style={{ fontSize: "24px" }}
            className="mb-2 font-bold font-bromega text-center"
          >
            {title}
          </p>
        </div>
        <p style={{ fontSize: "16px" }} className="font-bromega text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default GuideCard;
