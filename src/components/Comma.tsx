import React from "react";
import CommaIcon from "../assets/comma.svg";
import Image from "next/image";

const Comma = () => { 
  return <Image src={CommaIcon} width={42} height={28} alt="comma" className="my-4" />;
};

export default Comma;
