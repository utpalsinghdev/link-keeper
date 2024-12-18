import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div
      className=" bg-gradient-to-b from-blue-50 to-white flex  gap-4 mt-28 md:mt-20 
    "
    >
      <div className="flex gap-4 mx-10 my-10">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;
