import React from "react";
import { useEffect } from "react";
import OurStory from "../components/OurStory";
import HowWeWork from "../components/HowWeWork";
import OurAssociates from "../components/OurAssociates";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-slate-100">
      <section>
        <div className="mt-4 flex flex-wrap justify-center w-auto h-36 content-center lg:h-60 bg-slate-600 "><b className=" max-sm:text-xl  text-6xl text-white font-bold font-serif font-barlow">About Us</b>
        </div>

        <OurStory />
        <HowWeWork />
        <OurAssociates />

      </section>
    </div>
  );
}
export default About;
