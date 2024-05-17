import React, { useContext, useEffect } from 'react';
// import useSidebare from '../../utils/hooks/useSidebare';
import Formulaire from '../../components/formulaire/Formulaire';
import Table from '../../components/table/Table';
import HeaderTable from '../../components/headerTable/HeaderTable';
import { CategorieContext } from '../../utils/context/CategorieContext';
import Sidebare from '../../components/sidebare/Sidebare';

const Categories = () => {
	const {
		table,
		categories,
		inputs,
		actions,
		handleSubmit,
		updateCategoryQuantities,
		fetchCategories,
		handleChange,
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
		<div
        className="flex bg-gray-700 p-[20px]   gap[20px]"
		>
            <Sidebare />
        <div className="bg-white rounded-[20px] p-[2rem] flex-1 gap-[1.5rem] justify-between mb-5 h-auto ml-8">  
    
			<HeaderTable
				title="Liste categories"
				nomAjout="Ajouter un nouveau categorie"
				body={
					<Formulaire	
						inputs={inputs}
						onSubmit={handleSubmit}
						onChange={handleChange}
						handleSelectChange={handleSelectChange}
					/>
				}
			/>
			<Table thead={table} tbody={categories} actions={actions} />
		</div>
        </div>

	);
};

export default Categories;
