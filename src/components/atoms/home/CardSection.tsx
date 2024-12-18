/* eslint-disable react/jsx-key */
import React from "react";
import Card from "./Card";

const CardSection = () => {
  const cards = [
    {
      color: "red",
      title: "Title-1",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit aliquid sit reiciendis  ",
      face: "right",
    },
    {
      color: "orange",
      title: "Title-2",
      des: "Lorem m.jlun hu ,h  u hnu,hb unhu j gbyu uh ubu u hnu hu 8u hu hnuu",
      face: "right",
    },
    {
      color: "blue",
      title: "Title-3",
      des: "Lorem m.jlun hu ,h  u hnu,hb unhu j gbyu uh ubu u hnu hu 8u hu hnuu",
      face: "left",
    },
  ];
  return (
    <div
      className=" bg-gradient-to-b from-blue-50 to-white flex  gap-4 mt-32 md:mt-20 
    "
    >
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 mx-10 my-10">
        {cards.map((i, key) => (
          <Card
            key={key}
            color={i.color}
            title={i.title}
            des={i.des}
            face={i.face}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
