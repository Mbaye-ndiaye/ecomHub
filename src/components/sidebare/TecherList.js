import React from "react";
import img from "../../assets/imgShop.jpg";
const teachers = [
  {
    image: img,
    name: "Dos Snatos",
    duration: "medine",
    const: "",
  },
];

const TeachersList = () => {
  return (
    <div>
      <div className="flex my-[2rem] mx-0 justify-between">
        <h2 className="text-xl text-[#526d82]">Boutiques</h2>
        <select className="rounded border-0 py-[8px] px-[12px] border-1 boder-[#dde6ed] text-[#526d82]">
          <option value="boutique1">Boutique1</option>
          <option value="boutique2">Boutique2</option>
        </select>
      </div>
      <div className="flex flex-col gap-[15px]">
        {teachers.map((bout) => (
          <div className="flex pr-[10px] items-center justify-between hover:bg-[#dde6ed] hover:rounded">
            <div className="flex items-center gap-[20px] text-[#526d82]">
              <img
                src={bout.image}
                alt="/"
                className="w-[50px] h-[50px] bg-[#dde6ed] rounded-full"
              />
              <h2>{bout.name}</h2>
            </div>
            <span>{bout.duration}</span>
            <span>{bout.const}</span>
            <span>:</span>
          </div>
        ))}
      </div>

      <div className="flex my-[2rem] mx-0 justify-between">
        <h2 className="text-xl text-[#526d82]">Boutiques</h2>
        <select className="rounded border-0 py-[8px] px-[12px] border-1 boder-[#dde6ed] text-[#526d82]">
          <option value="boutique1">Boutique1</option>
          <option value="boutique2">Boutique2</option>
        </select>
      </div>
      <div className="flex flex-col gap-[15px]">
        {teachers.map((bout) => (
          <div className="flex pr-[10px] items-center justify-between hover:bg-[#dde6ed] hover:rounded">
            <div className="flex items-center gap-[20px] text-[#526d82]">
              <img
                src={bout.image}
                alt="/"
                className="w-[50px] h-[50px] bg-[#dde6ed] rounded-full"
              />
              <h2>{bout.name}</h2>
            </div>
            <span>{bout.duration}</span>
            <span>{bout.const}</span>
            <span>:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersList;
