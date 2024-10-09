 import React from "react";
 import codeimg from "../assets/code.gif"
import { useNavigate } from "react-router-dom";

           
export default function Hero() {
   const navigate=useNavigate()
    return (
      <>
      <section id="home" className="">
        <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-2 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6  mt-2 text-center  lg:text-left">
            <div className="">
              <div className="mb-[.7rem] ">
                <h1 className="text-3xl font-bold  sm:text-4xl">
                  Hi  <span className="text-3xl">there,</span> 
                </h1>
              </div>

              <div className="mb-[.7rem] ">
                <h1 className="text-5xl font-bold  sm:text-6xl">
                 I am  <span className="text-orange-800" >Cheena,</span>
                </h1>
              </div>
              
              <div className="mb-[1rem] ">
                <h4 className="text-5xl font-bold  sm:text-3xl ">
                 A FULL STACK <span className="p-0 text-orange-800 rounded-md">WEB DEVELOPER.</span> 
                </h4>
              </div>
              <div className=" leading-none mb-4">
                 <p className="font-semibold">"Code with purpose, design with passion."</p>
              </div>
             
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              
              <button 
              onClick={()=>{navigate("/projects")}} 
               className="text-white bg-orange-800 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              See my work
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:min-h-96 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={codeimg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      </>
    );
  }