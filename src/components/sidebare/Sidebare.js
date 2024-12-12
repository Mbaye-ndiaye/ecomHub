import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/dashboard/commandes",
      name: "Commandes",
      icon: <FaRegChartBar />,
    },
    {
      path: "/dashboard/categories",
      name: "Categories",
      icon: <FaCommentAlt />,
    },
    {
      path: "/dashboard/produis",
      name: "Product",
      icon: <FaThList />,
    },
    {
      path: "/dashboard/message",
      name: "Message",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <div className="flex bg-gray-700 h-screen p-[20px] gap[20px]">
      <div
        style={{
          width: isOpen ? "200px" : "50px",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          transition: "width 0.3s",
        }}
        className="w-[200px] h-[100vh] "
      >
        <div className="flex items-center text-white px-[10px] py-[15px]">
          <div className="flex text-[25px]  ">
            <FaBars onClick={toggle} />
          </div>
          <h1
            style={{
              display: isOpen ? "block" : "none",
              marginLeft: isOpen ? "20px" : "0px",
            }}
            className="text-[30px]"
          >
            Logo
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={{ width: isOpen ? "170px" : "70px" }}
            className="flex text-white px-[10px] py-[15px]  gap-[8px] hover:bg-white hover:text-gray-700 "
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text z-50"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main
        style={{ marginLeft: isOpen ? "130px" : "30px" }}
        className="w-[100%] p-[10px]"
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
