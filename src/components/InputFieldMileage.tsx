import Image from "next/image";
import React from "react";
import Car from "../assets/car.png";
import { CarData, DataContext } from "@/contexts/dataContext";
import { cardData } from "@/data/cardData";

const InputFieldMileage = () => {
  const { carData, setCarData }: any = React.useContext(DataContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarData((c: CarData) => ({ ...c, mileage: event.target.value }));
  };

  return (
    <div className="w-full flex flex-row gap-0">
      <span className="bg-white p-2 flex flex-col gap-1 justify-center items-center rounded-l-md border-t border-b border-l border-[#2591FE] ">
        <Image src={Car} alt="United Kingdom" width={36} height={23} />
      </span>
      <input
        type="text"
        placeholder="MILEAGE"
        className="w-full p-4 text-black font-bold rounded-r-md border-t border-b border-r border-[#2591FE] outline-none"
        defaultValue={carData?.mileage}
        onChange={handleInput}
      />
    </div>
  );
};

export default InputFieldMileage;
