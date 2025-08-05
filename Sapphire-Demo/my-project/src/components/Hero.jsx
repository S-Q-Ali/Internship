import banner1 from "../assets/banners/Banner1.png";
import banner2 from "../assets/banners/Banner2.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 2,
// };

export default function Hero() {
  const banners = [banner1, banner2];
  const [currentSilde, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [banners.length]);
  const goToNext = () => { 
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };
  return (
    <>
    {/* <div className="w-full">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {data.map((d)=>(
            <div key={d.name} className="w-full">
              <div>
                <img src={d.img} alt="Banners" className="w-full object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div> */}
      <div className="relative w-full h-full overflow-hidden">
        {
          <img
            src={banners[currentSilde]}
            alt="Banner"
            className="w-full h-full cursor:pointer object-cover transition-all duration-1000 hover:scale-105 "
          />
        }
        <button
          onClick={goToNext}
          className="absolute z-10 top-1/2 left-4 transform -traslate-y-1/2 bg-white/80 text-gray-800 font-extrabold p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
        >
          <MdKeyboardArrowLeft size={32} />
        </button>
        <button
          onClick={goToNext}
          className="absolute z-10 top-1/2 right-4 transform -traslate-y-1/2 bg-white/80 text-gray-800 font-extrabold p-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
        >
          <MdKeyboardArrowRight size={32} />
        </button>
      </div>
    </>
  );
}

const data=[
  {
    name:`Banner 1`,
    img:`${banner1}`
  },
  {
    name:`Banner 2`,
    img:`${banner2}`
  }
]