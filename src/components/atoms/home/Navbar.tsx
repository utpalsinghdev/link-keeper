import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mt-2 mx-auto flex justify-between items-center p-4">
      <div className="text-blue-800 text-2xl font-bold">Link-Keeper</div>
      <div>
        <Link
          href={"/login"}
          className="border-white text-blue-700
           font-semibold "
        >
          Log in
        </Link>
        <Link
          href={"/login"}
          className="m-2 bg-blue-700 rounded-md text-white p-2 font-medium"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
