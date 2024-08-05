import b2 from "../assets/images/b2.jpg";
import c2 from "../assets/images/c2.jpg";
import Slider from "react-slick";
import G5 from "../assets/images/G5.png";
import G6 from "../assets/images/G6.png";
import map from "../assets/images/map.png";
import G7 from "../assets/images/G7.png";
import b3 from "../assets/images/b3.jpg";
import { useEffect } from "react";
import * as React from "react";
import "yet-another-react-lightbox/styles.css";
import BookNow from "../components/BookNow";
import Tab1 from "../components/Tab1"
import Location from "../components/Location";
import Gym from "../components/Gym";
import { HashLink } from 'react-router-hash-link';



export const Neeta = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        fade: true

    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [open, setOpen] = React.useState(false);

    return (

        <div className="bg-slate-100">

            <section className="my-4 ">
                <div className="image-wrap  absolute "><div style={{ backgroundImage: `url(${b2})` }} className="  h-full w-full bg-cover bg-center ">
                    <div className="absolute h-full w-full bg-gradient-to-r from-slate-400/10 to-slate-900/95">
                        <div className="flex flex-col items-center h-full w-full justify-center">
                            <h2 className="font-Arizonia max-sm:text-6xl text-8xl">Neeta Residency </h2>
                            <p className="font-Abhaya text-white text-3xl max-sm:text-lg mt-6">Elegant | Comfortable | Opulent</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>



            <section className="py-4 px-4 max-sm:py-2 max-sm:px-2">
                <div className="grid grid-cols-2   lg:-ml-72 xl:-ml-28 ">
                    <div className="Relative z-10 h-64 w-2/3 border-2  py-8 px-8 mx-80 -mt-24 shadow-xl bg-white max-sm:py-6 max-sm:w-80 max-sm:h-52 max-sm:ml-4 ">
                        <div className="flex flex-wrap justify-center">
                            <h2 className="font-bold font-serif text-2xl max-sm:text-xl">The New Frontier</h2>
                            <p className="font-barlow  text-gray-600 text-center my-6 max-sm:text-sm max-sm:my-2">Located at one of the prime locations in the Ranchi, the Capital city of Jharkhand, Overlooking large green areas, Harmu River and the city skyline .</p>
                            <HashLink to="/projects/neeta_residency#Book" className=" px-4 py-3 bg-primary text-white">Book Now</HashLink>

                        </div>
                    </div>
                    <div className=" relative -mt-52 h-auto max-sm:w-0 ">
                        <img src={c2} alt="" />
                    </div>
                    <div>
                    </div>
                </div>
            </section>


            <Tab1 />


            <section className="lg:py-8 xl:px-8  max-sm:px-2  max-sm:py-2 ">
                <div className="flex-wrap w-auto justify-center flex">
                    <div className="xl:w-1/2  max-sm:w-auto">
                        <div className="grid grid-cols-2 gap-10 max-sm:grid max-sm:grid-cols-1  max-sm:text-center">
                            <div> <h1 className="font-abhaya-libre text-3xl text-slate-800"><a className="font-bold text-red-700">46</a> Units</h1>  <p className="font-nunito-sans">IN GOOD MAINTENANCE </p></div>
                            <div> <h1 className="font-abhaya-libre text-3xl text-slate-800"><a className="font-bold text-red-700">Large</a> Community Hall</h1>  <p className="font-nunito-sans"> FOR YOUR SMALL OR BIG LIFE OCCASSIONS</p></div>
                            <div> <h1 className="font-abhaya-libre text-3xl text-slate-800"><a className="font-bold text-red-700">2 Private</a> Terrace Units </h1> <p className="font-nunito-sans">  IN PEACE AND NATURAL AMBIENCE</p></div>
                            <div> <h1 className="font-abhaya-libre text-3xl text-slate-800"><a className="font-bold text-red-700">Spacious</a> Gym </h1> <p className="font-nunito-sans">TO MAKE YOUR WELLNESS AN EXPERIENCE</p></div>
                        </div>
                    </div>
                    <div className="xl:w-1/2  max-sm:w-auto xl:content-center max-sm:py-6 lg:py-20 xl:py-0 ">
                        <div className="grid xl:grid-cols-2 xl:gap-12 lg:grid-cols-3 lg:gap-10 px-4 max-sm:grid max-sm:grid-cols-1 max-sm:py-12 max-sm:gap-8">
                            <div className="font-nunito-sans text-2xl   text-slate-600"><span class="material-symbols-outlined">
                                arrow_circle_right
                            </span>  Modern Facde</div>
                            <div className="font-nunito-sans text-2xl   text-slate-600"><span class="material-symbols-outlined">
                                arrow_circle_right
                            </span>  Driveway Jogging</div>
                            <div className="font-nunito-sans text-2xl   text-slate-600"><span class="material-symbols-outlined">
                                check_circle
                            </span> EV Charging Station</div>
                            <div className="font-nunito-sans text-2xl   text-slate-600"><span class="material-symbols-outlined">
                                check_circle
                            </span> Elder's Zone</div>
                            <div className="font-nunito-sans text-2xl   text-slate-600"><span class="material-symbols-outlined">
                                check_circle
                            </span> Ample Bike Parking</div>
                            <div className="font-nunito-sans text-2xl   text-slate-600"><span class="material-symbols-outlined">
                                check_circle
                            </span>  Greenery</div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-4 xl:px-4 lg:px-6 max-sm:px-2  max-sm:py-2">
                <div className="flex-wrap w-auto justify-center flex">
                    <div className="xl:w-1/2 xl:mt-24 max-sm:w-auto max-sm:mt-4">
                        <div className="w-auto px-4 max-sm:px-2">
                            <img src={b3} alt="" />
                        </div>
                        <div className=" flex flex-wrap   px-6 mt-2 py-4 max-sm:px-2">
                            <h2 className=" font-abhaya-libre text-3xl">Modern Facade</h2>
                            <p className=" font-nunito-sans text-gray-700 py-6 text-lg  ">The 3 BHK Lavish Homes at Neeta Residency are set in a lush, lovely environment that enhances the building's aesthetic appeal.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-full max-sm:w-full slider-container relative max-sm:px-2 max-sm:py-6 lg:py-6 lg:px-4 xl:px-0 xl:py-0">
                        <Slider {...settings}>
                            <div className=" slide"><div style={{ backgroundImage: `url(${G5})` }} className="min-h-screen w-full max-sm:bg-contain bg-no-repeat bg-cover bg-center bg-gray-900 py-6 px-6 "><b className="text-white text-2xl">G5</b></div></div>
                            <div className=" slide"><div style={{ backgroundImage: `url(${G6})` }} className="min-h-screen w-full max-sm:bg-contain  bg-no-repeat bg-cover bg-center bg-gray-900 py-6 px-6"><b className="text-white text-2xl">G6</b>   </div></div>
                            <div className=" slide"><div style={{ backgroundImage: `url(${map})` }} className="min-h-screen w-full max-sm:bg-contain  bg-no-repeat bg-cover bg-center bg-gray-900  py-6 px-6"><b className="text-white text-2xl">Site Plan</b>   </div></div>
                            <div className=" slide"><div style={{ backgroundImage: `url(${G7})` }} className="min-h-screen w-full max-sm:bg-contain  bg-no-repeat bg-cover bg-center bg-gray-900 py-6 px-6"> <b className="text-white text-2xl">G1-G4</b>  </div></div>
                        </Slider>
                    </div>
                </div>
            </section>

            <Gym />
            <Location />
            <BookNow />

        </div>
    );
}

export default Neeta;