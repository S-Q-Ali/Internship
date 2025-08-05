import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import explore_1 from "../assets/explore/explore_1.png"
import explore_2 from "../assets/explore/explore_2.png"
import explore_3 from "../assets/explore/explore_3.png"
import explore_4 from "../assets/explore/explore_4.png"
import explore_5 from "../assets/explore/explore_5.png"

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
export default function Explore(){
    return (
        <>
        <div className="text-3xl font-semibold my-20 text-center underline underline-offset-8 decoration-gray-300 decoration-0 ">
            EXPLORE MORE
        </div>
        <div className="w-7xl max-w-7xl m-auto">
            < Slider {...settings}>
                {data.map((d)=>(
                    <div key={d.name}>
                        <div className="w-full">
                            <img src={d.img} alt="" className="w-full cursor-pointer transition-all hover:scale-95 duration-300 border-0 rounded-md" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
}

const data=[
    {
        name:"Explore 1",
        img:`${explore_1}`
    },
    {
        name:"Explore 2",
        img:`${explore_2}`
    },
    {
        name:"Explore 3",
        img:`${explore_3}`
    },
    {
        name:"Explore 4",
        img:`${explore_4}`
    },
    {
        name:"Explore 5",
        img:`${explore_5}`
    },
]