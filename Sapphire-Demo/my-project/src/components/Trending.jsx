import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trend_1_1 from "../assets/trending/Trend_1_1.png";
import trend_1_2 from "../assets/trending/Trend_1_2.png";
import trend_2_1 from "../assets/trending/Trend_2_1.png";
import trend_2_2 from "../assets/trending/Trend_2_2.png";
import trend_3_1 from "../assets/trending/Trend_3_1.png";
import trend_3_2 from "../assets/trending/Trend_3_2.png";
import trend_4_1 from "../assets/trending/Trend_4_1.png";
import trend_4_2 from "../assets/trending/Trend_4_2.png";
import trend_5_1 from "../assets/trending/Trend_5_1.png";
import trend_5_2 from "../assets/trending/Trend_5_2.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
export default function Trending() {
  return (
    <>
      <div className="w-full text-3xl text-center font-semibold my-20 underline underline-offset-8 decoration-gray-300 decoration-0">
        TRENDING
      </div>
      <div className="w-full max-w-7xl m-auto">
        <div>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name}>
                <div>
                  <img src={d.img} alt="Trending Images" className="cursor-pointer hover:scale-110 transition-all duration-400 border-0 rounded-2xl hover:rounded-2xl" />
                </div>
                <div className="pl-2 mt-4">
                  <p className="w-30 font-semibold ">{d.name}</p>
                  <p className="text-sm text-gray-700">{d.desciption}</p>
                  <p className="text-gray-600">{d.price}</p>
                  <p className="font-semibold text-sm bg-gray-200 w-16 ">{d.tag}</p>
                </div>
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
    name: "2 Piece - Printed Cotton Suit",
    desciption: "Day to Day Intermix",
    img: `${trend_1_1}`,
    price: `RS.2,490.00`,
    tag: "NEW IN",
  },
  {
    name: "2 Piece - Printed Lawn Suit",
    desciption: "Day to Day Intermix",
    img: `${trend_2_1}`,
    price: `RS.2,490.00`,
    tag: "NEW IN",
  },
  {
    name: "Printed Dobby Shirt",
    desciption: "RTW Summer '25 New",
    img: `${trend_3_1}`,
    price: `RS.2,990.00`,
    tag: "NEW IN",
  },
  {
    name: "3 Piece - Printed Cotton Suit",
    desciption: "Day to Day Intermix",
    img: `${trend_4_1}`,
    price: `RS.3,490.00`,
    tag: "NEW IN",
  },
  {
    name: "Printed Arabic Lawn Shirt",
    desciption: "RTW Summer '25 New",
    img: `${trend_5_1}`,
    price: `RS.2,990.00`,
    tag: "NEW IN",
  },
];
