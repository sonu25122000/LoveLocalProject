import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiArrowUpDownFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#1E293B] text-white p-4 pt-9">
      <h2 className="font-bold text-xl mb-6">Pages</h2>
      <ul className="pl-7">
        <div className="flex mb-2 bg-black p-2 rounded items-center gap-4 hover:text-blue-300">
          <li>
            <MdSpaceDashboard color="blue" size={20} />
          </li>
          <li className="  cursor-pointer">Dashboard</li>
        </div>
        <div className="flex items-center gap-4 hover:text-blue-300">
          <li>
            <RiArrowUpDownFill size={20} />
          </li>
          <li className="cursor-pointer">Customer</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
