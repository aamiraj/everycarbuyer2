import Image from "next/image";
import React from "react";
import Trustpilot from "../assets/trustpilot.png";

const FinalMessage = () => {
  return (
    <div className="finalMessage">
      <div className="innerFinalMessage">
        <p
          style={{ fontSize: "32px", padding: "0" }}
          className="font-bold text-center font-bromega text-white"
        >
          Everycarbuyer - Sell Your Car Fast, Get the Best Offer!
        </p>
        <p
          style={{
            fontSize: "18px",
            padding: "0",
            width: "512px",
            margin: "auto",
          }}
          className="font-regular text-center font-bromega text-white"
        >
          Expert Team with a Personal Touch - Sell Your Car in 24 Hours!
          Negotiate Your Price, Never Settle for Less!
        </p>
        <div className="imgContainer">
          <Image src={Trustpilot} alt="trustpilot" width={345} />
        </div>
      </div>
    </div>
  );
};

export default FinalMessage;
