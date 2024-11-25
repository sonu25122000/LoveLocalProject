import React from "react";
import "./App.css"; // Add your CSS or import Tailwind
import Overview from "./component/Overview";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import HeaderSection from "./component/Header";
import DateRangePicker from "./component/DateRangePicker";

const App = () => {
  return (
    <div className="dashboard-container flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 h-full bg-gray-800 text-white fixed" />

      {/* Main Content */}
      <div className="main-content flex flex-col flex-1 overflow-y-auto">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-10">
          <Navbar />
        </div>

        {/* Add padding to account for fixed Navbar */}
        <div className="pt-16">
          <HeaderSection />
          <Overview />
        </div>
      </div>
    </div>
  );
};

// Card Component

export default App;
