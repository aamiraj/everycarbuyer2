import React from "react";

const RightSideDetails = () => {
  return (
    <div style={{ padding: "40px", borderRadius: "10px" }} className="font-bromega">
      <h1
        style={{ fontSize: "28px", margin: "24px 0", color: "#fff" }}
        className="font-bold"
      >
        Your Details
      </h1>
      <div className="carinfogrid">
        <p className="carInfo font-bold text-2xl">DK11SSX</p>
        <p
          style={{ backgroundColor: "#0070D1" }}
          className="carInfo font-bold text-2xl"
        >
          80000
        </p>
      </div>
      <div className="addtionalcarinfo">
        <p>Manufacturer: AUDI</p>
        <p>Model: A3 SPORTBACK SPECIAL EDITIONS -</p>
        <p>2.0 TDI 170 Quattro Black Edition 5dr</p>
        <p>Year: 2011</p>
        <p>Colour: White</p>
        <p>Transmission: Manual</p>
        <p>Engine Size: 2000</p>
        <p>First Registered: 05/04/2011</p>
      </div>
    </div>
  );
};

export default RightSideDetails;
