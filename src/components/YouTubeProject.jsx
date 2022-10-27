import React from "react";
import { FaYoutube } from "react-icons/fa";

function YouTubeProject() {
  return (
    <div className="container mx-auto">
      <h1 className="font-poppins font-bold text-white text-[48px] ">React Portafolio</h1>
      <h4 className="font-poppins font-semibold text-gradient text-[24px] uppercase">Section: Business</h4>
      <p className="font-poppins font-normal text-white text-[16px]">Current time: 1:35:02</p>
      <a href="https://www.youtube.com/watch?v=_oO4Qi5aVZs&list=PLS4uvaGAlKeaF7q8tt_VCQW9JyUvrp2_d&index=9">
        <button className="text-neutral-900 bg-gray-400 shadow-lg hover:shadow-gray-800 rounded-[10px] border-gray-400 hover:bg-zinc-900 hover:text-white flex px-6 py-4 mt-2 font-poppins font-medium text-[18px] outline-none hover:">
          <b className="mr-1">YouTube</b> Project
          <FaYoutube className="text-red-700 mt-1 text-lg ml-1" />
        </button>
      </a>
    </div>
  );
}

export default YouTubeProject;