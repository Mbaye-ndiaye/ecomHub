import React, {useState, useEffect, useContext} from 'react';
import Navbar from '../../../components/clients/navbar/navbar';
import Footer from './../../../components/footer/footer';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FormShopContext } from '../../../utils/context/FormShopContext';




const AboutPage = () => {
	const {name} = useParams();
	const {afficheUneBoutique, boutique} = useContext(FormShopContext)

	const [apropos, setApropos] = useState([]);

	useEffect(() => {
		afficheUneBoutique(name)
	  }, [name, afficheUneBoutique]);
	  
	//   const fetchData = async (id) => {
	// // const form =  {

	// // 	idBoutique: localStorage
	// // }
	// 	try {
	// 	  const response = await axios.get("http://localhost:8000/api/shops" )
	// 	//   if (response.data.length > 0) {
    //         setApropos(response.data);
    //     // } 
	// 	} catch (error) {
	// 	  console.error('Erreur lors de la récupération des donnees:', error);
	// 	}
	//   };

	return (
		<section>
			<Navbar />
			<div className="bg-gray-200">
				<div className="px-4 py-12 max-w-7xl sm:px-6 lg:px-6">
					<div className="max-w-3xl mx-auto my-12">
						<h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
							A propos de nous
						</h2>
						{/* {apropos?.map((propos) => (
							<div key={propos.id}>
								{propos.a_propos && (
								<p className="mt-4 text-lg text-gray-500">{propos.a_propos}</p>
							)}
							</div>
							))} */}
							<p className="mt-4 text-lg text-gray-500">{boutique?.a_propos}</p>

						{/* <p className="mt-4 text-lg text-gray-500">
							Fusce ultrices velit id nisi volutpat, nec malesuada velit
							lobortis. Integer auctor varius felis, eget suscipit lacus
							pharetra sed.
						</p>
						<p className="mt-4 text-lg text-gray-500">
							Suspendisse potenti. Nulla facilisi. Praesent ut urna vel ligula
							tempor eleifend nec non magna ba.
						</p> */}
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default AboutPage;
