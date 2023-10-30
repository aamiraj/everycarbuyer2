import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const FooterSection = () => {
  return (
    <footer className="footerSection">
      <div className="footerGrid">
        <div>
          <Link
            href={"#"}
            style={{ display: "block", padding: "16px 0" }}
            className="font-bromega font-bold text-4xl text-white"
          >
            every
            <span
              style={{ color: "#2591FE" }}
              className="font-bromega font-bold text-4xl"
            >
              car
            </span>
            buyer
          </Link>
          <p
            style={{ width: "250px", color: "#727272" }}
            className="font-poppins text-base"
          >
            This Bucheen is so cool, I found the partner I wanted. and it&apos;s very
            easy to use
          </p>
          <div
            style={{ padding: "16px" }}
            className="flex flex-row gap-2 justify-start items-center"
          >
            <Link
              href={"#"}
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "4px",
                borderRadius: "50%"
              }}
              className="flex items-center justify-center"
            >
              <FaInstagram
                style={{ fontSize: "16px" }}
                className="text-white"
              />
            </Link>
            <Link
              href={"#"}
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "4px",
                borderRadius: "50%"
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
                borderRadius: "50%"
              }}
              className="flex items-center justify-center"
            >
              <FaTwitter style={{ fontSize: "16px" }} className="text-white" />
            </Link>
            <Link
              href={"#"}
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "4px",
                borderRadius: "50%"
              }}
              className="flex items-center justify-center"
            >
              <FaInstagram
                style={{ fontSize: "16px" }}
                className="text-white"
              />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg my-4">Useful Links</h1>
          <ul>
            <li>
              <Link href={"#"}>Reseller Pricing</Link>
            </li>
            <li>
              <Link href={"#"}>IMEI Service</Link>
            </li>
            <li>
              <Link href={"#"}>Server Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link style={{display: "block", margin: "16px 0"}} href={"#"} className="font-bold text-lg">Subscribe</Link>
          <p>Don&apos;t miss our future updates! Get Subscribed now!</p>
        </div>
        <div>
          <h1 className="font-bold text-lg my-4">Company</h1>
          <Link href={"#"}>Career</Link>
        </div>
        <div>
          <h1 className="font-bold text-lg my-4">Connect With Us</h1>
          <ul style={{ marginLeft: "40px" }}>
            <li style={{ listStyleType: "disc" }}>
              #Shop No: 307 & 327, 72 Rupayan Centre, Wirelessgate,
              Mohakhali.,Dhaka, Bangladesh
            </li>
            <li style={{ listStyleType: "disc" }}>01686-777333</li>
          </ul>
        </div>
      </div>
      <div style={{ border: "1px solid #EAEEF3", margin: "40px 0" }}></div>
      <div>
        <p
          style={{ padding: "40px" }}
          className={`${inter.className} text-center text-sm`}
        >
          &copy; Modern Mobile Care 2023 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
