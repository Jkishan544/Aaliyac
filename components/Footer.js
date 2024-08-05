import c1 from "../assets/images/c1.png";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";
import { ReactComponent as Youtube } from "../assets/images/youtube.svg";
import { ReactComponent as Whatsapp } from "../assets/images/whatsapp.svg";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";


export const Footer = () => {
      useEffect(() => {
            window.scrollTo(0, 0)
      }, [])

      return (
            <footer className=" bg-gray-950 pl-4 pr-4  ">
                  <div className=" grid grid-cols-1 gap-2  ml-6  mt-4 mb-4 lg:grid-cols-3 lg:my-16 lg:ml-16 max-sm:py-6  ">
                        <div className="content-center  w-auto mt-8 mb-8 lg:mt-12">
                              <img src={c1} alt="" className="h-16 w-16 " />
                              <p className="max-sm:text-sm text-lg -ml-4 mt-4 content-center text-gray-400 w-auto lg:w-2/3 lg:text-sm">Aaliya Construction is a renowned name in the Real Estate sector with an experience of more than 7 Years guiding through its growth. We are committed to deliver, what we promise every time and before time.</p>
                              <div className="grid grid-cols-8 gap-5 mt-6 ">

                                    <a className="fill-orange-600 lg:h-8 lg:w-8 -mt-1" href="https://www.facebook.com/AaliyaConstructionRanchi"><Facebook /> </a>
                                    <a className="fill-orange-600 lg:h-8 lg:w-8" href="https://www.instagram.com/aaliyaconstruction/"><Instagram /> </a>
                                    <a className="fill-orange-600 lg:h-8 lg:w-8" href="https://www.youtube.com/@aaliyaconstruction"><Youtube /></a>
                                    <a className="fill-orange-600 lg:h-8 lg:w-8" href="https://api.whatsapp.com/send?phone=916205408020&text=Hello%2C%20I%20want%20more%20info%20about%20Sushil%20Residency">
                                          <Whatsapp /></a>
                              </div>
                        </div>
                        <div className="content-center mt-4 ml-12 max-sm:py-6 max-sm:mt-8">
                              <h1 className="text-white max-sm:text-sm text-xl -mt-12  "><b>Our Company</b></h1>

                              <nav className="mt-4">
                                    <NavLink to="/" className="  text-gray-400  flex lg:text-sm "><span class="material-symbols-outlined text-orange-500 mr-2">
                                          chevron_right
                                    </span>Home</NavLink>
                                    <NavLink to="/about" className=" text-gray-400 flex lg:text-sm mt-2" ><span class="material-symbols-outlined  text-orange-500 mr-2">
                                          chevron_right
                                    </span>About</NavLink>
                                    <NavLink to="/projects" className=" text-gray-400 flex lg:text-sm mt-2"  ><span class="material-symbols-outlined  text-orange-500 mr-2">
                                          chevron_right
                                    </span>Project</NavLink>
                                    <NavLink to="/contact" className=" text-gray-400 flex lg:text-sm mt-2"  ><span class="material-symbols-outlined  text-orange-500 mr-2">
                                          chevron_right
                                    </span>Contact</NavLink>
                              </nav>

                        </div>
                        <div className="content-center mt-4 -mb-4 max-sm:py-6 max-sm:mt-0">
                              <h1 className="text-white max-sm:text-sm text-xl "><b>Contact Details</b></h1>
                              <a className="mt-6  text-gray-400 inline-flex max-sm:text-sm  text-lg lg:text-sm"><span class="material-symbols-outlined text-orange-500  mr-2">
                                    location_on
                              </span>Road No.0,Bando Haat,HawaiNagar, Ranchi,Jharkhand-834003</a>
                              <a className="mt-6  text-gray-400 align-middle max-sm:text-sm  text-lg flex lg:text-sm"><span class="material-symbols-outlined  text-orange-500  mr-2">
                                    call
                              </span>6205408020</a>
                              <a className="mt-6  text-gray-400 align-middle max-sm:text-sm  text-lg flex lg:text-sm"><span class="material-symbols-outlined  text-orange-500  mr-2">
                                    phone_iphone
                              </span>6205599190</a>
                              <a className="mt-6 text-gray-400 align-middle max-sm:text-sm  text-lg flex lg:text-sm"><span class="material-symbols-outlined  text-orange-500  mr-2">
                                    mail
                              </span>aaliyaconstruction2013@gmail.com</a>
                        </div>
                  </div>
                  <hr className=" border-slate-800  mt-4 mb-4 lg:mt-12" />
                  <div className="grid grid-cols-1  text-center mt-4  lg:grid-cols-2 ">
                        <div className="   text-sm   text-gray-200"><b>Copyright © 2024 Aaliya Construction</b></div>
                        <div className="   float-right text-sm mb-8 text-gray-200 "><b >Powered by Media Express</b></div>
                  </div>
            </footer>
      )
}
