"use client";

import TestimonialCard from "@/components/TestimonialCard";
import { testimonialData } from "@/data/tesimonialData";
import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <p
        style={{ padding: "72px" }}
        className="font-bold text-3xl text-center font-bromega text-white"
      >
        Testimonials
      </p>
      <div className="testimonialCard">
        {testimonialData.map((testmonial, i) => (
          <TestimonialCard
          key={i}
            profileImg={testmonial.profileImg}
            name={testmonial.displayName}
            comment={testmonial.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
