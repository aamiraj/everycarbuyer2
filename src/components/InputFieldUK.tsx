"use client";

import Image from "next/image";
import React from "react";
import UK from "../assets/united-kingdom.png";
import { CarData, DataContext } from "@/contexts/dataContext";

const InputFieldUK = () => {
  const { carData, setCarData }: any = React.useContext(DataContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarData((c: CarData) => ({
      ...c,
      registration: event.target.value.toUpperCase(),
    }));
  };

  return (
    <div className="w-full flex flex-row gap-0">
      <span className="bg-[#299CFF] p-2 flex flex-col gap-1 items-center rounded-l-md">
        <Image src={UK} alt="United Kingdom" width={36} height={22} />
        <p className="text-white text-xs font-bold">UK</p>
      </span>
      <input
        type="text"
        placeholder="Enter your Reg"
        className="w-full p-4 text-black font-bold rounded-r-md border border-[#2591FE] outline-none"
        style={{ textTransform: "uppercase" }}
        defaultValue={carData?.registration}
        onChange={handleInput}
      />
    </div>
  );
};

export default InputFieldUK;
