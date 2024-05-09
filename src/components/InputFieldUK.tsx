"use client";

import Image from "next/image";
import React from "react";
import UK from "../assets/gb.svg";
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
    <div className="w-full flex flex-row gap-0 border border-[#2591FE] rounded-lg">
      <div className="bg-[#299CFF] p-2 flex flex-col gap-1 items-center rounded-l-md rounded-r-none">
        <Image src={UK} alt="United Kingdom" width={36} height={22} quality={100} />
        <span className="text-white text-xs font-bold">UK</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Reg"
        className="w-full px-4 py-2 text-black font-bold outline-none rounded-xl"
        style={{ textTransform: "uppercase" }}
        defaultValue={carData?.registration}
        onChange={handleInput}
      />
    </div>
  );
};

export default InputFieldUK;
