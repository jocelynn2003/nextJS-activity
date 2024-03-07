import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-10 text-lg justify-center text-pink-900 m-2 p-0 font-bold px-4">
      <Link className=" hover:text-black" href="/home">
        HOME
      </Link>
      <Link className=" hover:text-black" href="/home">
        CATEGORIES
      </Link>
      <Link className=" hover:text-black" href="/home">
        MEN
      </Link>
      <Link className=" hover:text-black" href="/home">
        WOMEN
      </Link>
      <Link className=" hover:text-black" href="/home">
        BEAUTY
      </Link>
      <Link className=" hover:text-black" href="/home">
        JEWELRY
      </Link>
      <Link className=" hover:text-black" href="/home">
        HOT DEALS
      </Link>
    </div>
  );
};

export default Navbar;
