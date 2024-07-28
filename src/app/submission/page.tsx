import React from "react";
import SubmissionHeader from "@/sections/SubmissionHeader";
import HowItWorks from "@/sections/HowItWorks";
import FinalMessage from "@/sections/FinalMessage";
import GoToTopButton from "@/components/GoToTopButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

const page = () => {
  return (
    <div>
      <section id="submissionHeader">
        <SubmissionHeader />
      </section>
      <section id="guide">
        <HowItWorks />
      </section>
      <section id="finalmessage">
        <FinalMessage />
      </section>
      <GoToTopButton />
    </div>
  );
};

export default page;
