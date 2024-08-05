import b4 from "../assets/images/b4.jpg";
import React from "react";
import Heading from "./Heading";



export const OurStory = () => {
  return (





    <div className="  flex-wrap justify-center w-auto flex py-8 px-4 my-8 mt-8    ">


      <div className=" w-auto    pl-12 pr-4 mt-8 mb-8 lg:w-1/2 lg:pr-0 lg:pl-0">
        <div className=" w-auto mx-auto h-96 border-4 border-gray-400 xl:w-3/5 lg:w-9/12">
          <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b4} alt="" />
        </div>
      </div>

      <div className="w-auto lg:w-1/2 lg:px-4 xl:pr-16">
        <Heading title="Our Story" />

        <p className="max-sm:text-xs text-base mt-4 w-auto  ">Aaliya Construction is a proprietary firm owned and run by Mr. Shailesh Sudhanshu Topno, engaged in Real-Estate Development since 2013, having its office at Bando Haat, Hawai Nagar, Road No. 0, Ranchi. Since its inception the firm has earned a respect and credence among the customers/ clients and the financial institutions as well.. Satisfied Clients and the projects completed speak out for it. We are commended for commitment and consistency. So far all our projects have been completed in time and have been a thing ‘sought after’ in the market.<br />
          We build Residential Apartment / Residential Bungalow / School Building and Residential Building for Society Mentors</p>
        <div className="  grid grid-cols-1  mt-10 lg:grid-cols-2 lg:text-lg">
          <p className="flex font-bold font-serif font-barlow"><span class="material-symbols-outlined mr-2">
            check_circle
          </span>Professional Specialist</p>
          <p className="flex font-bold font-serif font-barlow"><span class="material-symbols-outlined  mr-2">
            check_circle
          </span>Brilliant Ideas</p>
          <p className="flex font-bold font-serif font-barlow"><span class="material-symbols-outlined  mr-2">
            check_circle
          </span>Precise Builders</p>
          <p className="flex font-bold font-serif font-barlow"><span class="material-symbols-outlined  mr-2">
            check_circle
          </span>24/7 Assiatance</p>

        </div>
      </div>
    </div>

  );
}
export default OurStory;
