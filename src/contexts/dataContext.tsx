"use client";

import { ReactNode, createContext, useState } from "react";
import React from "react";


export interface CarData {
  registration: string;
  mileage: string;
}

export interface ValueProps {
  carData: CarData;
  details: {};
  setCarData: React.Dispatch<React.SetStateAction<CarData>>;
  setDetails: React.Dispatch<React.SetStateAction<{}>>;
}

export const DataContext = createContext({});

export function AllData({ children }: { children: ReactNode }) {
  const [carData, setCarData] = useState<CarData>({
    registration: "",
    mileage: "",
  });
  const [details, setDetails] = useState({});

  // useEffect(()=>{
  //   console.log(details)
  // }, [details])

  const values = { carData, setCarData, details, setDetails };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
