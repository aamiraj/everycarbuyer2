"use client";

import { ReactNode, createContext, useState, useEffect } from "react";
import React from "react";

export const DataContext = createContext({});

export function AllData({ children }: { children: ReactNode }) {
  const [reg, setReg] = useState("");
  const [details, setDetails] = useState({});

  //   const url =
  //     "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles";

  //   useEffect(() => {
  //     if (!reg) return;
  //     axios
  //       .post(
  //         url,
  //         { registrationNumber: reg },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             "x-api-key": process.env.API_KEY,
  //           },
  //         }
  //       )
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   });

  const data = { reg, setReg, details, setDetails };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
