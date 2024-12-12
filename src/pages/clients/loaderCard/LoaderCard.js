import React from "react";

const LoaderCard = () => {
  const contenue = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];
  return (
    <div className="animate-pulse">
      <h1 className="mb-5 h-6 rounded-md z-10 bg-slate-200 w-24 mx-auto w-1/2 mt-3"></h1>
      <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-[30px] mt-5 px-4 mx-auto md:max-w-none md:mx-0">
        {contenue.map((contenu, index) => (
          <div key={index} className={`  ${contenu} rounded-md `}>
            <div className=" bg-slate-200 h-[300px] sm:h-[100px] relative overflow-hidden  transition"></div>
            <div className="p-2 flex flex-col justify-between">
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoaderCard;

