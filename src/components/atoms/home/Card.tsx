import { GalleryVerticalEnd } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="border border-gray-300 p-5 cursor-pointer rounded-md flex flex-col items-center justify-center">
      <div className="flex justify-center items-center border rounded-full w-max border-dashed border-red-600 ">
        <div className="bg-red-600 ml-[3px] mt-[3px] p-5 w-max rounded-full flex items-center justify-center">
          <GalleryVerticalEnd />
        </div>
      </div>
      <div className="flex-col items-start gap-5 text-3xl md:text-4xl xl:text-5xl">
        <h1>Joe done</h1>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aliquam!
      </p>
    </div>
  );
};

export default Card;
