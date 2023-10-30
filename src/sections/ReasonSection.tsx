"use client";

import Heading from "@/components/Heading";
import ReasonCard from "@/components/ReasonCard";
import { reasonData } from "@/data/reasonData";
import React from "react";

const ReasonSection = () => {
  return (
    <div className="reasonSection">
      <Heading content="Why" marked="choose" rest="us?" />
      <p
        style={{
          maxWidth: 690,
          margin: "auto",
          fontSize: "16px",
          padding: "8px",
        }}
        className="font-bromega text-center"
      >
        Sit back and enjoy a stress-free selling process as we expertly navigate
        you through each step, guaranteeing a seamless and effortless
        transaction when we purchase your car.
      </p>
      <div className="reasonGrid">
        {reasonData.map((reason, i) => (
          <ReasonCard key={i} title={reason.title} desc={reason.desc} />
        ))}
      </div>
    </div>
  );
};

export default ReasonSection;
