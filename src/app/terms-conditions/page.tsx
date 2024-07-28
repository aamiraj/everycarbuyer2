import GoToTopButton from "@/components/GoToTopButton";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const Page = () => {
  return (
    <div>
      
      <section id="">
        <div className="w-11/12 h-[200px] flex items-center justify-center">
          <h1>This is terms and conditions page</h1>
        </div>
      </section>
      
      <GoToTopButton />
    </div>
  );
};

export default Page;
