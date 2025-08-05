import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Man from "../assets/catagory/Men.png"
import Accessories from "../assets/catagory/Accessories.png"
import Modest from "../assets/catagory/Modest_Wear.png"
import ReadytoWear from "../assets/catagory/Ready_To_Wear.png"
import Unstiched from "../assets/catagory/Unstiched.png"
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function ShopbyCatagory() {
  return (
    <>
      <div className="w-full text-center font-stretch-ultra-expanded text-3xl underline underline-offset-8 decoration-gray-300 decoration-0 py-10">
        SHOP BY CATAGORY
      </div>
      <div className="w-5/6 max-w-7xl m-auto">
        <div>
          <Slider {...settings} >
            {data.map((d) => (
              <div key={d.name} >
                <div className=" flex justify-center">
                  <img src={d.img} alt="images" className="h-[360px] w-full object-cover cursor-pointer transition-all duration-400 hover:scale-110 border-0 rounded-2xl hover:rounded-2xl" />
                </div>
                <div className="text-center font-bold">{d.name}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "MEN",
    img: `${Man}`,
  },
  {
    name: "ACCESSORIES",
    img: `${Accessories}`,
  },
  {
    name: `MODEST WEAR`,
    img: `${Modest}`,
  },
  {
    name: "READY TO WEAR",
    img: `${ReadytoWear}`,
  },
  {
    name: "UNSTICHED",
    img: `${Unstiched}`,
  },
];