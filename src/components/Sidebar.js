import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import {BiPlusCircle} from 'react-icons/bi'
const Sidebar = () => {
  return (
   
        <div
       
          id="sidebar"
          class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden
          fixed z-20 left-0 top-0 bottom-0 transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div class="space-y-6 md:space-y-10 mt-10  ">
            <h1 class="font-bold text-4xl text-center md:hidden">
              I<span class="text-teal-600">.</span>
            </h1>
            <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
              Instagram<span class="text-teal-600">.</span>
            </h1>

            <div id="menu" class="flex flex-col space-y-2  ">
              <a
                href="#"
                class="flex text-center items-center space-x-1 rounded-md px-2 py-2 pl-4
             hover:bg-gray-100 hover:text-blue-600"
              >
                {/* <span class="text-2xl"><i class="bx bx-home"></i></span> */}
                <AiOutlineHome className="text-2xl" />
                <p className="mt-1 pl-1">Home</p>
              </a>
              <a
                href="#"
                class="flex text-center items-center space-x-1 rounded-md px-2 py-2 pl-4
             hover:bg-gray-100 hover:text-blue-600"
              >
                {/* <span class="text-2xl"><i class="bx bx-home"></i></span> */}
                <AiOutlineHome className="text-2xl" />
                <p className="mt-1 pl-1">Home</p>
              </a>
              <a
                href="#"
                class="flex text-center items-center space-x-1 rounded-md px-2 py-2 pl-4
             hover:bg-gray-100 hover:text-blue-600"
              >
                {/* <span class="text-2xl"><i class="bx bx-home"></i></span> */}
                <AiOutlineHome className="text-2xl" />
                <p className="mt-1 pl-1">Home</p>
              </a>
              <a
              
                href="#"
                class="flex text-center items-center space-x-1 rounded-md px-2 py-2 pl-4
             hover:bg-gray-100 hover:text-blue-600"
              >
                {/* <span class="text-2xl"><i class="bx bx-home"></i></span> */}
                <BiPlusCircle className="text-2xl" />
                <p className="mt-1 pl-1">Create</p>
              </a>
            </div>
          </div>
        </div>
   
  );
};

export default Sidebar;
