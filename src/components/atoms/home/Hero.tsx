import React from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="container flex items-center w-full px-6 mx-auto flex-col md:flex-row lg:flex-row gap-28 md:gap-0
     "
    >
      <div className="md:w-[50%] w-full  ">
        <div className="text-center md:text-left ">
          <div className="text-5xl md:text-5xl xl:text-[4rem] font-extrabold pt-6 md:pt-16 flex flex-col gap-3  ">
            <h1 className="flex ">Building Apps </h1>
            <h1>Just Got Easier</h1>
          </div>

          <p className="text-base  pt-4  pb-6 md:pb-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            id aperiam voluptatem perferendis voluptates voluptate deleniti
            accusantium sequi similique porro maiores molestias hic consequuntur
            enim ullam, iste aliquam eligendi dolor fugiat, maxime rem voluptas!
            Consectetur officia nam animi totam fuga, maxime sint ipsa
            perspiciatis, labore harum, laborum autem soluta hic!
          </p>
        </div>
      </div>
      <div className="w-[50%]  ">
        <div className="flex justify-center items-center relative ">
          <div
            className="w-40 h-40 bg-blue-600 rounded-full blur-3xl
            opacity-80 flex items-center justify-center transform "
          />
          <Image
            width={1080}
            height={1920}
            src={"/iPhone.png"}
            alt="phone"
            className="absolute z-50 h-96
             w-52"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
