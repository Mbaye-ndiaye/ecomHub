
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import IsLogin from "../../pages/admin/isLogin"
import {
    BiBookAlt,
    BiMessage,
    BiTask,
    BiHome,
    BiSolidReport,
    BiStats,
} from "react-icons/bi";

import {
    FaTh,
    FaBars,
    FaThList
} from "react-icons/fa";
// import SidebareLink from "./SidebareLink";
// import { menus } from "./SidebareData";
// import useSidebare from "../../utils/hook/useSidebare";

const Sidebare = ({isOpene}) => {
    const [isOpen, setIsOpen] = useState(isOpene);
    const toggle = () => setIsOpen(!isOpen);
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
        <>
        <div style={{width: isOpen ? "200px" : "50px", position: "fixed", top: 0, left: 0, height: "100vh",  transition: "width 0.3s",  }} className="flex flex-col gap-[2.3rem] ">
            <div className="text-center p-[20px] text-white items-center flex gap-5">
                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="flex text-[25px] ml-[50px]">
                    <FaBars onClick={toggle} />
                </div>

                {/* <h2 className="text-2xl">Bienvenu</h2> */}
            </div>
            <div>

                <Link to={"/Dash"}>
                    <div className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
                        <BiHome className="text-lg" />                     
                        <p style={{ display: isOpen ? "block" : "none" }}>Dashboard</p>
                    </div>
                </Link>
                <Link to={"/produis"}>

                    <div className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
                        <BiTask className="text-lg" />
                        <p style={{ display: isOpen ? "block" : "none" }}>Produis</p>
                    </div>
                </Link>

                <div className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
                    <BiStats className="text-lg" />
                    <p style={{ display: isOpen ? "block" : "none" }}>Categories</p>
                </div>

                <div className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px]  rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
                    <BiSolidReport className="text-lg" />
                    <p style={{ display: isOpen ? "block" : "none" }}>Commande</p>
                </div>

                <div className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
                    <BiMessage className="text-lg" />
                    <p style={{ display: isOpen ? "block" : "none" }}>Message</p>
                </div>
            </div>

        </div>
  
        </>
    );
};

export default Sidebare;

// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaThList
// }from "react-icons/fa";


// import { NavLink } from 'react-router-dom';


// const Sidebar = ({children}) => {

//     const menuItem=[
//         {
//             path:"/Dash",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/Produis",
//             name:"List Produis",
//             icon:<FaThList/>

//         },
//         {
//             path:"/analytics",
//             name:"Categories",
//             icon:<BiStats/>
//         },
//         {
//             path:"/Commande",
//             name:"Commande",
//             icon:<BiSolidReport/>
//         },
//         {
//             path:"/Message",
//             name:"Message",
//             icon:<BiMessage/>
//         }
//     ]
//     return (
//       <div className="flex bg-gray-700 p-[20px] h-[100vh] flex gap[20px]">
//       <div style={{ width: isOpen ? "200px" : "50px", position: "fixed", top: 0, left: 0, height: "100vh",  transition: "width 0.3s" }} className="bg-gray-700">
//           <div className="flex items-center px-4 py-3 mb-8">
//               <div className="flex text-3xl mr-8">
//                   <FaBars onClick={toggle} className='text-white cursor-pointer' />
//               </div>
//               <h1 style={{ display: isOpen ? "block" : "none" }} className="text-2xl text-white ">Logo</h1>
//           </div>
//           {
//               menuItem.map((item, index) => (
//                   <NavLink to={item.path} key={index} className="flex text-white px-4 py-3 gap-3" activeClassName="active">
//                       <div className="icon">{item.icon}</div>
//                       <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
//                   </NavLink>
//               ))
//           }
//       </div>
//   </div>
//     );
// };

// export default Sidebar;


// import React from 'react'
// import
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'

// function Sidebar({openSidebarToggle, OpenSidebar}) {
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
//         <div className='sidebar-title'>
//             <div className='sidebar-brand'>
//                 <BsCart3  className='icon_header'/> SHOP
//             </div>
//             <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//         </div>

//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsGrid1X2Fill className='icon'/> Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillArchiveFill className='icon'/> Products
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Categories
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsPeopleFill className='icon'/> Customers
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsListCheck className='icon'/> Inventory
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsMenuButtonWideFill className='icon'/> Reports
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGearFill className='icon'/> Setting
//                 </a>
//             </li>
//         </ul>
//     </aside>
//   )
// }

// export default Sidebar

// import React from "react";

// import { Link } from "react-router-dom";
// // import SidebareLink from "./SidebareLink";
// // import { menus } from "./SidebareData";
// // import useSidebare from "../../utils/hook/useSidebare";

// const Sidebare = () => {
//   // const { open, smallScreen, screenSize } = useSidebare();

//   return (
//     // <>
//     // {open && smallScreen <= 767 ? (
//     //   screenSize()
//     // ) : (
//     //   <div
//     //     className={`bg-gray-200 w-60  ${
//     //       !open && smallScreen <= 767 ? "opacity-95 " : ""
//     //     }  fixed min-h-screen ${
//     //       open ? "" : "md:w-16"
//     //     } duration-50 text-gray-700 px-4`}
//     //   >
//     //     <SidebareLink menus={menus} open={open} />
//     //   </div>
//     // )}

//     <div className=" flex flex-col gap-[2.3rem] h-[94vh]">
//       <div className="text-center p-[20px] text-white items-center flex gap-5">
//         <BiBookAlt />
//         <h2 className="text-2xl">Bienvenu</h2>
//       </div>

//       <div>

//         <Link to={"Dash"}>
//         <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
//           <BiHome className="text-lg" />
//           Dashboard
//         </p>
//         </Link>
//         <Link to={"produis"}>

//         <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
//           <BiTask className="text-lg" />
//           Produis
//         </p>
//         </Link>

//         <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
//           <BiStats className="text-lg" />
//           Categories
//         </p>

//         <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px]  rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
//           <BiSolidReport className="text-lg" />
//           Commande
//         </p>

//         <p className="w-48 mb-3 flex itmes-center gap-[20px] text-md font-bold p-[10px] rounded text-white hover:bg-[#27374d] hover:text-[#dde6ed]">
//           <BiMessage className="text-lg" />
//           Message
//         </p>
//       </div>
//     </div>

//     // </>
//   );
// };

// export default Sidebare;

