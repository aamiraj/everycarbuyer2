import LeftSideForm from "@/components/LeftSideForm";
import RightSideDetails from "@/components/RightSideDetails";
import React from "react";

const BigForm = () => {
  return (
    <div className="formGrid">
      <LeftSideForm />
      <RightSideDetails />
    </div>
  );
};

export default BigForm;
