"use client";
import React from "react";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";
import Image from "next/image";
import RandomBlob from "../assets/randomBlob.png";
import Cloud1 from "../assets/frontcloud1.svg";
import Cloud2 from "../assets/frontcloud2.svg";
import Cloud3 from "../assets/frontcloud3.svg";

const OfferSection = () => {
  return (
    <div className="offerSection">
      <Image
        src={RandomBlob}
        alt="Random blob"
        width={216}
        height={199}
        className="randomBlob"
      />
      <div className="backcloud1">
        <Image src={Cloud1} alt="Cloud" className="cloud1" />
      </div>
      <div className="backcloud2">
        <Image src={Cloud2} alt="Cloud" className="cloud2" />
      </div>
      <div className="backcloud3">
        <Image src={Cloud3} alt="Cloud" className="cloud3" />
      </div>
      <h1
        className="font-bold text-4xl text-start font-bromega text-white"
      >
        Get your highest
        <span
          style={{ padding: "16px" }}
          className="whiteMarkerBG font-bold text-4xl text-start font-bromega text-white"
        >
          offer
        </span>
        <br />
        yet the easy way
      </h1>
      <div
        style={{
          position: "relative",
          padding: "2rem",
          maxWidth: "512px",
          zIndex: 50,
        }}
        className="flex flex-col justify-center items-center spreadedBG"
      >
        <InputFieldUK />
        <InputFieldMileage />
        <button
          type="button"
          style={{ backgroundColor: "#2591FE" }}
          className="flex flex-row justify-center items-center gap-2 text-white w-full p-4 font-bromega rounded-xl font-bold text-xl"
        >
          Get my car valuation
          <RightAngle />
        </button>
      </div>
    </div>
  );
};

export default OfferSection;
