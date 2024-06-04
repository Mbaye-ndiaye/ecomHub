import React, { useEffect } from "react";
import useProduit from "../../utils/hooks/useProduit";
import HeaderTable from "../headerTable/HeaderTable";
// import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from "././../formulaire/Formulaire";
import Table from "../table/Table";
import Sidebare from "../sidebare/Sidebare";
import Select from "./Select";
// import { ToastContainer } from 'react-toastify';

const Produis = () => {
  const {
    table,
    actions,
    titreModal,
    setTitreModal,
    filtreProduits,
    handleSelectChange,
    products,
    // formData,
    handleChange,
    handleImageChange,
    filtreProdCategorie,
    fetchProduct,
    // setCategoryNames,
    // setFiltreProduits,
    categories,
    categoryNames,
    setCategoryNames,
    handleSelectChangeCategorie,
    inputs,
    textarea,
    selects,
    hanldleSubmit,
    fetchCategories,
    imagePreview,
    //  selects
    addProduit,
  } = useProduit();

  useEffect(() => {
    // filtreProdCategorie();
    fetchProduct();

    // window.onload()
  }, []);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCategoryNames(categories.map((categorie) => categorie.name));
    }
  }, [categories]);

  useEffect(() => {
    fetchCategories();
  }, []);

  // const {open, closedrop} = useSidebare()

  setTitreModal("Ajouter un produits");
  return (
    <div>
      {/* <Sidebare/> */}
      <div className="bg-white rounded-[20px] p-[2rem] flex-1  mb-5 h-auto ">
        <HeaderTable
          title="Produits"
          filtre={
            <Select
              contenus={categoryNames}
              handleSelectChange={handleSelectChangeCategorie}
              Title="Catégorie"
            />
          }
          nomAjout={titreModal}
          test="test"
          body={
            // <form className="flex gap-5" onSubmit={addProduit}>
            //   <div className="flex flex-row gap-5  mb-2">
            //     <div className="flex flex-col ">
            //       <label htmlFor="name" className="block text-sm font-medium ">
            //         Nom du produit
            //       </label>
            //       <input
            //         required
            //         type="text"
            //         id="name"
            //         name="name"
            //         className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            //         value={formData.name}
            //         onChange={handleChange}
            //       />
            //     </div>

            //     <div className="flex flex-col mb-2">
            //       <div className="flex flex-col mb-2">
            //         <label
            //           htmlFor="description"
            //           className="block text-sm font-medium "
            //         >
            //           description
            //         </label>
            //         <input
            //           required
            //           type="description"
            //           id="description"
            //           name="description"
            //           className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            //           value={formData.description}
            //           onChange={handleChange}
            //         />
            //       </div>
            //     </div>
            //   </div>

            //   <div className="flex flex-row gap-5  mb-2">
            //     <div className="flex flex-col ">
            //       <label
            //         htmlFor="quantite"
            //         className="block text-sm font-medium "
            //       >
            //         quantite
            //       </label>
            //       <input
            //         required
            //         type="number"
            //         id="quantite"
            //         name="quantite"
            //         className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            //         value={formData.quantite}
            //         onChange={handleChange}
            //       />
            //     </div>

            //     <div className="flex flex-col mb-2">
            //       <div className="flex flex-col mb-2">
            //         <label
            //           htmlFor="prix"
            //           className="block text-sm font-medium "
            //         >
            //           prix
            //         </label>
            //         <input
            //           required
            //           type="number"
            //           id="prix"
            //           name="prix"
            //           className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            //           value={formData.prix}
            //           onChange={handleChange}
            //         />
            //       </div>
            //     </div>
            //   </div>
            //   <div className="flex flex-row gap-5 mb-2">
            //     <div className="relative flex flex-col mb-4">
            //       <label htmlFor="image" className="block text-sm font-medium ">
            //         Banniere du banniere
            //       </label>
            //       <input
            //         required
            //         type="file"
            //         id="image"
            //         name="image"
            //         className="w-[20rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            //         onChange={handleImageChange}
            //       />
            //       {imagePreview && (
            //         <img
            //           src={imagePreview}
            //           alt="Bannière Preview"
            //           className="h-[10rem] w-[15rem]"
            //         />
            //       )}
            //     </div>
            //     <div className="relative flex flex-col mb-4">
            //       {selects.map((select, index) => (
            //         <Select
            //           key={index}
            //           contenus={select.options}
            //           handleSelectChange={select.setValue}
            //           Title={select.label}
            //         />
            //       ))}
            //     </div>
            //   </div>
            //   <button
            //     type="submit"
            //     className="mx-3 text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-850 shadow-lg shadow-gray-500/50 dark:shadow-sm font-medium rounded-lg text-sm px-5 py-3 text-center  me-2 mb-2"
            //   >
            //     Enregistrer
            //   </button>
            // </form>
            <Formulaire
              inputs={inputs}
              textarea={textarea}
              selects={selects}
              onSubmit={hanldleSubmit}
              handleSelectChange={handleSelectChange}
            />
          }
        />
        <Table thead={table} tbody={products} actions={actions} />
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Produis;
