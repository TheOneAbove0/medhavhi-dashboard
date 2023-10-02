import React from "react";
import IMAGES from "../assets";

export default function Doubts() {
  return (
    <div className=" py-4  flex  pl-6 pr-[448px] ">
      <div className=" flex flex-col gap-4 ">
      <div className="flex flex-col ">
        <div className=" flex items-center justify-between h-[48px] w-[584px] px-2 pt-2 pb-4  ">
          <div className=" flex items-center gap-2 ">
            <div className=" relative ">
            <img src={IMAGES.Ellipse5} alt="Ellipse5" />
            <div className=" absolute bottom-[0px] border-white border-[2px] right-[1.67px] rounded-full w-[10.67px] h-[10.67px] bg-BGreen "></div>

            </div>
            <div className=" flex flex-col gap-1 ">
              <span className=" font-semibold text-[16px] leading-[20px] ">
                Floyd Miles
              </span>
              <p className=" text-Disable text-[14px] leading-[19.6px] ">
              9h ago
              </p>
            </div>
          </div>
          <img src={IMAGES.ThreeDot} alt="ThreeDot" />
        </div>

        <p className="px-2 py-4 text-[14px] text-DavyGray leading-[19.6px] ">
          Lorem ipsum dolor sit amet consectetur. Purus sed praesent a sit ipsum
          suspendisse.
        </p>
        <div className=" flex items-center justify-between px-[16px] py-[14px] ">
          <div className=" flex items-center gap-2 text-[NewGreen] ">
            <img src={IMAGES.GreenUp} alt="Ellipse5" />
            <span className=" text-[16px] font-semibold leading-[20px] ">
              171
            </span>
          </div>
          <div className=" flex items-center gap-2 text-[] ">
            <img src={IMAGES.Comment} alt="Comment" />
            <span className=" text-[14px] text-Jet  leading-[19.6px] ">
              25 Comments
            </span>
          </div>

          <span className=" text-[14px] leading-[19.6px] ">2 shares</span>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className=" flex items-center justify-between h-[48px] w-[584px] px-2 pt-2 pb-4  ">
          <div className=" flex items-center gap-2 ">
          <div className=" relative ">
            <img src={IMAGES.Ellipse6} alt="Ellipse6" />
            <div className=" absolute bottom-[0px] border-white border-[2px] right-[1.67px] rounded-full w-[10.67px] h-[10.67px] bg-BGreen "></div>

            </div>
            <div className=" flex flex-col gap-1 ">
              <span className=" font-semibold text-[16px] leading-[20px] ">
              Aalok Regmi
              </span>
              <p className=" text-Disable text-[14px] leading-[19.6px] ">
                Dec 29, 2022, 01:08 pm
              </p>
            </div>
          </div>
          <img src={IMAGES.ThreeDot} alt="ThreeDot" />
        </div>

        <img className=" p-2 w-full " src={IMAGES.Wallpaper} alt="Wallpaper" />
        <p className=" text-[14px] px-2 pb-2 leading-[19.6px] text-DavyGray ">How does the induction motor starts? Can you please elaborate with a figure?</p>

        <div className=" flex items-center justify-between px-[16px] py-[14px] ">
          <div className=" flex items-center gap-2 text-[NewGreen] ">
          <img  src={IMAGES.VecTor3} alt="VecTor3" />
            <span className=" text-[16px] font-semibold leading-[20px] ">
              171
            </span>
          </div>
          <div className=" flex items-center gap-2 text-[] ">
            <img src={IMAGES.Comment} alt="Comment" />
            <span className=" text-[14px] text-Jet  leading-[19.6px] ">
              25 Comments
            </span>
          </div>

          <span className=" text-[14px] leading-[19.6px] ">2 shares</span>
        </div>
      </div>
      </div>
    </div>
  );
}
