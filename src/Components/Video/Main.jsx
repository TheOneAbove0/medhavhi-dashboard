import React, { useMemo, useState } from "react";

import Overview from './Overview'
import Resources from "./Resources";
import Doubts from './Doubts'

export default function Main() {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  const memoizedActiveItem = useMemo(() => activeItem, [activeItem]);

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <button
          className={`py-4 w-full px-[147.17px] ${
            memoizedActiveItem === 'Overview'
              ? "bg-primaryColor text-white"
              : ""
          }`}
          onClick={() => handleItemClick("Overview")}
        >
          Overview
        </button>
        <button
          className={`py-4 w-full px-[147.17px] ${
            memoizedActiveItem === 'Resources'
              ? "bg-primaryColor text-white"
              : ""
          }`}
          onClick={() => handleItemClick("Resources")}
        >
          Resources
        </button>
        <button
          className={`py-4 w-full px-[147.17px] ${
            memoizedActiveItem === 'Doubts'
              ? "bg-primaryColor text-white"
              : ""
          }`}
          onClick={() => handleItemClick("Doubts")}
        >
          Doubts
        </button>
      </div>
    {memoizedActiveItem === 'Overview'&& <Overview />}
     {memoizedActiveItem === 'Resources' && <Resources />}
        {memoizedActiveItem === 'Doubts'&& <Doubts />}
        <Doubts />
    </div>
  );
}
