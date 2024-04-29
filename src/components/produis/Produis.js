import Sidebare from "../sidebare/Sidebare";

import Table from "../table/Table";

const Produit = () => {
  return (
    <div className="flex bg-gray-700 p-[20px] h-[100vh] flex gap[20px]">
      <Sidebare />
      <div className="bg-white flex-1 rounded-[20px] p-[2rem] flex gap-[1.5rem] justify-between mb-5">
        <Table />
      </div>
    </div>
  );
};

export default Produit;
