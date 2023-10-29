"use client"

import Image from "next/image";
import React from "react";
import Envelope from "../assets/envelope.png";
import Telephone from "../assets/telephone.png";
import Location from "../assets/location.png";
import Calender from "../assets/calender.svg";
import DownArrow from "../assets/downarrow.svg";
import RightAngle from "../components/RightAngle";
import { useRouter } from 'next/navigation'

const HOUR = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

const MINUTE = ["00", "10", "20", "30", "40", "50"];

const LeftSideForm = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/submission");
  };
  return (
    <div style={{ padding: "40px", borderRadius: "10px" }} className="bg-white">
      <h1
        style={{ fontSize: "28px", margin: "24px", color: "#2591FE" }}
        className="font-bold font-sansation"
      >
        Your offer is guaranteed for 4 days
      </h1>
      <div style={{ gap: "16px" }} className="flex flex-col my-4 items-center ">
        {/* input group for email  */}
        <div className="w-full flex flex-row gap-0">
          <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
            <Image src={Envelope} alt="Envelope" width={22} height={14} />
          </span>
          <input
            type="text"
            placeholder="Email address (So that we can keep you updated)"
            className="w-full p-4 text-black font-normal font-bromega rounded-r-md border border-[#2591FE] outline-none"
          />
        </div>
        {/* input group for call  */}
        <div className="w-full flex flex-row gap-0">
          <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
            <Image src={Telephone} alt="Telephone" width={22} height={20} />
          </span>
          <input
            type="text"
            placeholder="Mobile (For our team to reach you)"
            className="w-full p-4 text-black font-normal font-bromega  rounded-r-md border border-[#2591FE] outline-none"
          />
        </div>
        {/* location input field  */}
        <div className="w-full flex flex-row gap-0">
          <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
            <Image src={Location} alt="Location" width={22} height={20} />
          </span>
          <input
            type="text"
            placeholder="Postcode (Convenient collection)"
            className="w-full p-4 text-black font-normal font-bromega  rounded-r-md border border-[#2591FE] outline-none"
          />
        </div>
        {/* check time checkbox  */}
        <div
          style={{ gap: "16px" }}
          className="w-full flex justify-between items-center gap-4"
        >
          <div>
            <label className="checkBoxContainer font-sansation">
              Anytime
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            {/* date picker input field  */}
            <span className="datepicker-toggle">
              <Image src={Calender} alt="Location" width={22} height={20} />
              <label htmlFor="calender" className="font-sansation">Select Date</label>
              <Image src={DownArrow} alt="Location" width={18} height={10} />
              <input id="calender" type="date" className="datepicker-input" />
            </span>
          </div>
          {/* hour select input field  */}
          <div id="hour" className="time">
            <select
              name="hour"
              id="hour"
              style={{ outline: "none", width: "100%" }}
            >
              {HOUR.map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <Image
              className="arrow"
              src={DownArrow}
              alt="Downarrow"
              width={18}
              height={10}
            />
          </div>
          {/* minute select input field  */}
          <div className="time">
            <select
              name="minute"
              id="minute"
              style={{ outline: "none", width: "100%" }}
            >
              {MINUTE.map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <Image
              className="arrow"
              src={DownArrow}
              alt="Downarrow"
              width={18}
              height={10}
            />
          </div>
        </div>
        <div>
          <label className="checkBoxContainer font-sansation">
            Please exclude me from any communications that involve updates,
            price adjustments, and seasonal promotions.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <button
          type="button"
          onClick={handleClick}
          style={{ backgroundColor: "#2591FE", borderRadius: "8px" }}
          className="flex flex-row justify-center items-center gap-2 text-white text-lg font-bold w-full p-6 font-bromega"
        >
          Get my car valuation
          <RightAngle />
        </button>
      </div>
    </div>
  );
};

export default LeftSideForm;
