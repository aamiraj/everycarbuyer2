"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import TrustPilot from "../assets/trustpilot.png";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";
import { useRouter } from "next/navigation";
import { DataContext } from "@/contexts/dataContext";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";

const getDetails = async (reg: any) => {
  const res = await fetch("/api/vehicle", {
    method: "POST",
    body: JSON.stringify({ reg }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  return data;
};

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const {
    carData: { registration },
    setDetails,
  }: any = useContext(DataContext);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true)
    const vehicleData = await getDetails(registration);
    if (vehicleData?.errors) {
      setIsOpen(true)
      setMessage(vehicleData.errors[0].detail)
      setDetails({})
      setLoading(false)
      return;
    }
    if (vehicleData !== undefined) {
      setDetails(vehicleData);
      router.push("/details");
      setLoading(false)
    }
  };

  return (
    <div
      style={{ gap: "16px", padding: "40px 8px" }}
      className="flex flex-col justify-center items-center radialgrad"
    >
      <h1
        style={{ fontSize: "40px" }}
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
          className="flex flex-row justify-center items-center gap-2 text-white text-lg font-bold w-full p-4 font-bromega"
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
      {isOpen && <Modal registration={registration} message={message} setIsOpen={setIsOpen} />}
      {isLoading && <Loading />}
    </div>
  );
};

export default HeaderSection;
