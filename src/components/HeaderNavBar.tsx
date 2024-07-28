import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Menu from "./Menu";
import Link from "next/link";

export function HeaderNavBar() {
  return (
    <nav className="w-full mx-auto headerNavbar">
      <div className="flex items-center justify-between">
        {/* <Link href={"/"}>
          <Image
            src={Logo}
            alt="every car buyer logo"
            width={242}
            height={35}
            quality={100}
          />
        </Link> */}
        <Link href={"/"} className="font-bromega font-bold text-2xl md:text-4xl text-black">
          every
          <span
            style={{ color: "#2591FE" }}
            className="font-bromega font-bold text-2xl md:text-4xl"
          >
            car
          </span>
          buyer
        </Link>

        <Menu />
      </div>
    </nav>
  );
}
