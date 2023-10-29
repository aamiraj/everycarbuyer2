import Image from "next/image";
import React from "react";
import Envelope from "../assets/envelope.png";
import Telephone from "../assets/telephone.png";
import Location from "../assets/location.png";

const BigForm = () => {
  return (
    <div className="formGrid">
      <div style={{padding: "40px", borderRadius: "10px"}} className="bg-white">
        <h1 style={{ fontSize: "28px", margin: "24px", color: "#2591FE" }} className="font-bold">
          Your offer is guaranteed for 4 days
        </h1>
        <div style={{gap: "16px"}} className="flex flex-col my-4 items-center ">
            {/* input group for email  */}
          <div className="w-full flex flex-row gap-0">
            <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
              <Image
                src={Envelope}
                alt="Envelope"
                width={22}
                height={14}
              />
            </span>
            <input
              type="text"
              placeholder="Email address (So that we can keep you updated)"
              className="w-full p-4 text-black font-bold rounded-r-md border border-[#2591FE] outline-none"
            />
          </div>
          {/* input group for call  */}
          <div className="w-full flex flex-row gap-0">
            <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
              <Image
                src={Telephone}
                alt="Telephone"
                width={22}
                height={20}
              />
            </span>
            <input
              type="text"
              placeholder="Mobile (For our team to reach you)"
              className="w-full p-4 text-black font-bold rounded-r-md border border-[#2591FE] outline-none"
            />
          </div>
          {/* location input field  */}
          <div className="w-full flex flex-row gap-0">
            <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
              <Image
                src={Location}
                alt="Location"
                width={22}
                height={20}
              />
            </span>
            <input
              type="text"
              placeholder="Postcode (Convenient collection)"
              className="w-full p-4 text-black font-bold rounded-r-md border border-[#2591FE] outline-none"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BigForm;
