import React from "react";
import SidebareLink from "./SidebareLink";
import { menus } from "./SidebareData";
import useSidebare from "../../utils/hook/useSidebare";


const Sidebare = () => {
  const { open, smallScreen, screenSize } = useSidebare();

  return (
    <>
      {open && smallScreen <= 767 ? (
        screenSize()
      ) : (
        <div
          className={`bg-[#10114ff8] w-60  ${
            !open && smallScreen <= 767 ? "opacity-95 " : ""
          }  fixed min-h-screen ${
            open ? "" : "md:w-16"
          } duration-50 text-[#fff] px-4`}
        >
          <SidebareLink menus={menus} open={open} />
        </div>
      )}
    </>
  );
};

export default Sidebare;
