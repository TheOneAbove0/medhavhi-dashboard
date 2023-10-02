import React from "react";
import IMAGES from "../assets";

export default function Overview() {
  return (
    <div className=" p-4  ">
      <div className=" flex flex-col gap-2  ">
        <div className=" text-[16px] font-semibold leading-[20px]  ">Measurement - I</div>
        <div className=" flex items-center text-[12px] text-DavyGray leading-[15.6px]  ">
          <span>53 mins</span>
          <span>Updated: 12 Dec 2022</span>
        </div>
        <div>
          <p className=" flex items-center text-[12px] text-DavyGray leading-[15.6px]  ">
            Lorem ipsum dolor sit amet consectetur. Blandit justo morbi cursus
            volutpat viverra risus accumsan donec velit. Integer nam
            mauris......
          </p>
          <span className=" flex items-center text-[12px] text-primaryColor leading-[15.6px]  "> Show more</span>
        </div>
      </div>

      <div className=" flex items-center justify-between pt-4 ">
        <div className="flex items-center ">
          <img className=" p-[14px] " src={IMAGES.VecTor3} alt="VecTor3" />
          <span>170</span>
        </div>
        <div className=" px-6 rounded-full  py-3  flex items-center bg-primaryColor  text-white">
        <img className="  " src={IMAGES.Download} alt="Download" />
          <span>Download</span>

        </div>

      </div>
    </div>
  );
}
