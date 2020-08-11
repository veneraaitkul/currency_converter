import React from 'react'
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Navbar() {
 return (
   <nav className="flex items-center flex-wrap pr-8 pl-8 lg:pr-16 lg:pl-16 pt-10 pb-0">
     <div className="flex lg:hidden justify-between w-full ">
       <Logo className="" />
       <button className="flex items-center px-3 py-2 border rounded text-green-400 border-green-400 hover:text-white hover:border-white">
         <svg
           className="fill-current h-3 w-3"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <title>Menu</title>
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
       </button>
     </div>

     <div className="hidden lg:block w-full block flex-grow justify-between flex lg:flex lg:items-center lg:w-auto font-semibold text-sm leading-normal">
       <div className="flex-1 text-gray-500">
         <span className="block mt-4 lg:inline-block lg:mt-0 mr-8 cursor-pointer">
           Personal
         </span>
         <span className="block mt-4 lg:inline-block lg:mt-0 mr-8 cursor-pointer">
           Business
         </span>
         <span className="block mt-4 lg:inline-block lg:mt-0 cursor-pointer">
           Partners
         </span>
       </div>

       <div className="flex-1 flex-shrink-0">
         <Logo className="mx-auto" />
       </div>

       <div className="flex-1 text-right">
         <span className="transition duration-200 ease-in-out text-sm font-semibold text-center py-3 px-6 bg-green-400 leading-none rounded-full text-white hover:text-white hover:bg-green-600 mt-4 lg:mt-0 cursor-pointer">
           Log In
         </span>
       </div>
     </div>
   </nav>
 );
}
