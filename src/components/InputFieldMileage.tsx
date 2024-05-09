import Image from "next/image";
import React from "react";
import Car from "../assets/car.svg";
import { CarData, DataContext } from "@/contexts/dataContext";

const InputFieldMileage = () => {
  const { carData, setCarData }: any = React.useContext(DataContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarData((c: CarData) => ({ ...c, mileage: event.target.value }));
  };

  return (
    <div className="w-full flex flex-row gap-0 border border-[#2591FE] rounded-lg">
      <span className="bg-white p-2 flex flex-col gap-1 justify-center items-center rounded-l-lg rounded-r-none">
        <Image src={Car} alt="United Kingdom" width={36} height={23} quality={100} />
      </span>
      <input
        type="text"
        placeholder="MILEAGE"
        className="w-full p-4 text-black font-bold rounded-xl outline-none"
        defaultValue={carData?.mileage}
        onChange={handleInput}
      />
    </div>
  );
};

export default InputFieldMileage;
