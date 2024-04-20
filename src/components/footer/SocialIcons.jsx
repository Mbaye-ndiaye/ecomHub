import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-blue-600 flex gap-5 text-xl">
      <BsFacebook />
      <BsInstagram />
      <FaLinkedin />
      <FaXTwitter />
      {/* {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))} */}
    </div>
  );
};

export default SocialIcons;
