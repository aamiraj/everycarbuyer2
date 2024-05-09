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
import Loading from "@/components/Loader";

export const getDetails = async (reg: any) => {
  const res = await fetch("/api/vehicle", {
    method: "POST",
    body: JSON.stringify({ reg }),
  });

  if (!res.ok) {
    return res;
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
    setLoading(true);
    const vehicleData = await getDetails(registration);
    if (vehicleData?.errors) {
      setMessage(vehicleData.errors[0].detail);
      setIsOpen(true);
      setDetails({});
      setLoading(false);
      return;
    }
    if (vehicleData?.status === 500) {
      setMessage(vehicleData.statusText);
      setIsOpen(true);
      setLoading(false);
      return;
    }
    setDetails(vehicleData);
    router.push("/details");
    setLoading(false);
  };

  return (
    <div
      style={{ gap: "16px", padding: "32px 8px" }}
      className="flex flex-col justify-center items-center radialgrad"
    >
      <h1 className="text-white font-bold text-center font-bromega">
        Your car, Your price
        <br />
        Selling made simple
      </h1>
      <p className="text-center text-white font-bromega">
        Find a competitive offer with a personal touch. Sell
        <br />
        confidently, sell with everycarbuyer.
      </p>
      <div className="flex flex-col justify-center items-center spreadedBG">
        <InputFieldUK />
        <InputFieldMileage />
        <button
          type="button"
          style={{
            backgroundColor: `${isLoading ? "#d0d0d0" : "#2591FE"}`,
            borderRadius: "8px",
          }}
          className="flex flex-row justify-center items-center gap-2 text-white text-lg font-bold w-full p-4 font-bromega"
          onClick={handleClick}
          disabled={isLoading}
        >
          Get my car valuation
          <span className={isLoading ? "rightangle" : ""}>
            <RightAngle />
          </span>
        </button>
      </div>
      <Image
        style={{ margin: "28px 0px" }}
        src={TrustPilot}
        alt="trustpilot logo"
        width={320}
        height={64}
        quality={100}
      />
      {isOpen && (
        <Modal heading={registration} message={message} setIsOpen={setIsOpen} />
      )}
      {/* {isLoading && <Loading />} */}
    </div>
  );
};

export default HeaderSection;
