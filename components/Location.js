import school from "../assets/images/school.jpg";
import hospital from "../assets/images/hospital.jpg";
import bus from "../assets/images/bus.jpg";
import train from "../assets/images/train.jpg";
import mall from "../assets/images/mall.jpg";
import market from "../assets/images/market.jpg";
import park from "../assets/images/park.jpg";
import airport from "../assets/images/airport.jpg";


export const Location = () => {
    return (

        <section className="py-6 px-4 max-sm:px-0 ">
            <div className="flex-wrap w-auto  flex">
                <div className="xl:w-1/2 xl:px-4 py-2 max-sm:w-auto max-sm:px-2">
                    <div className="px-4 max-sm:px-2">
                        <h1 className="text-5xl font-bold font-Abhaya1 max-sm:text-3xl">It's All In The Location</h1>
                        <p className="xl:w-4/5 font-nunito-sans text-gray-900 py-3 max-sm:w-auto">Away from the hustle and bustle of the city and yet the project has proximity to all the major pins of the town. Being located in Harmu, Ranchi, the project has easy accessibility to every corner of the city.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 px-4 max-sm:grid max-sm:grid-cols-1 max-sm:px-2">
                        <div className=" relative"><div style={{ backgroundImage: `url(${park})` }} className=" min-h-52 w-full bg-cover bg-center py-6 px-6 text-white opacity-80 content-end "><p className=" relative text-white text-xl z-10 font-bold">Park<br /><span className="text-base">1km Away</span></p> <div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <div className="relative"><div style={{ backgroundImage: `url(${market})` }} className="  min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">Market <br /><span className="text-base"> 1km Away</span></p> <div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <div className="relative"><div style={{ backgroundImage: `url(${school})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">School <br /><span className="text-base"> 2km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <div className=" min-h-52 w-full font-bold  max-sm:flex max-sm:flex-wrap max-sm:justify-center content-center text-center">Near Veer Kunwar Singh Chowk, Harmu Housing Colony, Ranchi – 834002 </div>
                        <div className="relative"><div style={{ backgroundImage: `url(${airport})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">Airport <br /> <span className="text-base">9km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <div className="relative"><div style={{ backgroundImage: `url(${hospital})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">Hospital <br /><span className="text-base"> 2km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <div className="relative"><div style={{ backgroundImage: `url(${train})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">Railway <br /> <span className="text-base">5km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-20 bg-black"></div></div></div>
                        <div className="relative"><div style={{ backgroundImage: `url(${mall})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">Mall <br /><span className="text-base"> 3km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>
                        <div className="relative"><div style={{ backgroundImage: `url(${bus})` }} className=" min-h-52 w-full bg-cover bg-center  py-6 px-6 text-white opacity-80 content-end"><p className="relative text-white text-xl z-10 font-bold">Bus stand <br /><span className="text-base"> 4km Away</span></p><div className=" absolute  h-full w-full top-0 left-0 bg-opacity-10 bg-black"></div></div></div>


                    </div>

                </div>
                <div className="xl:w-1/2 max-sm:w-full   lg:w-full py-8 px-4 xl:px-0 xl:py-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d828.6378308051054!2d85.3022189!3d23.3629374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e10077f9aa15%3A0xa92d4c79dbcba8d1!2sNeeta%20Residency!5e1!3m2!1sen!2sin!4v1722232942650!5m2!1sen!2sin" width="100%" height="800" style={{ border: 0, width: '100%' }} allowfullscreen=""></iframe>
                </div>
            </div>
        </section>



    );
}

export default Location;