"use client";

import React from "react";

type ReasonType = {
  title: string;
  desc: string;
};

const ReasonCard = ({ title, desc }: ReasonType) => {
  return (
    <div className="reasonCardShadow">
      <p className="mb-2 font-bromega font-bold text-2xl text-black">{title}</p>
      <p className="font-bromega text-base text-black">{desc}</p>
    </div>
  );
};

export default ReasonCard;
