"use client";

import Image from "next/image";
import React from "react";
import TrustPilot from "../assets/trustpilot.png";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";

const HeaderSection = () => {
  return (
    <div
      style={{ gap: "16px" }}
      className="py-10 flex flex-col justify-center items-center radialgrad"
    >
      <h1
        style={{ fontSize: "45px" }}
        className="text-white font-bold text-center font-bromega"
      >
        Your car, Your price
        <br />
        Selling made simple
      </h1>
      <p
        style={{ fontSize: "20px" }}
        className="text-center text-white font-bromega"
      >
        Find a competitive offer with a personal touch. Sell
        <br />
        confidently, sell with everycarbuyer.
      </p>
      <div className="flex flex-col justify-center items-center spreadedBG">
        <InputFieldUK />
        <InputFieldMileage />
        <button
          type="button"
          style={{ backgroundColor: "#2591FE", borderRadius: "8px" }}
          className="flex flex-row justify-center items-center gap-2 text-white text-lg font-bold w-full p-6 font-bromega"
        >
          Get my car valuation
          <RightAngle />
        </button>
      </div>
      <Image
        src={TrustPilot}
        alt="trustpilot logo"
        width={345}
        height={60}
        className="py-8"
      />
    </div>
  );
};

export default HeaderSection;
