import React from "react";
import { IoFilter } from "react-icons/io5";
import DateRangePicker from "./DateRangePicker";

const HeaderSection = () => {
  return (
    <div className=" p-6 rounded-lg ">
      {/* Top Section - Greeting */}
      <div className="mb-4 bg-blue-100 p-5">
        <h1 className="text-2xl font-bold text-gray-800">
          Good afternoon, Anujith 👋
        </h1>
        <p className="text-sm text-gray-600">Here is what’s happening today</p>
      </div>
      {/* Bottom Section - Profile Group and Date Selector */}
      <div className="flex justify-between items-center">
        {/* Profile Group */}
        <div className="flex items-center -space-x-2">
          <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="User 1"
            className="w-10 h-10 rounded-full  border-white"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="User 2"
            className="w-10 h-10 rounded-full  border-white"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="User 2"
            className="w-10 h-10 rounded-full  border-white"
          />
          <div
            className="w-9 h-9 rounded-full bg-gray-300 border-white flex items-center justify-center"

            // className="w-10 h-10 bg-gray-300 text-gray-800 font-medium flex items-center justify-center rounded-full border-2 border-white"
          >
            +
          </div>
        </div>

        {/* Date Selector */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500 space-x-2 border-gray-200   rounded-lg border py-2 px-3 bg-white">
            <IoFilter size={25} />
          </span>
          <DateRangePicker />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
