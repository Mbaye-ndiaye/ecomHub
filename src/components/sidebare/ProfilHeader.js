import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProfilHeader = () => {
  return (
    <div className="flex itms-center justify-between ">
      <h2>Profil</h2>
      <div className="bg-[#dde6ed] p-[10px] text-[#969393] flex items-center justify-center">
        <Link to={"/profile"}>
          <BiEdit className="text-[20px]" />
        </Link>
      </div>
    </div>
  );
};

export default ProfilHeader;
