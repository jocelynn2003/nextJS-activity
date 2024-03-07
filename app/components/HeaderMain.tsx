import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold font-mono text-8xl text-center px-2 pb-4 sm:pb-0 text-black">
          JNS
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-600 border p-2 px-2 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name.."
          />
          <CiSearch
            className="flex absolute right-2 top-0 mr-2 mt-1 text-gray-300"
            size={30}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-800 text-[30px]">
          <LuUser2 />
          <div className="relative">
            <CiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <CiShoppingCart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
