import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpg";

function Temoigne() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="bg-gray-200 p-5">
      <div className="w-[99%] ">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] w-full text-black rounded-xl"
              >
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Ladji Tmera`,
    img: img1,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Awa Ndaiye`,
    img: img2,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Leyna Diouf`,
    img: img3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: img4,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: img5,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

  {
    name: `Mia Williams`,
    img: img6,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

  {
    name: `Mia Williams`,
    img: img7,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Temoigne;
