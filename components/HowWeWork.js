import React from "react";
import Heading from "./Heading";




export const HowWeWork = () => {
  return (




    <div className="py-4 px-4 mt-6 xl:px-28 lg:px-12 lg:py-8 ">
      <div className="w-auto content-center xl:w-2/5 lg:w-3/4">
        <Heading title="How We Work" />
        <p className="max-sm:text-xs text-base mt-6">You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.</p>
        <div />
      </div>

      <div className="grid grid-cols-1 gap-2  py-8 px-4 w-auto justify-center text-sm lg:text-lg pt-0 pb-0 mt-8 mb-8 lg:grid-cols-4 xl:gap-4 xl:px-0 xl:py-10 xl:my-0 ">
        <div className="bg-white px-16 py-16 pt-8 pb-8 lg:py-6 lg:px-6 xl:px-8 xl:py-12"><b className="font-bold font-serif font-barlow">We Care</b>
          <p className="text-sm lg:text-base">We respect each other and we do things safely and sustainably. It's good for our people, our business and our local communities.</p></div>
        <div className="bg-white px-16 py-16  pt-8 pb-8 lg:py-6 lg:px-6 xl:px-8 xl:py-12"><b className="font-bold font-serif font-barlow">We Achive Together</b>
          <p className="text-sm lg:text-base">We value the contribution of each individual and we work together to build strong, open and trusting partnerships.</p></div>
        <div className="bg-white px-16 py-16 pt-8 pb-8 lg:py-6 lg:px-6 xl:px-8 xl:py-12"><b className="font-bold font-serif font-barlow">We Improve</b>
          <p className="text-sm lg:text-base">We listen, learn and adapt our ideas and experience into better solutions and service for our customers.</p></div>
        <div className="bg-white px-16 py-16 pt-8 pb-8 lg:py-6 lg:px-6 xl:px-8 xl:py-12"><b className="font-bold font-serif font-barlow">We Deliver</b>
          <p className="text-sm lg:text-base">We set ourselves stretching goals, taking pride in doing a great job and helping our customers and partners to succeed.</p></div>
      </div>
    </div>

  );
}
export default HowWeWork;
