import React from "react";
import pik1 from "../../assets/form.png"
import pik2 from "../../assets/timetable.png"
import pik3 from "../../assets/receipe.png"


function Navbar(){
  return(
    <>
    <div className="flex flex-wrap justify-center gap-20 pt-20  ">
      
    <div className="overflow-hidden rounded mb-9 w-3/12   bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure >
          <img
            src={pik1}
            alt="card image"
            className="aspect-video w-full h-64"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-black">
              Project-1
            </h3>
           <a className="text-black" href="https://gargcheena042001.github.io/form/admission-form-main/experiment4/index.html" src="form">link</a>
          </header>
        </div>
      </div>
      <div className="overflow-hidden rounded mb-9 w-3/12 bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src={pik2}
            alt="card image"
            className="aspect-video w-full h-64"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
             Project-2
            </h3>
            <a  className="text-black" href="https://gargcheena042001.github.io/timetable/experimet%203/index.html" src="timetable">link</a>
          </header>
        </div>
      </div>
      <div className="overflow-hidden rounded mb-9 w-3/12 bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src={pik3}
            alt="card image"
            className="aspect-video w-full h-64"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-black">
              Project-3
            </h3>
            <a  className="text-black" href="https://gargcheena042001.github.io/my-receipe/experimet6/index.html" src="receipe">link</a>
          </header>
        </div>
      </div>
      </div>
    </>
  )
}



     
  

export default Navbar;