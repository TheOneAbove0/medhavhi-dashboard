import React from 'react';
import SIdebar from '../SideBar/SIdebar';
import Navbar from './Navbar';
import Viewers from './Viewers';
import Main from './Main';
import Performance from './Performance';

export default function Video() {
  return (
    <div className="flex items-start">
      <div >

      <SIdebar />
      </div>

      <div className=" flex flex-col ml-[13.06rem] w-full h-full ">
        <Navbar />
        <div className= "flex flex-col pb-14   bg-white bg-opacity-20  2xl:pb-4 px-6 rounded-md ">
          <Viewers />
          <Main />
          <Performance />
        </div>
      </div>
    </div>
  )
}
