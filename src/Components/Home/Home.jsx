import React from "react";
import SIdebar from "../SideBar/SIdebar";
import Navbar from "../Navbar/Navbar";
import Devices from "./Devices";
import Performance from "./Performance";
import Uploads from "./Uploads";

export default function Home() {
  return (
    <div className="flex items-start">
      <div >

      <SIdebar />
      </div>

      <div className=" flex flex-col w-full h-full ">
        <Navbar />
        <div className= "flex flex-col pb-14  gap-4 bg-GreyBackground bg-opacity-20 py-4 2xl:pb-4 px-6 rounded-md ">
          <Devices />
          <Performance />
          <Uploads />
        </div>
      </div>
    </div>
  );
}
