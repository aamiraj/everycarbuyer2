"use client";

import Image from "next/image";
import React, { useContext, useEffect } from "react";
import TrustPilot from "../assets/trustpilot.png";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DataContext } from "@/contexts/dataContext";

const getDetails = async (reg: any) => {
  const res = await fetch("/api/vehicle", {
    method: "POST",
    body: JSON.stringify({ reg }),
  });
  const { data } = await res.json();
  return data;
};

const HeaderSection = () => {
  const { reg, setDetails }: any = useContext(DataContext);
  const router = useRouter();

  const handleClick = async () => {
    const vehicleData = await getDetails(reg);
    setDetails(vehicleData);
    router.push("/details");
  };

  return (
    <div
      style={{ gap: "16px", padding: "40px 8px" }}
      className="flex flex-col justify-center items-center radialgrad"
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
          onClick={handleClick}
        >
          Get my car valuation
          <RightAngle />
        </button>
      </div>
      <Image
        style={{ margin: "54px 0px" }}
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
