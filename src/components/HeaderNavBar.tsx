"use client";

import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Menu from "./Menu";

export function HeaderNavBar() {
  return (
    <nav className="w-full mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <Image
          src={Logo}
          alt="every car buyer logo"
          width={242}
          height={35}
          quality={100}
        />
        <Menu />
      </div>
    </nav>
  );
}
