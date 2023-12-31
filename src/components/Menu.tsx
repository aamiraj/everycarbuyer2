import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "../assets/menu.svg";
import Link from "next/link";

const MenuOptions = () => {
  return (
    <div className="absolute top-[40px] right-0 rounded-lg bg-gray-100 px-4 z-50">
      <ul className="text-black">
        <li className="my-2">
          <Link href="/" className="hover:text-[#299cff]">Home</Link>
        </li>
        <li className="my-2">
          <Link href="/details" className="hover:text-[#299cff]">Details</Link>
        </li>
      </ul>
    </div>
  );
};

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <span onClick={() => setOpen((prev) => !prev)}>
        <Image src={MenuIcon} width={22} height={26} alt="menu" />
      </span>
      {isOpen && <MenuOptions />}
    </div>
  );
};

export default Menu;
