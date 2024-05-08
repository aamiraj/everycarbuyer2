import React from "react";
import { HeaderNavBar } from "@/components/HeaderNavBar";
import SubmissionHeader from "@/sections/SubmissionHeader";
import HowItWorks from "@/sections/HowItWorks";
import FooterSection from "@/sections/FooterSection";
import FinalMessage from "@/sections/FinalMessage";
import GoToTopButton from "@/components/GoToTopButton";

const page = () => {
  return (
    <main className="max-width-1600">
      <header id="navbar">
        <HeaderNavBar />
      </header>
      <section id="submissionHeader">
        <SubmissionHeader />
      </section>
      <section id="guide">
        <HowItWorks />
      </section>
      <section id="finalmessage">
        <FinalMessage />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
      <GoToTopButton />
    </main>
  );
};

export default page;
