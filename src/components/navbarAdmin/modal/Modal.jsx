import React from "react";
import { FaXmark } from "react-icons/fa6";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0  w-full  flex  justify-center gap-5 z-50">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="bg-white relative my-5 py-8 rounded-lg z-50">
        {/* Bouton pour fermer la modal */}
        <button onClick={onClose} className="absolute top-0 right-0 m-3">
          <FaXmark />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
