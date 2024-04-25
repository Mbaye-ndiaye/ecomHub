import React from "react";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
} from "react-icons/bi";
// import SidebareLink from "./SidebareLink";
// import { menus } from "./SidebareData";
// import useSidebare from "../../utils/hook/useSidebare";

const Sidebare = () => {
  // const { open, smallScreen, screenSize } = useSidebare();

  return (
    // <>
    // {open && smallScreen <= 767 ? (
    //   screenSize()
    // ) : (
    //   <div
    //     className={`bg-gray-200 w-60  ${
    //       !open && smallScreen <= 767 ? "opacity-95 " : ""
    //     }  fixed min-h-screen ${
    //       open ? "" : "md:w-16"
    //     } duration-50 text-gray-700 px-4`}
    //   >
    //     <SidebareLink menus={menus} open={open} />
    //   </div>
    // )}

    <div className=" flex flex-col gap-[2.3rem] h-[94vh]">
      <div className="text-center p-[20px] text-white items-center flex gap-5">
        <BiBookAlt />
        <h2 className="text-2xl">Bienvenu</h2>
      </div>

      <div>
        <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
          <BiHome className="text-lg" />
          Dashboard
        </p>

        <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
          <BiTask className="text-lg" />
          Boutiques
        </p>

        <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
          <BiStats className="text-lg" />
          Categories
        </p>

        <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px]  rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
          <BiSolidReport className="text-lg" />
          Commande
        </p>

        <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
          <BiMessage className="text-lg" />
          Message
        </p>
      </div>
    </div>

    // </>
  );
};

export default Sidebare;
