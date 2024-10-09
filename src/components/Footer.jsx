import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer (){

return(
  <footer className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex   justify-end mx-auto w-full  ">
      <div className="flex justify-center space-x-4">
      			<a href="https://github.com/gargcheena042001"  title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-orange-800"
            
                   ><FaGithub  className="text-2xl text-black hover:text-white"/></a>
                       
                  <a href="https://www.linkedin.com/in/cheena-garg/" title="linkedin" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-orange-800">
                  <FaLinkedin  className="text-2xl text-black hover:text-white"/>
                  </a>
        </div>
        </div>
      </nav>
  </footer>
)
}
