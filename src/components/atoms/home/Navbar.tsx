import Link from "next/link";
import React from "react";
import ButtonLink from "./ButtonLink";

const Navbar = () => {
  return (
    <div className="container mt-2 mx-auto flex justify-between items-center p-4">
      <div className="text-blue-800 text-2xl font-bold">Link-Keeper</div>
      <div>
        <Link
          href={"/login"}
          className="border-white text-blue-700
           text-sm font-semibold"
        >
          Log in
        </Link>
        <ButtonLink name={"Get started"} url={"/login"} />
      </div>
    </div>
  );
};

export default Navbar;
