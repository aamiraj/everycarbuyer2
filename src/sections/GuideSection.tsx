import GuideCard from "@/components/GuideCard";
import Heading from "@/components/Heading";
import { cardData } from "@/data/cardData";
import React from "react";

const GuideSection = () => {
  return (
    <div style={{ margin: "48px 0" }}>
      <Heading content="How it" marked="works" rest="" />
      <div className="guideGrid">
        {cardData.map((data, i) => (
          <GuideCard
            key={i}
            id={data.id}
            img={data.img}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default GuideSection;
