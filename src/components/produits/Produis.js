// import FormsModal from "../navbarAdmin/modal/FormsModal";
// import Modal from "../navbarAdmin/modal/Modal";
// import Table from "../table/Table"

// const Produis = ({title}) => {
//     return(
//         <div>
//             <Table title={'Liste des produits'}/>
//             {/* <Modal/> */}
//             {/* <Modal >
//                 <FormsModal/>
//             </Modal> */}
//         </div>
//     )
// }

// export default Produis;


import React from "react";
import useProduit from '../../utils/hooks/useProduit';
import HeaderTable from '../headerTable/HeaderTable';
// import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '././../formulaire/Formulaire';
import Table from "../table/Table";
import Sidebare from "../sidebare/Sidebare";
// import Select from '../cards-et-filtre/Select';
// import { ToastContainer } from 'react-toastify';

const Produis = () => {


  const {table, actions, titreModal, setTitreModal, 
        //   filtreProduits,
          //  handleSelectChange,
           products,
        //    produits,    
        //   filtreProdCategorie,a
        //   fetchProduit, 
        //   setCategoryNames, 
        //   setFiltreProduits, 
        //   categories,
        //   categoryNames, 
        //   handleSelectChangeCategorie, 
          inputs, textarea, selects
          // , hanldleSubmit,
        //    fetchCategories
        } = useProduit();

        // const {titreModal, setTitreModal,  textarea,  ...otherValues } = useProduit();
        // const table = otherValues.table || [];
        // const actions = otherValues.actions || [];
        // const inputs = otherValues.inputs || [];

  

//         useEffect(() => {    
//           filtreProdCategorie()
//           fetchProduit();
//         }, [produits]);

        
//   useEffect(() => {
// 		setCategoryNames(categories.map((categorie) => categorie.nom));
// 		setFiltreProduits(produits)
// 	  }, [categories]); 

//     useEffect(() => {    
//       fetchCategories();
// }, []);
  


  // const {open, closedrop} = useSidebare()

  setTitreModal(
    'Ajouter un produits'
  )
  return (
    <div className="flex bg-gray-700 p-[20px]   gap[20px]">
      <Sidebare/>
      <div className="bg-white rounded-[20px] p-[2rem] flex-1 gap-[1.5rem] justify-between mb-5 h-auto ml-8">  
      <HeaderTable
       title="Produits"
       nomAjout={titreModal} 
       test="test"
       body={<Formulaire 
        inputs={inputs}
        textarea={textarea}
        selects={selects}
                // onSubmit={hanldleSubmit} 
                // handleSelectChange = {handleSelectChange}
            />} 
       />
      <Table thead={table} tbody={products} actions={actions} />
      {/* <ToastContainer /> */}
      </div>
</div>
  )
}

export default Produis