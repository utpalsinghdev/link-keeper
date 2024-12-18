import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

import React from "react";

const Focus = () => {
  const acc = [
    {
      title: "Prioritize Important Links",
      description:
        "Easily categorize and prioritize links that matter most to you, ensuring quick access to what’s essential.",
    },
    {
      title: "Clutter-Free Interface",
      description:
        "A clean and minimalistic design that removes distractions and allows you to focus on managing your most important links.",
    },
    {
      title: "Smart Search Filters",
      description:
        "Find the links that are truly important with smart filters and search options, helping you save time and focus on key resources.",
    },
    {
      title: "Personalized Link Recommendations",
      description:
        "Get personalized link suggestions based on your activity, helping you focus on links you may need more often.",
    },
    {
      title: "Quick Access Shortcuts",
      description:
        "Create custom shortcuts to your most important links, allowing faster access to the content that truly matters.",
    },
    {
      title: "Link Prioritization Tags",
      description:
        "Tag links with priority levels to keep your focus on what’s most urgent or important.",
    },
    {
      title: "Remove Unnecessary Links",
      description:
        "Effortlessly delete or archive outdated or irrelevant links to reduce clutter and keep your collection streamlined.",
    },
  ];
  return (
    <div className="px-14">
      <div className="flex w-full flex-col ">
        <div className="flex  flex-col gap-6 items-center justify-center">
          <h1 className="font-extrabold text-4xl ">Focus On What Matters</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eius?
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between justify-center  py-14 md:px-14 w-full ">
          <div className="md:w-[50%] w-full flex justify-center items-center">
            <Image
              src={"/col2.png"}
              width={1920}
              height={1080}
              alt="col-png"
              className="h-[30rem] w-max "
            />
          </div>
          <div className="md:w-[50%] px-2 w-full flex items-center justify-center">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-1"
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

export default Focus;
