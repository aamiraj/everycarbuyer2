import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import UkMapImage from "../assets/ukmap_black.svg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const FooterSection = () => {
  return (
    <footer className="footerSection">
      <div className="footerGrid">
        <div>
          <FooterLogo />
          <SocialLinks />
          <UkMap />
        </div>
        <UseFullLinks />
        <QueriesInfo />
        <AddressInfo />
      </div>
      <Divider />
      <CopyRight />
    </footer>
  );
};

export default FooterSection;

const FooterLogo = () => (
  <ul>
    <li>
      <Link
        href={"#"}
        className="font-bromega font-bold text-3xl md:text-4xl text-white block py-4"
      >
        every
        <span
          style={{ color: "#2591FE" }}
          className="font-bromega font-bold text-3xl md:text-4xl"
        >
          car
        </span>
        buyer
      </Link>
    </li>
    <li>
      <p className="text-[#727272] font-poppins text-base">
        Best Offers for Every Car - Your Trusted Buyer.
      </p>
    </li>
  </ul>
);

const SocialLinks = () => (
  <div className="flex flex-row gap-2 justify-start items-center py-4">
    <Link
      href={"#"}
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "4px",
        borderRadius: "50%",
      }}
      className="flex items-center justify-center"
    >
      <FaInstagram style={{ fontSize: "16px" }} className="text-white" />
    </Link>
    <Link
      href={"#"}
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "4px",
        borderRadius: "50%",
      }}
      className="flex items-center justify-center"
    >
      <FaFacebook style={{ fontSize: "16px" }} className="text-white" />
    </Link>
    <Link
      href={"#"}
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "4px",
        borderRadius: "50%",
      }}
      className="flex items-center justify-center"
    >
      <FaTwitter style={{ fontSize: "16px" }} className="text-white" />
    </Link>
  </div>
);

const UseFullLinks = () => (
  <div className="py-4">
    {/* <h1 className="font-bold text-lg my-4">Useful Links</h1> */}
    <ul>
      <li>
        <Link href={"#"}>Guides</Link>
      </li>
      <li>
        <Link href={"#"}>Privacy Policy</Link>
      </li>
      <li>
        <Link href={"/terms-conditions"}>Terms & Conditions</Link>
      </li>
      <li>
        <Link href={"#"}>Contact Us</Link>
      </li>
    </ul>
  </div>
);

const QueriesInfo = () => (
  <div>
    <div className="py-4">
      <h1 className="font-bold text-lg ">General Queries</h1>
      <p className="">everycarbuyer@gmail.com</p>
    </div>
    <div className="py-4">
      <h1 className="font-bold text-lg ">Customer Queries</h1>
      <p className="">07857380252</p>
    </div>
  </div>
);

const AddressInfo = () => (
  <div className="py-4">
    <h1 className="font-bold text-lg ">Address</h1>
    <ul className="">
      <li>Bradford Road, Huddersfield,</li>
      <li>West Yorkshire, HD16LQ</li>
    </ul>
  </div>
);

const Divider = () => (
  <div style={{ border: "1px solid #EAEEF3", margin: "40px 0" }} />
);

const CopyRight = () => (
  <div>
    <p className={`${inter.className} text-center text-sm px-5 py-10`}>
      &copy; Everycarbuyer {new Date().getFullYear()} - All Rights Reserved
    </p>
  </div>
);

const UkMap = () => (
  <div className="py-4">
    <h1 className="font-bold text-lg ">We Cover The Whole UK</h1>
    <Image src={UkMapImage} width={300} alt="ukmap" />
  </div>
);
