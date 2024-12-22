import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";

const Navbar = () => {
  return (
    <div className="container mt-2 mx-auto flex justify-between items-center p-4">
      <div className="flex-row flex gap-5">
        <img src="/logo.png" alt="logo" className="h-10 w-10 " />
        <div className="text-blue-800 text-4xl font-bold font-serif italic">
          Link-Keeper
        </div>
      </div>
      <div>
        <Link
          href={"/login"}
          className=" text-blue-700
           text-sm font-semibold mx-2"
        >
          Log in
        </Link>
        <ButtonLink name={"Get started"} url={"/login"} />
      </div>
    </div>
  );
};

export default Navbar;
