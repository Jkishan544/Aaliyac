import React from "react";
import { Link, NavLink } from "react-router-dom";
import a1 from "../assets/images/a1.jpg";
import a2 from "../assets/images/a2.jpg";
import Heading from "./Heading";





export const AboutH = () => {
  return (

    <div>

      <div className="  flex-wrap w-auto justify-center flex px-6 py-6 mt-4 mb-4 xl:px-28 xl:py-8 lg:px-16">
        <div className="w-auto lg:w-1/2   ">
          <Heading title="About Us" />
          <p className="max-sm:text-xs text-base mt-4 w-80 xl:w-3/4 lg:w-10/12">
            <a className="font-bold font-serif font-barlow">Aaliya Construction</a> is a proprietary firm owned and run by <a className="font-bold font-serif font-barlow">Mr. Shailesh Sudhanshu Topno</a>, engaged in Real-Estate Development since 2013. Since its inception the firm has earned a respect and credence among the customers  / clients and the financial institutions as well.</p>

          <p className="max-sm:text-xs text-base mt-4 w-80 xl:w-3/4 lg:w-10/12">Satisfied Clients and the projects completed speak out for it. We are commended for commitment and consistency. So far all our projects have been completed in time and have been a thing ‘sought after’ in the market.</p>

          <p className="max-sm:text-xs text-base mt-4 w-80 xl:w-3/4 lg:w-10/12"> Aaliya Construction is always ready to take up any challenging task and deliver the best possible results. We always try to work as a team to achieve the desired results.</p>
          <hr className="  mt-10 -border-t-96 " />
          <div cl>
            <NavLink to="/about" className="mt-2 bg-orange-600 text-white inline-flex px-2 py-2 lg:px-6 lg:py-4 lg:mt-6 rounded-sm">
              <p className="font-bold font-barlow">More</p><span class="material-symbols-outlined ">arrow_forward</span> </NavLink>
          </div>
        </div>

        <div className="px-20 mt-24 pl-8 pr-0 lg:w-1/2 xl:px-28 lg:px-16">
          <div className="  w-auto mx-auto h-96 border-4 border-gray-400 pt-12 lg:w-96">
            <img className="-mt-24 -ml-10 h-96 w-full object-cover drop-shadow-2xl" src={a1} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="justify-center flex-wrap w-auto flex px-6 py-6   mt-2 mb-4 ">
          <div className="px-20 mt-24 pl-8 pr-0 lg:w-1/2 xl:px-16">
            <div className="  w-auto mx-auto h-96 border-4 border-gray-400 pt-12 lg:w-96">
              <img className="-mt-24 -ml-10 h-96 w-full object-cover drop-shadow-2xl" src={a2} alt="" />
            </div>
          </div>


          <div className="  max-sm:w-full w-auto  mt-4 lg:w-1/2 xl:px-20  lg:px-8 lg:mt-16">
            <Heading title="How we Work" />


            <div className="grid grid-cols-2 gap-4 mt-8 lg:gap-8 ">
              <div className=" ">
                <h1 className="max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Care</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2 lg:w-auto">We respect each other and we do things safely and sustainably for better tomorrow.</p>
              </div>
              <div className="">
                <h1 className="max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Improve</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2 lg:w-auto">We listen, learn and adapt our ideas and experience into better solutions and service for our customers.</p>
              </div>
              <div className=" ">
                <h1 className="max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Achieve Together</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2 lg:w-auto">We value the contribution of each individual and we work together to build strong, open and trusting partnerships.</p>
              </div>
              <div className="">
                <h1 className=" max-sm:text-xs text-xl"><b className="font-bold font-serif font-barlow">We Deliver</b> </h1>
                <p className="max-sm:text-xs text-base max-sm:w-full w-1/2 lg:w-auto">We set ourselves stretching goals, taking pride in doing a great job and helping our customers and partners to succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutH;
