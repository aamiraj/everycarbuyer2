"use client";

import React from "react";

type ReasonType = {
  title: string;
  desc: string;
};

const ReasonCard = ({ title, desc }: ReasonType) => {
  return (
    <div className="reasonCardShadow">
      <div>
        <p className="mb-2 font-bromega text-lg text-black">{title}</p>
        <p className="font-bromega text-base text-black">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ReasonCard;
