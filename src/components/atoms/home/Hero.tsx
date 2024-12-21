import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="container flex items-center w-full  mx-auto flex-col md:flex-row lg:flex-row gap-10 md:gap-0
     "
    >
      <div className="md:w-[50%] w-full  ">
        <div className="text-center md:text-left flex flex-col gap-3 ">
          <div className="text-[3rem] md:text-[5rem] xl:text-[7rem]  font-extrabold pt-6 md:pt-16 flex flex-col gap-3 leading-snug ">
            <h1 className="flex ">Building Apps Just Got Easier</h1>
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
      <div className="md:w-[50%]  w-max">
        <div className="flex justify-center items-center ">
          <Image
            width={1080}
            height={1920}
            src={"/iPhone.png"}
            alt="phone"
            className="h-[40rem] lg:h-[50rem] 
             w-max md:w[90%]
             "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
