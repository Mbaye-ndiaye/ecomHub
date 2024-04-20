import Item from "./Items";
import { CLIEN, CONTACT, COMPANY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      {/* <Item Links={ECOMHUB} title="ECOMHUB" />
       */}
      <h1 className="mb-1 font-semibold text-blue-600 text-2xl">ECOMHUB</h1>
      <Item Links={CLIEN} title="PRODUCTS" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={CONTACT} title="CONTACT" />
    </div>
  );
};

export default ItemsContainer;
