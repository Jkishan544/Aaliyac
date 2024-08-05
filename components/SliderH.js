import Slider from "react-slick";
import React from "react";


import a1 from "../assets/images/a1.jpg";
import a2 from "../assets/images/a2.jpg";
import b3 from "../assets/images/b3.jpg";


export const SliderH = () => {
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

  return (

    <div className="max-sm:text-lg slider-container relative mt-4 ">
      <Slider {...settings}>
        <div className=" image-wrap "><div style={{ backgroundImage: `url(${a1})` }} className="h-full w-full bg-cover bg-center zoom opacity-75  ">   </div></div>
        <div className=" image-wrap "><div style={{ backgroundImage: `url(${b3})` }} className="h-full w-full bg-cover bg-center zoom opacity-75  ">   </div></div>
        <div className=" image-wrap "><div style={{ backgroundImage: `url(${a2})` }} className="h-full w-full bg-cover bg-center zoom opacity-75  ">   </div></div>
      </Slider>
      <div className="absolute bottom-1 right-0 left-16 xl:left-96 bg-black mb-1 py-8 max-sm:px-0 ml-12 xl:py-6 xl:ml-48 xl:pl-30 text-center">
        <p className="text-white max-sm:text-xl text-6xl ">We Build <b className="text-orange-500">Structure</b> And <b className="text-orange-500">Relationship</b> To Last..</p>
      </div>
    </div>



  );
}
export default SliderH;
