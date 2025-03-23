import React from "react";
import { ArrowRight, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen w-full flex flex-col items-center">
      {/* Main Container */}
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Profile Section */}
        <div className="w-full md:w-1/4 bg-gray-200 p-25 rounded-lg shadow-lg flex flex-col items-center border border-gray-300">
          <div className="w-34 h-34 border-2 border-red-800 rounded-lg flex items-center justify-center text-red-800 text-4xl font-bold bg-white">
            <User className="w-26 h-26 text-red-800" />
          </div>
          <h2 className="text-xl font-inter font-bold mt-3 text-red-800">NAME</h2>
          <p className="text-gray-500 font-inter font-semibold">Admin ID: XC651A</p>
          <button className="mt-8 bg-red-800 text-white px-6 py-2 rounded-md font-inter font-bold shadow-md cursor-pointer">Manage</button>
        </div>

        <div className="w-full md:w-3/4 flex flex-col gap-4">
          {["MENTOR COORDINATOR LIST", "MENTOR LIST", "MENTEE LIST"].map((title, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg border border-gray-300 w-full">
              <div className="flex justify-between items-center">
                <h3 className="font-inter font-semibold text-[32px] leading-[100%] tracking-[-2%] uppercase text-red-800">{title}</h3>
                <button className="text-gray-600 bg-white px-3 py-1 rounded shadow-sm flex items-center gap-1 border border-gray-300 cursor-pointer">
                  View <ArrowRight className="w-4 h-4" />
                </button>
              </div>
                <div className="bg-white mt-4 p-5 rounded-md shadow-md border border-gray-300 flex justify-between items-center">
                <p className="text-gray-600 font-semibold">Assigned {title.toLowerCase().replace(" list", "s")}:</p>
                <p className="font-bold text-lg text-black">10200 / 12000</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat & Query Section */}
      <div className="w-full mt-6 bg-gray-200 p-2 rounded-lg shadow-lg border border-gray-300 flex flex-col md:flex-row items-center">
        <h3 className="text-[32px] md:text-[42px] font-semibold text-red-800 w-full md:w-1/3 pl-4 text-center md:text-left leading-none tracking-tight">
          CHAT & QUERY SECTION
        </h3>
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 flex-1 flex flex-col md:flex-row gap-4 md:gap-7 justify-center mt-4 md:mt-0">
          {["Mentor Coordinators", "Mentors", "Mentees"].map((text, index) => (
            <button
              key={index}
              className="bg-red-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-inter font-semibold text-[28px] md:text-[42px] leading-none tracking-tight text-center shadow-md border border-gray-300 cursor-pointer"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;