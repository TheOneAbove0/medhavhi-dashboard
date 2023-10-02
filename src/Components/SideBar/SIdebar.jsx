import React, { useMemo, useState } from "react";
import menuItems from "./sidebarData";
import IMAGES from "../assets";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  const memoizedActiveItem = useMemo(() => activeItem, [activeItem]);

  return (
    <div
      className="w-[209px] h-[100vh] fixed top-0 left-0 bg-white flex flex-col overflow-auto"
     
    >
      <div className="w-44 mx-auto py-6">
        <img
          src="https://app.medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedhavi-logo.911704b2.png&w=256&q=75"
          alt="company logo"
        />
      </div>

      <div className="text-Jet flex flex-col gap-1 flex-1">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`relative cursor-pointer w-48 px-5 mx-auto py-3 rounded-lg ${
              memoizedActiveItem === menuItem.label
                ? "bg-primaryColor text-white"
                : ""
            }`}
          >
            <div
              className={`flex items-center gap-4 ${
                memoizedActiveItem === menuItem.label
                  ? "bg-primaryColor text-white"
                  : ""
              }`}
              onClick={() => handleItemClick(menuItem.label)}
            >
              <span>{menuItem.icon}</span>
              <span>{menuItem.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-2 cursor-pointer w-48 mx-auto py-3 rounded-lg px-5">
          <img src={IMAGES.Setting} alt="Settings" />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer w-48 px-5 mx-auto py-3 rounded-lg">
          <img src={IMAGES.Logout} alt="Logout" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
