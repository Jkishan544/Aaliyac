import b4 from "../assets/images/b4.jpg";
import b2 from "../assets/images/b2.jpg";
import b41 from "../assets/images/b41.jpg";
import school1 from "../assets/images/school1.jpg";
import b5 from "../assets/images/b5.jpg";
import Neeta from "./Neeta";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import Heading from "../components/Heading";
import React from "react";
import sushilbrochure from "../assets/images/sushilbrochure.pdf";
import gayatribrochure from "../assets/images/gayatribrochure.pdf";






export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-white">
      <section>
        <h1 className="mt-4 flex flex-wrap justify-center w-auto h-36 content-center lg:h-60 bg-slate-600 max-sm:text-xl text-6xl text-white font-bold font-serif font-barlow">Projects</h1>



        <div className="w-auto flex-wrap justify-center flex xl:py-28 xl:px-28 bg-slate-100 px-4 mx-0 py-8 lg:py-12 lg:px-8 ">
          <div className="w-auto mt-4  lg:w-1/2 ">
            <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow">Residential Properties</h1>
            <Heading title="Neeta Residency" />

            <p className="mt-8 w-3/8 max-sm:text-xs text-base ">Located at one of the prime locations in Ranchi, the Capital city of Jharkhand, Overlooking large green areas, Harmu River, and the city skyline.</p>
            <div className="grid grid-rows-3  mt-10">
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined text-orange-500 ">
                arrow_right
              </span>3 BHK Homes with Luxury Amenities</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>Excellent connectivity to airport and railway station</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>CNT Project</p>
            </div>
            <div>
              <a href="https://youtu.be/2JDGX-Klgto?si=2MucpMlmvHKbuoo_">
                <span className=" text-xs lg:text-base py-3 px-3   bg-orange-600 text-white lg:py-3 inline-flex mt-4 lg:px-4 font-bold font-barlow  mr-2">Watch video <span class="material-symbols-outlined">
                  videocam
                </span></span></a>
            </div>
            <div>
              <NavLink to="/projects/neeta_residency"  >
                <span className=" text-xs lg:text-base py-3 px-3 bg-orange-600 text-white lg:py-3  inline-flex mt-4 lg:px-4 font-bold font-barlow font-barlow">View Project</span></NavLink>
            </div>
          </div>
          <div className="w-auto lg:px-12 mt-20  pl-12 pr-4 lg:w-1/2  ">
            <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
              <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b2} alt="" />
            </div>
          </div>
        </div>



        <div className="w-auto flex-wrap justify-center flex xl:py-28 xl:px-28 px-4 mx-0 py-8 lg:py-12 lg:px-8">
          <div className="w-auto lg:px-12 mt-12  pl-12 pr-4 lg:w-1/2 ">
            <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
              <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b41} alt="" />
            </div>
          </div>
          <div className="w-auto mt-4 lg:w-1/2 lg:mt-0 ">
            <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow font-barlow">Residential Properties </h1>
            <Heading title="Sushil Residency" />


            <p className="mt-8 max-sm:text-xs text-base ">Located at Singh More,  Hatia which provides the right mix of peace, business, and excellent connectivity and brings you the best of  both a fully modernized living and inspiringly beautiful place that rejuvenates you thoroughly and provides a pictures prefect living.  </p>
            <div className="grid grid-rows-3  mt-4">
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>3 BHK Homes with Luxury Amenities</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>Excellent connectivity to airport and railway station</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>CNT Project</p>
            </div>
            <div>
              <a href="https://youtu.be/NV7RsjKzidQ?si=hcbSQvLpgd3TdPPL">
                <span className="text-xs lg:text-base py-3 px-3 bg-orange-600 text-white lg:py-3 inline-flex mt-4 lg:px-4 font-bold font-barlow  mr-2">Watch video<span class="material-symbols-outlined">
                  videocam
                </span></span></a>
            </div>
            <div>
              <a href={sushilbrochure}>
                <span className="text-xs lg:text-base py-3 px-3 bg-orange-600 text-white lg:py-3 inline-flex mt-4 lg:px-4 font-bold font-barlow  mr-2">Download Brochure<span class="material-symbols-outlined">
                  download
                </span></span></a>
            </div>
          </div>
        </div>



        <div className="w-auto flex-wrap justify-center flex xl:py-28 xl:px-28 bg-slate-100 px-4 mx-0 py-8 lg:py-12 lg:px-8">
          <div className="w-auto  lg:w-1/2  ">
            <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow">School Project </h1>
            <Heading title="Holy Family School" />

            <p className="mt-8  max-sm:text-xs text-base">The Holy Family School is located in Kurdeg, Simdega. The school is built in area of 65,000 Sq. Ft. Constructed as per School Building Bye Laws.</p>
            <div className="grid grid-rows-3  mt-4">
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>Located in Kurdeg Simdega</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>65,000 Sq. Ft. Area with G+2 floors</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>As Per School Building Bye Laws</p>
            </div>
            <div>
              <a href="">
                <span className="text-xs lg:text-base py-3 px-3  bg-orange-600 text-white lg:py-3 inline-flex mt-4 lg:px-4 font-bold font-barlow  mr-2">Watch video <span class="material-symbols-outlined">
                  videocam
                </span></span></a>
            </div>
          </div>
          <div className="w-auto lg:px-12 mt-20  pl-12 pr-4 lg:w-1/2  ">
            <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
              <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={school1} alt="" />
            </div>
          </div>
        </div>




        <div className="w-auto flex-wrap justify-center flex xl:py-28 xl:px-28 px-4 mx-0 py-8 lg:py-12 lg:px-8">
          <div className="w-auto lg:px-12 mt-12  pl-12 pr-4 lg:w-1/2  ">
            <div className="w-2/9  mx-auto h-96 border-4 border-gray-400">
              <img className="-mt-10 -ml-10 h-full w-full object-cover drop-shadow-2xl" src={b5} alt="" />
            </div>
          </div>
          <div className="w-auto mt-4 lg:w-1/2 lg:mt-0">
            <h1 className="max-sm:text-xs text-sm font-bold font-serif font-barlow">Residential Properties </h1>
            <Heading title="Gayatri Enclave" />

            <p className="mt-8  max-sm:text-xs text-base">The Enclave is more than a contemporary residential
              development. It’s a lifestyle experience that offers you
              just about everything. A generous mix of spacious
              apartments and outdoor spaces, The Enclave has been
              designed for luxurious family life</p>
            <div className="grid grid-rows-3  mt-4">
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>Located in Hatiya, Ranchi</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>3 BHK homes with Luxury Amenities</p>
              <p className="text-sm lg:text-lg font-barlow flex"><span class="material-symbols-outlined  text-orange-500">
                arrow_right
              </span>Open For Booking</p>
            </div>
            <div>
              <a href={gayatribrochure}>
                <span className="text-xs lg:text-base py-3 px-3 bg-orange-600 text-white lg:py-3 inline-flex mt-4 lg:px-4 font-bold font-barlow  mr-2">Download Brochure <span class="material-symbols-outlined">
                  download
                </span></span></a>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
