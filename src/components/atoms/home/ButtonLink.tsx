import React from "react";
import Link from "next/link";

function ButtonLink({ url, name }: { name: string; url: string }) {
  return (
    <Link
      href={url}
      className=" bg-blue-700 rounded-md text-white px-4 py-2 text-sm"
    >
      {name}
    </Link>
  );
}

export default ButtonLink;
