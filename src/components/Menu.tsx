"use client";

import Image from "next/image";
import React from "react";
import MenuIcon from "../assets/menu.svg";
import Link from "next/link";

const Menu = () => {
  const handleMenu = (id: string) => {
    const menu = document.getElementById(id) as HTMLElement;
    const maxHeightValue = parseInt(menu.style.maxHeight.replace("px", ""));

    if (maxHeightValue > 0) {
      menu.style.maxHeight = "0px";
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer hover:bg-gray-200 p-2 rounded-full transition-all"
        onClick={() => handleMenu("menu-options")}
      >
        <Image src={MenuIcon} width={22} height={26} alt="menu" quality={100} />
      </div>
      <MenuOptions />
    </div>
  );
};

export default Menu;

const MenuOptions = () => {
  return (
    <div
      id="menu-options"
      style={{ maxHeight: "0px" }}
      className="menu-panel w-48 absolute top-[40px] right-0 rounded-lg bg-gray-50 px-4 z-50 shadow-lg"
    >
      <ul className="text-black">
        <li className="my-2">
          <Link href="/" className="hover:text-[#299cff]">
            Home
          </Link>
        </li>
        <li className="my-2">
          <Link href="#guide" className="hover:text-[#299cff]">
            How It Works
          </Link>
        </li>
        <li className="my-2">
          <Link href="#reason" className="hover:text-[#299cff]">
            Why Choose Us
          </Link>
        </li>
        <li className="my-2">
          <Link href="#testimonials" className="hover:text-[#299cff]">
            Testimonials
          </Link>
        </li>
        <li className="my-2">
          <Link href="#commitment" className="hover:text-[#299cff]">
            Expert Deal
          </Link>
        </li>
        <li className="my-2">
          <Link href="#offer" className="hover:text-[#299cff]">
            Highest Offer
          </Link>
        </li>
      </ul>
    </div>
  );
};
