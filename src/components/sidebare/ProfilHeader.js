import { BiEdit } from "react-icons/bi";

const ProfilHeader = () => {
  return (
    <div className="flex itms-center justify-between ">
      <h2>Profil</h2>
      <div className="bg-[#dde6ed] p-[10px] text-[#969393] flex items-center justify-center">
        <BiEdit className="text-[20px]" />
      </div>
    </div>
  );
};

export default ProfilHeader;
