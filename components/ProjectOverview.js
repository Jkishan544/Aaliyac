import { Link, NavLink } from "react-router-dom";
import school1 from "../assets/images/school1.jpg";
import b41 from "../assets/images/b41.jpg";
import sushil from "../assets/images/sushil.jpg";
import b2 from "../assets/images/b2.jpg";
import React from "react";
import Heading from "./Heading";



export const ProjectOverview = () => {





  return (

    <div className="mt-4" >
      <div className="w-auto max-sm:text-lg text-4xl py-4 px-4 xl:px-28 xl:py-8 lg:px-16 lg:py-4 ">
        <Heading title="Our Projects" />

        <div  >
          <NavLink to="/projects" className=" float-right font-barlow mt-4 mb-4 bg-orange-600 text-white font-bold inline-flex py-1 px-1 lg:my-2 lg:py-4 lg:px-4 lg:text-base rounded-sm" >
            View All Projects <span class="material-symbols-outlined">arrow_forward</span></NavLink>
        </div>

        <div className="w-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8  mt-20 ">
          <div className=" w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-auto  lg:my-8  overflow-hidden ">
            <img className="  object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all " src={b2} alt="" />
            <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center  ">
              <h1 className=" text-white font-barlow font-bold">Neeta Residency</h1>
              <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">HARMU RANCHI</p>
            </div>
          </div>
          <div className="w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-auto  lg:my-8  overflow-hidden">
            <img className=" object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all" src={school1} alt="" />
            <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center">
              <h1 className="  text-white font-barlow font-bold">Holy Family School</h1>
              <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">KURDEG SIMDEGA</p>

            </div>
          </div>
          <div className="w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-auto  lg:my-8  overflow-hidden">
            <img className=" object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all" src={b41} alt="" />
            <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center">
              <h1 className="  text-white font-barlow font-bold ">Gayatri Residency</h1>
              <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">HATIA RANCHI</p>

            </div>
          </div>
          <div className="w-auto px-12 my-12 relative group  mt-4 mb-4 pl-0 pr-0 lg:w-auto  lg:my-8  overflow-hidden">
            <img className=" object-cover h-full w-full  group-hover:translate-x-3 group-hover:scale-105  transition-all" src={sushil} alt="" />
            <div className="absolute flex flex-col items-center inset-0 z-10 transition-all  bg-gradient-to-b from-transparent to-transparent group-hover:to-slate-700  justify-center">
              <h1 className="  text-white font-barlow font-bold">Sushil Residency</h1>
              <p className="text-lg text-white absolute bottom-4 w-full left-0 text-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">SINGH MORE HATIA</p>

            </div>
          </div>
        </div>
      </div>

    </div>


  );
}
export default ProjectOverview;
