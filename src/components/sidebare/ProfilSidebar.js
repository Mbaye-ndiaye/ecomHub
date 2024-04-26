import ProfilHeader from "./ProfilHeader";
import image from "../../assets/img1.jpeg";
import { BiBook } from "react-icons/bi";
const course = [
  {
    title: "Boutique1",
    duration: "medina",
    icons: <BiBook />,
  },
];
const PrifilSidebar = () => {
  return (
    <div className="flex-1">
      <ProfilHeader />

      <div className="h-[85%] mt-[2rem] bg-[#dde6ed] rounded p-[10px] flex flex-col">
        <div className="w-[100%] h-[254px] flex flex-col items-center justify-center">
          <img
            src={image}
            alt="/"
            className="object-cover w-[150px] h-[150px] rounded-full mb-[10px]"
          />
          <h3 className="text-[#526d82] text-2xl">Dos Santos</h3>
        </div>
        <div className="bg-white flex-1 items-center justify-center  rounded p-[10px] flex flex-col gap-[10px]">
          <div>
            {course.map((cour) => (
              <div className="bg-[#dde6ed] p-[10px] flex  items-center mt-[5rem] gap-5 rounded">
                <button className="text-xl text-[#526d82] px-7">
                  Deconnecter
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrifilSidebar;
