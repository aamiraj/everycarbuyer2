import Image from "next/image";
import React from "react";
import ThankYou from "../assets/thankyou.png";

const SubmissionHeader = () => {
  return (
    <div className="submissionHeader">
      <div className="thanksContainer">
        <div className="thanksImgContainer">
          <div className="thanksImg">
            <Image src={ThankYou} alt="thank you" width={200} />
          </div>
        </div>
        <div className="thankYouNote">
          <h1>Thank you for submitting your information</h1>
          <p>
            We&apos;re thrilled to have you on board! <br /> We&apos;ll
            carefully review the details you provide and within just 30 <br />{" "}
            minutes, our team will be in touch with you. Rest easy and get ready
            for <br /> a delightful journey with Everycarbuyer! We&apos;re
            excited to serve you and <br /> help you make the best decision for
            your car. Let&apos;s make this <br /> experience enjoyable and
            hassle-free together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmissionHeader;
