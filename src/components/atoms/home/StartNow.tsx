import React from "react";
import Image from "next/image";

const StartNow = () => {
  return (
    <div className="flex bg-blue-100 border-dashed border-2 border-blue-400">
      <div
        className="container bg-blue-100 flex items-center w-full px-4 mx-auto flex-col md:flex-row lg:flex-row gap-10 md:gap-0
     "
      >
        <div className="md:w-[50%] w-full  ">
          <div className="text-center md:text-left flex flex-col gap-3 ">
            <div className="text-[4rem]    font-extrabold pt-6 md:pt-16 flex flex-col gap-3 leading-snug ">
              <h1 className="flex ">Start now and get best services</h1>
            </div>

            <p className="text-base font-semibold px-4  pb-6 md:pb-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              id aperiam voluptatem perferendis voluptates voluptate deleniti
              accusantium sequi similique porro maiores molestias hic
            </p>
          </div>
        </div>
        <div className="md:w-[50%]  w-max">
          <div className="pt-10 pb-4">
            <div className="flex justify-center items-center ">
              <Image
                width={1080}
                height={1920}
                src={"/col2.png"}
                alt="phone"
                className="h-[35rem] lg:h-[40rem]
             w-max
             "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNow;
