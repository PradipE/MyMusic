import React from "react";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[23%] h-[100%] p-3 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded-lg flex flex-col justify-evenly">
        <div className="flex items-center gap-3 pl-7 cursor-pointer">
          <img src={assets.home_icon} alt="home icon" className="w-6" />
          <p className="pl-2 font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-7 cursor-pointer">
          <img src={assets.search_icon} className="w-6 " />
          <p className="pl-2 font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded-lg  ">
        <div className="p-7 items-center justify-between flex  ">
          <div className="items-center flex gap-3 ">
            <img src={assets.stack_icon} className="w-6" />
            <p className="font-bold">Your Library</p>
          </div>
          <div className="item-center flex gap-3">
             <img src={assets.plus_icon} className="w-4 "/>
            <img src={assets.arrow_icon} className="w-4"/>  
          </div>
        </div>
        <div className="p-5 item-start bg-[#242424] flex flex-col rounded-xl font-semibold m-3 gap-2 justify-start">
            <h1 className="font-semibold t">Create your first playlist</h1>
            <p className="font-normal text-sm">It's easy, We'll help you</p>
            <button className="bg-white w-36 rounded-3xl h-9 text-black font-bold mt-3">Create playlist</button>
        </div>
        <div className="p-5 item-start bg-[#242424] flex flex-col rounded-xl font-semibold m-3 gap-2 justify-start">
            <h1 className="font-semibold t">Let's find some podcasts to follow</h1>
            <p className="font-normal text-sm">We'll keep you updated on new episodes</p>
            <button className="bg-white w-40 rounded-3xl h-9 text-black font-bold mt-3">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
