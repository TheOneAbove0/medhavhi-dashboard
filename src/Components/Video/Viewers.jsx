import React from "react";
import IMAGES from "../assets";

export default function Viewers() {
  return (
    <div className=" w-full h-[22.5rem]  pr-6 gap-4 flex items-center  ">
      <div className="  " >
        <img className=" w-[40rem] 2xl:w-[50rem] h-[360px] object-cover " src={IMAGES.Videoplayer} alt="Videoplayer" />
      </div>

      <div className=" w-[24rem] 2xl:w-[30rem] h-full  flex flex-col  items-end ">
        <div className="px-4 pr-10 mb-2  flex items-center gap-4  ">
          <div className=" flex flex-col  ">
            <span className="  leading-[19.6px] text-[14px] font-semibold" >last 7 days</span>
            <span className=" leading-[14px] text-[10px] ">12 Jan-19 Jan</span>
          </div>
          <img src={IMAGES.IconDown} alt="IconDown" />
        </div>

        <div className=" flex border-b w-full items-center gap-2    ">
          <div className=" flex w-full flex-col px-6 py-3 gap-1  items-center  ">
            <span className=" leading-[15.6px] text-[12px] text-DavyGray ">Views</span>
            <span className=" leading-[24px] text-[20px] text-DavyGray  font-semibold">25367</span>
            <div className=" leading-[15.6px] flex gap-2 items-center text-[12px] text-BGreen ">
              <img src={IMAGES.IconRed} alt="IconRed" />

              <span >2.35%</span>
            </div>
          </div>

          <div className=" flex flex-col w-full px-6 py-3 gap-1  items-center ">
            <span className=" leading-[15.6px] text-[12px] text-DavyGray ">Watching Now</span>
            <span className=" leading-[24px] text-[20px] text-DavyGray  font-semibold">535</span>
            <div className=" flex gap-2 items-center  leading-[15.6px] text-[12px] text-BGreen ">
            <img src={IMAGES.IconGreen} alt="IconGreen" />
              <span>2.35%</span>
            </div>
          </div>
        </div>

        <div className=" flex border-b w-full items-center gap-2    ">
          <div className=" flex flex-col w-full px-[9px] 2xl:px-[12.5px] py-3 gap-1   items-center ">
            <span className=" leading-[15.6px] text-[12px] text-DavyGray ">Highest Consecutive viewers</span>
            <span className=" leading-[24px] text-[20px] text-DavyGray  font-semibold">25367</span>
            <div className=" flex gap-2 items-center leading-[15.6px] text-[12px] text-RedPantone ">
            <img src={IMAGES.IconRed} alt="IconRed" />
              <span >2.35%</span>
            </div>
          </div>

          <div className=" flex flex-col w-full px-6 py-3 gap-1  items-center ">
            <span className=" leading-[15.6px] text-[12px] text-DavyGray ">Watch hour</span>
            <span className=" leading-[24px] text-[20px] text-DavyGray  font-semibold">535</span>
            <div className=" flex gap-2 items-center leading-[15.6px] text-[12px] text-BGreen ">
            <img src={IMAGES.IconGreen} alt="IconGreen" />
              <span>2.35%</span>
            </div>
          </div>
        </div>


        <div className=" flex w-full items-center gap-2   ">
          <div className=" flex flex-col w-full  px-[9px] 2xl:px-[12.5px]   items-center py-3 gap-1 justify-center  ">
            <span className=" leading-[15.6px]  text-[12px] text-DavyGray ">Highest Consecutive viewers</span>
            <span className=" leading-[24px] text-[20px] text-DavyGray  font-semibold">32:12</span>
            <div className=" flex gap-2 items-center leading-[15.6px] text-[12px] text-BGreen ">
            <img src={IMAGES.IconGreen} alt="IconGreen" />
              <span >2.35%</span>
            </div>
          </div>

          <div className=" flex flex-col w-full px-6 py-3 gap-1  items-center ">
            <span className=" leading-[15.6px] text-[12px] text-DavyGray ">Watch hour</span>
            <span className=" leading-[24px] text-[20px] text-DavyGray  font-semibold">648</span>
            <div className=" flex gap-2 items-center leading-[15.6px] text-[12px] text-RedPantone ">
            <img src={IMAGES.IconRed} alt="IconRed" />

              <span>2.35%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
