import React from 'react'
import IMAGES from '../assets'

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm  w-full  h-[84px] px-6 py-4 flex justify-between items-center  sticky top-0 z-50">
      <div className=" items-center">
        <div className="flex items-center gap-3 text-Jet leading-6 tracking-[0.024] text-lg">
          <span className=' flex items-center gap-4 '>
          <img src={IMAGES.ArrowLeft} alt="Notification" /> <span>Videos</span>
          </span>
        </div>
      </div>
      <div className="lg:flex-1 lg:max-w-sm flex justify-between items-center gap-8">
        <button className=" bg-primaryColor cursor-pointer w-36 h-[52px]  px-6 ml-auto py-4 text-white rounded-lg flex items-center gap-2 ">
        <img src={IMAGES.AddCirCle} alt="Dashboard" />

          <span>Create</span>
        </button>

        
        <div >
        <img src={IMAGES.Notification} alt="Notification" />
        </div>
        <div className="w-10 h-10 cursor-pointer  rounded-full overflow-hidden border  ">
          <img  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2" alt="random-person" />

        </div>
        </div>

        
      </div>
  )
}
