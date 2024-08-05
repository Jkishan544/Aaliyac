import React from "react";
import eg from "../assets/images/eg.jpg";
import vorcos from "../assets/images/vorcos.png";
import media from "../assets/images/media.png";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import Heading from "./Heading";


export const OurAssociates = () => {
  return (

    <div className="px-6 py-6 xl:px-28 xl:py-8 lg:px-12 lg:py-4">
      <div className="   max-sm:text-lg text-4xl">
        <Heading title="Our Associates" />
        <p className="  w-auto text-xs mt-6 lg:w-3/4 xl:w-2/5 lg:text-base">Today with the cooperation and constant support of our partner we  are building legacy that will stand the test of time. We desire to achieve long term win-win benefits. Through our expertise and quality, we are dedicated in creating brighter and affordable living for everyone. </p>
      </div>

      <div className="  grid grid-cols-1 gap-2 py-10 px-10 pt-8 pb-8 xl:grid-cols-3 xl:gap-3 content-center lg:px-64 xl:px-8">
        <div className=" text-center bg-white px-12 py-12 pt-0 pb-0 hover:shadow-lg ">
          <img src={eg} alt="" className="mx-auto " />
          <h1 className="  max-sm:text-base text-xl font-bold font-serif font-barlow  ">Our Architect</h1>
          <p className="max-sm:text-xs text-base xl:text-sm">Mr. Shailesh Verma, Shop No.-6, Arctic Mall, Bariatu Road, Ranchi</p>
          <div className="w-auto flex flex-wrap justify-center   mt-4 mb-4 ">
            <a href="https://www.facebook.com/engineersgroupranchi" className=" ">
              <img src={facebook} className="  h-8 w-6  xl:h-10 xl:w-10 -mt-1 lg:h-10 lg:w-10" /></a >
          </div>

        </div>
        <div className="bg-white text-center px-12 py-12  pt-0 pb-0 hover:shadow-lg ">
          <img src={vorcos} alt="" className="mx-auto  " />
          <h1 className="max-sm:text-base text-xl font-bold font-serif font-barlow ">Our Interiors</h1>
          <p className="max-sm:text-xs text-base xl:text-sm">Mrs. Shifa Dayal Kujur, 5/470, Viram Khand, Gomti Nagar, Lucknow 226010, Uttar Pradesh</p>
          <div className="flex flex-wrap justify-center mt-4 mb-4  gap-4">
            <a href="https://www.facebook.com/www.edengreen.in">
              <img src={facebook} className="  h-8 w-6  xl:h-10 xl:w-10 -mt-1	lg:h-10 lg:w-10" /></a >
            <a href="https://www.instagram.com/edengreentechnologies/">
              <img src={instagram} className="  h-6 w-6	 xl:h-8 xl:w-8 lg:h-10 lg:w-8 lg:-mt-1 xl:-mt-0" /></a ></div>
        </div>

        <div className="bg-white text-center   px-12 py-12 pt-0 pb-0 hover:shadow-lg">
          <img src={media} alt="" className="mx-auto " />
          <h1 className="max-sm:text-base text-xl font-bold font-serif font-barlow">Marketing And Communication</h1>
          <p className="max-sm:text-xs text-base xl:text-sm">Sahu Chowk, Pundag,<br /> Ranchi, Jharkhand</p>
          <div className="flex flex-wrap justify-center mt-4 mb-4 gap-4">
            <a href="https://www.facebook.com/engineersgroupranchi">
              <img src={facebook} className="  h-8 w-6  	 xl:h-10 xl:w-10 -mt-1 lg:h-10 lg:w-10" /></a >
            <a href="https://www.instagram.com/mediaexpressranchi/">
              <img src={instagram} className="  h-6 w-6   xl:h-8 xl:w-8 lg:h-10 lg:w-8 lg:-mt-1 xl:-mt-0" /></a >
          </div>
        </div>
      </div>
    </div>

  );
}
export default OurAssociates;
