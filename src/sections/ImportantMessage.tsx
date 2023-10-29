import Image from "next/image";
import React from "react";
import Trustpilot from "../assets/trustpilot.png";

const ImportantMessage = () => {
  return (
    <div className="messageContainer">
      <p style={{margin: "40px"}} className="text-center">
        When you receive a valuation,you agree to every car buyer&apos;s terms
        and conditions. You will receive a copy of your valuation via email and
        SMS, along with <br /> instructions on how to book an appointment.<br /> We understand that the valuation of your car can fluctuate, and
        the decision to sell your car requires careful consideration.
        That&apos;s why we keep you updated <br /> every step of the way.
        We&apos;ll provide regular updates regarding your valuation and vehicle,
        ensuring you&apos;re informed about any changes, if there are any.
      </p>
      <div className="imgContainer">
      <Image src={Trustpilot} alt="trustpilot" width={345} />
      </div>
    </div>
  );
};

export default ImportantMessage;
