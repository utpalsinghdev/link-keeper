import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

import React from "react";

const Tools = () => {
  const acc = [
    {
      title: "Link Management",
      description:
        "Easily add, edit, and organize your links with a user-friendly interface.",
    },
    {
      title: "Link Categories",
      description:
        "Group your links into categories for better organization and easy navigation.",
    },
    {
      title: "Search Functionality",
      description:
        "Quickly find any link using the search bar, no matter how many links you have stored.",
    },
    {
      title: "Analytics",
      description:
        "Track the performance of your links and see how often they're clicked.",
    },
    {
      title: "Secure Storage",
      description:
        "Keep all your links safe with encrypted storage and secure access.",
    },
    {
      title: "Mobile-Friendly",
      description:
        "Access your links easily on any device, with a responsive design that works on both desktop and mobile.",
    },
  ];
  return (
    <div className=" px-14">
      <div className="flex w-full flex-col ">
        <div className="flex  flex-col gap-6 items-center justify-center">
          <h1 className="font-extrabold text-6xl ">All the essential Tools</h1>
          <p className="text-xl italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eius?
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between justify-center  py-14 md:px-14 w-full ">
          <div className="md:w-[50%] w-full flex justify-center items-center">
            <Image
              src={"/Col.png"}
              width={1920}
              height={1080}
              alt="col-png"
              className="h-[35rem] lg:h-[40rem]  w-max "
            />
          </div>
          <div className="md:w-[50%] px-2 w-full flex items-center justify-center">
            <Accordion
              type="single"
              collapsible
              className="w-full  flex flex-col gap-1"
            >
              {acc.map((i, key) => (
                <AccordionItem
                  key={key}
                  className="border-b-0 border-l-2 border-blue-400 pl-4"
                  value={`item-${key}`}
                >
                  <AccordionTrigger className="font-semibold">
                    {i.title}
                  </AccordionTrigger>
                  <AccordionContent>{i.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
