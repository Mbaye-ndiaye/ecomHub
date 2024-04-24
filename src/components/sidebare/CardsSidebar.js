import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from "react-icons/bi";

const course = [
  {
    title: "web Development",
    icons: <BiLogoHtml5 />,
  },

  {
    title: "App Development",
    icons: <BiLogoAndroid />,
  },

  {
    title: "web Development",
    icons: <BiBuilding />,
  },
];
const CardsSidebar = () => {
  return (
    <div className="flex gap-[20px] items-center mt-[2rem]">
      {course.map((item) => (
        <div className="flex-1 p-[20px] bg-[#dde6ed] rounded flex items-center flex-col gap-[20px] ease-in-out hover:scale-105 hover:cursor-pointer">
          <div className="bg-white text-[3rem] flex items-center justify-center p-[20px] rounded-[20px] text-[#969393]">
            {item.icons}
          </div>
          <div>
            <h2 className="bg-[#ffffffc0] w-[100%] text-center py-[10px] px-5 text-[14px] text-[#526D82] rounded">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSidebar;
