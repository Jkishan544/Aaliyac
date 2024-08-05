import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import { useEffect } from "react";
import React from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";



export const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-slate-100">
      <section>
        <p className="mt-4 w-auto h-36  flex flex-wrap justify-center content-center lg:h-60 bg-slate-600"><b className="max-sm:text-xl text-6xl text-white font-bold font-serif font-barlow">Contact Us</b>
        </p>

        <div>
          <div className="w-auto  py-6  pl-4 pr-4 lg:px-40 lg:py-20">
            <Heading title="Get In Touch" />

            <div className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-2 mt-12 lg:grid-cols-1 lg:gap-2 ">
              <div className="  bg-white max-sm:text-xs text-lg ml-4 mr-4 px-6 py-6  pl-4 pr-4  ">
                <h1 className=" max-sm:text-xl text-4xl font-bold font-serif font-barlow">Send Us A Message</h1>

                <Form />

              </div>


              <div className=" bg-white ml-4 mr-4 px-6 py-6 pl-4 pr-4 ">
                <h1 className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow">Contact Info</h1>
                <div className="  grid grid-cols-1 gap-2 py-4 px-2 lg:px-10 pl-0 pr-0 lg:grid-cols-2">

                  <div className="py-4 px-2 "><h1 className="flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow"><span class="material-symbols-outlined  text-orange-600 mr-2 ">
                    call
                  </span>Call us</h1>
                    <p>91 6205599190 <br />
                      91 6205408020</p>
                  </div>
                  <div className="py-4 px-2"><h1 className=" flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow"><span class="material-symbols-outlined  text-orange-600 mr-2">
                    location_on
                  </span>Our Location</h1>
                    <p>Singh More, Hatia, Ranchi Jharkhand</p>
                  </div>
                  <div className="py-4 px-2"><h1 className="flex items-center max-sm:text-xl text-2xl font-bold font-serif font-barlow">
                    <span class="material-symbols-outlined  text-orange-600 mr-2">
                      mail
                    </span>Our Email</h1>
                    <p>aaliyaconstruction2013@gmail.com
                    </p>
                  </div>

                </div>
                <p><b className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow">Follow Us</b></p><br />
                <div className="flex flex-wrap gap-3 px-4 lg:px-10">

                  <a href="https://www.facebook.com/AaliyaConstructionRanchi" className="">
                    <img src={facebook} className=" h-10 w-8 lg:h-10 lg:w-10  -mt-1 text-white  " /></a >
                  <a href="https://www.instagram.com/aaliyaconstruction/">
                    <img src={instagram} className="  h-8 w-8 lg:h-8 lg:w-8  text-white	  " /></a >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.914296988072!2d85.3129384!3d23.318868099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1783810af99%3A0xb25d2b260a43c485!2sAaliya%20Construction!5e0!3m2!1sen!2sin!4v1719316681481!5m2!1sen!2sin" height="450" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;

