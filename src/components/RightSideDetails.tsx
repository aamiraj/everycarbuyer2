"use client"

import { DataContext } from "@/contexts/dataContext";
import React, { useContext } from "react";

const RightSideDetails = () => {
  const { details }: any = useContext(DataContext);

  return (
    <div
      style={{ padding: "40px", borderRadius: "10px" }}
      className="font-bromega"
    >
      <h1
        style={{ fontSize: "28px", margin: "24px 0", color: "#fff" }}
        className="font-bold"
      >
        Your Details
      </h1>
      <div className="carinfogrid">
        <p className="carInfo font-bold text-2xl">
          {details?.registrationNumber}
        </p>
        <p
          style={{ backgroundColor: "#0070D1" }}
          className="carInfo font-bold text-2xl"
        >
          80000
        </p>
      </div>
      <div className="addtionalcarinfo">
        <p>
          Manufacturer: <span>{details?.make}</span>
        </p>
        <p>
          Wheel Plan: <span>{details?.wheelplan}</span>
        </p>
        <p>
          Motor Expiry Data: <span>{details?.motExpiryDate}</span>
        </p>
        <p>
          Year: <span>{details?.yearOfManufacture}</span>
        </p>
        <p>
          Colour: <span>{details?.colour}</span>
        </p>
        <p>
          Fuel Type: <span>{details?.fuelType}</span>
        </p>
        <p>
          Engine Size: <span>{details?.engineCapacity}</span>
        </p>
        <p>
          First Registered: <span>{details?.monthOfFirstRegistration}</span>
        </p>
      </div>
    </div>
  );
};

export default RightSideDetails;
