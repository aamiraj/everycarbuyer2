"use client";

import { DataContext } from "@/contexts/dataContext";
import React, { useContext } from "react";
import { FaRedo } from "react-icons/fa";
import { useRouter } from "next/navigation";

// const getDetails = async (reg: any) => {
//   const res = await fetch("/api/vehicle", {
//     method: "POST",
//     body: JSON.stringify({ reg }),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const { data } = await res.json();

//   return data;
// };

const RightSideDetails = () => {
  const { carData, details }: any =
    useContext(DataContext);
  const router = useRouter();

  // const handleClick = async () => {
  //   setLoading(true);
  //   const vehicleData = await getDetails(carData?.registration);
  //   if (vehicleData?.errors) {
  //     setIsOpen(true);
  //     setMessage(vehicleData.errors[0].detail);
  //     setDetails({})
  //     setLoading(false);
  //     return;
  //   }
  //   if (vehicleData !== undefined) {
  //     setDetails(vehicleData);
  //     router.push("/details");
  //     setLoading(false);
  //   }
  // };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div
    id="rightSideDetails"
      style={{ padding: "0px 40px", borderRadius: "10px" }}
      className="font-bromega"
    >
      <h1
        style={{ fontSize: "28px", margin: "16px 0", color: "#fff" }}
        className="font-bold flex justify-between"
      >
        Your Details{" "}
        <span onClick={handleClick} className="redoButton" title="Submit Again">
          <FaRedo />
        </span>
      </h1>
      <div className="carinfogrid">
        <p className="carInfo font-bold text-2xl">
          {details?.registrationNumber}
        </p>

        <p
          style={{ backgroundColor: "#0070D1" }}
          className="carInfo font-bold text-2xl"
        >
          {carData?.mileage}
        </p>
        {/* <input
          type="text"
          id="registration"
          className="carInfo font-bold text-2xl"
          defaultValue={details?.registrationNumber}
          style={{ outline: "none", textTransform: "uppercase" }}
          onChange={(event) =>
            setCarData((c: CarData) => ({
              ...c,
              registration: event.target.value.toUpperCase(),
            }))
          }
        />

        <input
          type="text"
          id="mileage"
          style={{ backgroundColor: "#0070D1", outline: "none" }}
          className="carInfo font-bold text-2xl"
          defaultValue={carData?.mileage}
          onChange={(event) =>
            setCarData((c: CarData) => ({
              ...c,
              mileage: event.target.value,
            }))
          }
        /> */}
      </div>
      <div className="addtionalcarinfo">
        <p>
          Manufacturer: <span>{details?.make}</span>
        </p>
        {/* <p>
          Model: <span>{details?.wheelplan}</span>
        </p> */}
        <p>
          MOT Expiry Date: <span>{details?.motExpiryDate}</span>
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
