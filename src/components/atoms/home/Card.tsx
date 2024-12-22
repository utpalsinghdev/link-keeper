/* eslint-disable @typescript-eslint/no-explicit-any */
import { GalleryVerticalEnd } from "lucide-react";
import React from "react";

const Card = ({ color, face, des, title }: any) => {
  return (
    <div className=" p-5 cursor-pointer rounded-md flex flex-col items-center justify-center">
      <div
        style={{
          border: `1px dashed ${color}`,
        }}
        className="flex justify-center items-center  rounded-full w-max  "
      >
        <div
          style={{
            backgroundColor: `${color}`,
          }}
          className={`p-5 ${
            face === "left" ? "mr-[3px]" : "ml-[3px]"
          } w-max mt-[3px] rounded-full flex items-center justify-center`}
        >
          <GalleryVerticalEnd className="text-white" />
        </div>
      </div>
      <div className="flex-col items-start gap-5 text-3xl md:text-4xl xl:text-5xl">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>
      <p className="text-sm text-center text-gray-700 italic">{des}</p>
    </div>
  );
};

export default Card;
