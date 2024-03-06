import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-24 text-lg justify-end text-pink-900 m-6 p-5">
      <Link className=" hover:text-black" href="/home">
        HOME
      </Link>
      <Link className=" hover:text-black" href="/home">
        ABOUT
      </Link>
      <Link className=" hover:text-black" href="/home">
        ORDERS
      </Link>
      <Link className=" hover:text-black" href="/home">
        LOGIN
      </Link>
    </div>
  );
};

export default Navbar;
