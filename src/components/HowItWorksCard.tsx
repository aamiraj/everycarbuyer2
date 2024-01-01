import Image, { StaticImageData } from "next/image";
import React from "react";

type GuideType = {
  img: StaticImageData;
  title: string;
  desc: string;
};

const HowItWorksCard = ({ img, title, desc }: GuideType) => {
  return (
    <div className="mt-6 guideCardShadow">
      <div className="relative rounded-none h-40">
        <Image
          src={img}
          alt={title}
          fill
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="my-8">
        <p
          style={{ fontSize: "24px" }}
          className="mb-2 font-bold font-bromega text-center"
        >
          {title}
        </p>
        <p style={{ fontSize: "16px" }} className="font-bromega text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
