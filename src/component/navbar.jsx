import React from "react";
import { IoChatbubbles } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-16 p-4 flex justify-end bg-white items-center shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <CiSearch size={20} />
        </div>
        <IoChatbubbles size={20} />
        <IoIosInformationCircle size={20} />
        <div className="flex items-center space-x-2">
          <span className="text-sm font-normal">Sonu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
