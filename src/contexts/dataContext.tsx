"use client";

import { ReactNode, createContext, useState, useEffect } from "react";
import React from "react";

export const DataContext = createContext({});

export function AllData({ children }: { children: ReactNode }) {
  const [reg, setReg] = useState("");
  const [details, setDetails] = useState({});

  const data = { reg, setReg, details, setDetails };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
