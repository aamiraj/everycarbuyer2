"use client";
import React, { useContext, useState } from "react";
import { DataContext } from "@/contexts/dataContext";
import { useRouter } from "next/navigation";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";
import Image from "next/image";
import RandomBlob from "../assets/randomBlob.png";
import Cloud1 from "../assets/frontcloud1.svg";
import Cloud2 from "../assets/frontcloud2.svg";
import Cloud3 from "../assets/frontcloud3.svg";
import { getDetails } from "./HeaderSection";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";

const OfferSection = () => {
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
      setIsOpen(true);
      setMessage(vehicleData.errors[0].detail);
      setDetails({});
      setLoading(false);
      return;
    }
    if (vehicleData !== undefined) {
      setDetails(vehicleData);
      router.push("/details");
      setLoading(false);
    }
  };

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
      <h1 className="font-bold text-4xl text-start font-bromega text-white">
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
          onClick={handleClick}
        >
          Get my car valuation
          <RightAngle />
        </button>
      </div>
      {isOpen && (
        <Modal heading={registration} message={message} setIsOpen={setIsOpen} />
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default OfferSection;
