import React, { useContext, useEffect } from "react";
// import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from "../../components/formulaire/Formulaire";
import Table from "../../components/table/Table";
import HeaderTable from "../../components/headerTable/HeaderTable";
import { CategorieContext } from "../../utils/context/CategorieContext";
import Sidebare from "../../components/sidebare/Sidebare";

const Categories = () => {
  const {
    table,
    categories,
    // inputs,
    actions,
    handleSubmit,
    formData,
    updateCategoryQuantities,
    fetchCategories,
    handleChange,
    userShops,
    produits,
  } = useContext(CategorieContext);

  // const { open, closedrop } = useSidebare();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    updateCategoryQuantities();
  }, []);

  const handleSelectChange = (e) => {};

  return (
    <div className="">
      <div className="bg-white rounded-[20px] p-[2rem] flex-1 mb-5 h-auto ">
        <HeaderTable
          title="Liste categories"
          nomAjout="Ajouter un nouveau categorie"
          body={
            <form className="flex gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col ">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium "
                >
                  Nom du catégorie
                </label>
                <input
                  required
                  type="text"
                  id="categories"
                  name="categories"
                  className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  value={formData.categories}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="mx-3 text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-850 shadow-lg shadow-gray-500/50 dark:shadow-sm font-medium rounded-lg text-sm px-5 py-3 text-center  me-2 mb-2"
              >
                Enregistrer
              </button>
            </form>
            // <Formulaire
            //   inputs={inputs}
            //   onSubmit={handleSubmit}
            //   OnChange={handleChange}
            //   handleSelectChange={handleSelectChange}
            // />
          }
        />
        <Table thead={table} tbody={categories} actions={actions} />
      </div>
    </div>
  );
};

export default Categories;
