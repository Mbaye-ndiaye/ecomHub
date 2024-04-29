import { BiSearch, BiNotification } from "react-icons/bi";
const ContentHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[#526d82] text-2xl">Dashboard</h1>
      <div className="flex items-center gap-[20px]">
        <div className="bg-blue-300 px-5 py-1 rounded flex items-center">
          <input
            type="text"
            placeholder="recherche..."
            className="border-0 outline-none bg-transparent p-[5px]"
          />
          <BiSearch className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>

        <div className="bg-[#dde6ed] p-[12px] rounded text-[#969393] flex items-center justify-center ">
          <BiNotification className="text-[#969393] text-md cursor-pointer ease-in-out duration-100 hover:cursor-pointer hover:scale-75" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;

