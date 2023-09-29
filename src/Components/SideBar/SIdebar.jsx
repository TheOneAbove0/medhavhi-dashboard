import React, { useState } from "react";
import menuItems from "./sidebarData";

export default function SIdebar() {
     
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (label) => {
    
    setActiveItem(label);
  };
  return (
    <div class="w-60   h-screen mx-2 flex flex-col overflow-auto">
      <div class="w-44 mx-auto py-6">
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
        activeItem === menuItem.label ? "bg-primaryColor text-white" : ""
      }`}
    >
      <div
        className={`flex items-center gap-4  ${
          activeItem === menuItem.label ? "bg-primaryColor text-white" : ""
        }`}
        onClick={() => handleItemClick(menuItem.label)}
      >
        <span >{menuItem.icon}</span>
        <span>{menuItem.label}</span>
      </div>
    </div>
  ))}
</div>

      
      <div>
        <div class="flex items-center gap-2 cursor-pointer   w-48  mx-auto py-3 rounded-lg px-5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99998 14.6667H9.99998C13.3333 14.6667 14.6666 13.3333 14.6666 10V6.00001C14.6666 2.66668 13.3333 1.33334 9.99998 1.33334H5.99998C2.66665 1.33334 1.33331 2.66668 1.33331 6.00001V10C1.33331 13.3333 2.66665 14.6667 5.99998 14.6667Z"
              stroke="#565659"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.38 12.3333V9.73331"
              stroke="#565659"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.38 4.96666V3.66666"
              stroke="#565659"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.38 8.43334C11.3373 8.43334 12.1133 7.6573 12.1133 6.70001C12.1133 5.74271 11.3373 4.96667 10.38 4.96667C9.42271 4.96667 8.64667 5.74271 8.64667 6.70001C8.64667 7.6573 9.42271 8.43334 10.38 8.43334Z"
              stroke="#E63946"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.62 12.3333V11.0333"
              stroke="#292D32"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.62 6.26666V3.66666"
              stroke="#292D32"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.61999 11.0333C6.57728 11.0333 7.35332 10.2573 7.35332 9.29998C7.35332 8.34269 6.57728 7.56665 5.61999 7.56665C4.6627 7.56665 3.88666 8.34269 3.88666 9.29998C3.88666 10.2573 4.6627 11.0333 5.61999 11.0333Z"
              stroke="#37B76C"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Settings</span>
        </div>
        <div class="flex items-center gap-2 cursor-pointer   w-48 px-5 mx-auto py-3 rounded-lg px-5 ">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
          >
            <path
              d="M10.667 11.333 14 8m0 0-3.333-3.333M14 8H6m0-6h-.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 14 4.08 14 5.2 14H6"
              stroke="#565659"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 8h8m0 0-3.333-3.333M14 8l-3.333 3.333"
              stroke="#EA526F"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>

          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
