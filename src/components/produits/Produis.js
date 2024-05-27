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
    //    produits,
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
    //  selects
  } = useProduit();

  // const {titreModal, setTitreModal,  textarea,  ...otherValues } = useProduit();
  // const table = otherValues.table || [];
  // const actions = otherValues.actions || [];
  // const inputs = otherValues.inputs || [];

  useEffect(() => {
    // filtreProdCategorie();
    fetchProduct();
  }, [products]);

  // useEffect(() => {
  //   setCategoryNames(categories.map((categorie) => categorie.name));
  //   // setFiltreProduits(products)
  // }, [categories]);

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
            <Formulaire
              inputs={inputs}
              textarea={textarea}
              selects={selects}
              onSubmit={hanldleSubmit}
              handleSelectChange={handleSelectChange}
            />
          }
        />
        <Table thead={table} tbody={filtreProduits} actions={actions} />
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Produis;
