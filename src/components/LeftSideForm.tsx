"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import Envelope from "../assets/envelope.png";
import Telephone from "../assets/telephone.png";
import Location from "../assets/location.png";
import Calender from "../assets/calender.svg";
import DownArrow from "../assets/downarrow.svg";
import RightAngle from "../components/RightAngle";
import { useRouter } from "next/navigation";
import { DataContext } from "@/contexts/dataContext";
import Modal from "./Modal";
import Loading from "./Loader";

const sendUserEmail = async (data: any) => {
  const res = await fetch("/api/sendMail", {
    method: "POST",
    body: JSON.stringify({ data }),
  });

  const response = await res.json();

  if (response.status !== 200) {
    const { error } = await response;
    return { message: "Some problem occured.", error: error };
  }

  const { message } = await response;
  return { message };
};

const HOUR = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

const MINUTE = ["00", "10", "20", "30", "40", "50"];

const LeftSideForm = () => {
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenFailed, setIsOpenFailed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState<any>();
  const date = new Date().toISOString();
  const today = date.slice(0, 10);
  const [userInfo, setUserInfo] = useState({
    email: "",
    phone: "",
    location: "",
    isAnyTime: true,
    date: today,
    hour: "00",
    minute: "00",
    notifyMe: false,
  });
  const router = useRouter();
  const { carData, details }: any = useContext(DataContext);

  const handleClick = async () => {
    setLoading(true);
    const response = await sendUserEmail({
      user: userInfo,
      car: { ...carData, ...details },
    });

    if (response.error) {
      setLoading(false);
      setMessage(response.message);
      setIsOpenFailed(true);
      return;
    }

    setLoading(false);
    setMessage(response.message);
    setIsOpenSuccess(true);
    router.push("/submission");
  };

  return (
    <div id="leftSideForm" style={{ padding: "0 40px", borderRadius: "10px" }} className="bg-white">
      <h1
        style={{ fontSize: "28px", margin: "24px", color: "#2591FE" }}
        className="font-bold font-sansation text-center"
      >
        Your offer is guaranteed for 4 days
      </h1>
      <div style={{ gap: "16px" }} className="flex flex-col my-4 items-center ">
        {/* input group for email  */}
        <div className="w-full flex flex-row gap-0">
          <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
            <Image src={Envelope} alt="Envelope" width={22} height={14} />
          </span>
          <input
            type="text"
            placeholder="Email address (So that we can keep you updated)"
            required
            className="w-full p-4 text-black font-normal font-bromega rounded-r-md border border-[#2591FE] outline-none"
            defaultValue={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </div>
        {/* input group for call  */}
        <div className="w-full flex flex-row gap-0">
          <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
            <Image src={Telephone} alt="Telephone" width={22} height={20} />
          </span>
          <input
            type="text"
            placeholder="Mobile (For our team to reach you)"
            className="w-full p-4 text-black font-normal font-bromega  rounded-r-md border border-[#2591FE] outline-none"
            defaultValue={userInfo.phone}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
        </div>
        {/* location input field  */}
        <div className="w-full flex flex-row gap-0">
          <span className="bg-[#299CFF] p-2 flex flex-col gap-1 justify-center items-center rounded-l-md">
            <Image src={Location} alt="Location" width={22} height={20} />
          </span>
          <input
            type="text"
            placeholder="Postcode (Convenient collection)"
            className="w-full p-4 text-black font-normal font-bromega  rounded-r-md border border-[#2591FE] outline-none"
            defaultValue={userInfo.location}
            onChange={(e) =>
              setUserInfo({ ...userInfo, location: e.target.value })
            }
          />
        </div>
        {/* check time checkbox  */}
        <div
          style={{ gap: "16px" }}
          className="w-full flex flex-col flex-wrap lg:flex-row justify-between items-center gap-4"
        >
          <div>
            <label className="checkBoxContainer font-sansation">
              Anytime
              <input
                type="checkbox"
                defaultChecked={userInfo.isAnyTime}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, isAnyTime: e.target.checked })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            {/* date picker input field  */}
            <span className="datepicker-toggle">
              <Image src={Calender} alt="Location" width={22} height={20} />
              <label htmlFor="calender" className="font-sansation">
                {userInfo.date}
              </label>
              <Image src={DownArrow} alt="Location" width={18} height={10} />
              <input
                id="calender"
                type="date"
                className="datepicker-input"
                defaultValue={userInfo.date}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, date: e.target.value })
                }
              />
            </span>
          </div>
          {/* hour select input field  */}
          <div id="hour" className="time">
            <select
              name="hour"
              id="hour"
              style={{ outline: "none", width: "100%" }}
              defaultValue={userInfo.hour}
              onChange={(e) =>
                setUserInfo({ ...userInfo, hour: e.target.value })
              }
            >
              {HOUR.map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <Image
              className="arrow"
              src={DownArrow}
              alt="Downarrow"
              width={18}
              height={10}
            />
          </div>
          {/* minute select input field  */}
          <div className="time">
            <select
              name="minute"
              id="minute"
              style={{ outline: "none", width: "100%" }}
              defaultValue={userInfo.minute}
              onChange={(e) =>
                setUserInfo({ ...userInfo, minute: e.target.value })
              }
            >
              {MINUTE.map((value, i) => (
                <option key={i} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <Image
              className="arrow"
              src={DownArrow}
              alt="Downarrow"
              width={18}
              height={10}
            />
          </div>
        </div>
        <div>
          <label className="checkBoxContainer font-sansation">
            Please exclude me from any communications that involve updates,
            price adjustments, and seasonal promotions.
            <input
              type="checkbox"
              defaultChecked={userInfo.notifyMe}
              onChange={(e) =>
                setUserInfo({ ...userInfo, notifyMe: e.target.checked })
              }
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button
          type="button"
          style={{
            backgroundColor: `${isLoading ? "#d0d0d0" : "#2591FE"}`,
            borderRadius: "8px",
          }}
          className="flex flex-row justify-center items-center gap-2 text-white text-lg font-bold w-full p-4 font-bromega"
          onClick={handleClick}
          disabled={isLoading}
        >
          Get my car valuation
          <span className={isLoading ? "rightangle" : ""}>
            <RightAngle />
          </span>
        </button>
      </div>
      {isOpenSuccess && (
        <Modal
          heading={"Successful"}
          message={message}
          setIsOpen={setIsOpenSuccess}
        />
      )}
      {isOpenFailed && (
        <Modal
          heading={"Failed"}
          message={message}
          setIsOpen={setIsOpenFailed}
        />
      )}
      {/* {isLoading && <Loading />} */}
    </div>
  );
};

export default LeftSideForm;
