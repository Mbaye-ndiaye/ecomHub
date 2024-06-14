// import { format } from 'date-fns'
// // import { Link } from 'react-router-dom'
// import { getOrderStatus } from '../../lib/helpers'
// // import { getOrderStatus } from '../lib/helpers'

// const recentOrderData = [
// 	{
// 		id: '1',
// 		product_id: '4324',
// 		customer_id: '23143',
// 		customer_name: 'Shirley A. Lape',
// 		order_date: '2022-05-17T03:24:00',
// 		order_total: '$435.50',
// 		current_order_status: 'EN LIVRAISON',
// 		shipment_address: 'Cottage Grove, OR 97424'
// 	},
// 	{
// 		id: '7',
// 		product_id: '7453',
// 		customer_id: '96453',
// 		customer_name: 'Ryan Carroll',
// 		order_date: '2022-05-14T05:24:00',
// 		order_total: '$96.35',
// 		current_order_status: 'CONFIRME',
// 		shipment_address: 'Los Angeles, CA 90017'
// 	},
// 	{
// 		id: '2',
// 		product_id: '5434',
// 		customer_id: '65345',
// 		customer_name: 'Mason Nash',
// 		order_date: '2022-05-17T07:14:00',
// 		order_total: '$836.44',
// 		current_order_status: 'LIVREE',
// 		shipment_address: 'Westminster, CA 92683'
// 	},
// 	{
// 		id: '3',
// 		product_id: '9854',
// 		customer_id: '87832',
// 		customer_name: 'Luke Parkin',
// 		order_date: '2022-05-16T12:40:00',
// 		order_total: '$334.50',
// 		current_order_status: 'EN LIVRAISON',
// 		shipment_address: 'San Mateo, CA 94403'
// 	},
// 	{
// 		id: '4',
// 		product_id: '8763',
// 		customer_id: '09832',
// 		customer_name: 'Anthony Fry',
// 		order_date: '2022-05-14T03:24:00',
// 		order_total: '$876.00',
// 		current_order_status: 'CONFIRME',
// 		shipment_address: 'San Mateo, CA 94403'
// 	},
// 	{
// 		id: '5',
// 		product_id: '5627',
// 		customer_id: '97632',
// 		customer_name: 'Ryan Carroll',
// 		order_date: '2022-05-14T05:24:00',
// 		order_total: '$96.35',
// 		current_order_status: 'CONFIRME',
// 		shipment_address: 'Los Angeles, CA 90017'
// 	}
// ]

// export default function Table({title}) {

// 	return (
// 		<div className="bg-white flex-1 rounded-[20px] p-[2rem] flex gap-[1.5rem] justify-between mb-5">
//         <div className="bg-white px-4 pt-3 pb-3 rounded-sm border border-gray-200 flex-1">
// 			<strong className="text-gray-700 font-medium">{title}</strong>
// 			<div className=" mt-3">
// 				<table className="table-auto w-full text-gray-700">
// 					<thead>
// 						<tr className="font-semibold bg-gray-700 h-[50px] text-white rounded-[50px]">
// 							<th>Nom</th>
// 							<th>Quatité</th>
// 							<th>prix</th>
// 							<th>Categorie</th>
// 							<th>Order Status</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{recentOrderData.map((order) => (
// 							<tr className="w-full text-center mt-[50px]" key={order.id}>
// 								<td>
// 									{order.customer_name}
// 								</td>
// 								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
// 								<td>{order.order_total}</td>
// 								<td>{order.shipment_address}</td>
// 								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
//                                 <td>{getOrderStatus(order.current_order_status)}</td>
// 							</tr>
// 						))}
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 		</div>
// 	)
// }

// import Loader from "../loader/loader"
// import '@fontsource/montserrat';

import React from "react";
// const products = [
//     { name: "T-shirt", description: "T-shirt en coton blanc", price: "15,99€", quantity: 50 },

//     { name: "Smartphone", description: "Smartphone Android", price: "299,99€", quantity: 20 },
//     { name: "Sac à dos", description: "Sac à dos imperméable", price: "39,99€", quantity: 30 },
//     { name: "Stylo", description: "Stylo à encre bleue", price: "1,50€", quantity: 100 }
//   ];
export const Thead = ({ thead }) => {
  return (
    <thead>
      <tr className="font-semibold tracking-wide text-center text-white uppercase bg-gray-700 border border-x-0 border-top border-gray-300 text-sm">
        {thead.map((th, index) => (
          <th key={index} className="px-4 py-3">
            {th}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const Tbody = ({ tbody, actions }) => {
  return (
    <tbody className="bg-white">
      {(tbody ?? []).length !== 0 &&
        tbody.map((td, index) => (
          <tr
            className="text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100"
            key={index}
          >
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="md:relative w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={td.image}
                    alt=""
                    loading="lazy"
                  />
                  <div
                    className="md:absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </td>
            {td.name || td.name === 0 ? (
              <td className="px-4 py-5 text-xl text-center border">
                {td.name}
              </td>
            ) : null}
            
            {td.email || td.email === 0 ? (
              <td className="px-4 py-5 text-xl text-center border">
                {td.email}
              </td>
            ) : null}
            {td.description && (
              <td className="px-4 py-5 text-xl text-center border">
                {td.description}
              </td>
            )}
            {td.quantite && (
              <td className="px-4 py-3 text-center border text-md">
                <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                  {td.quantite}
                </span>
              </td>
            )}
            
            {td.telephone && (
              <td className="px-4 py-3 text-center border text-md">
                <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                  {td.telephone}
                </span>
              </td>
            )}
            {td.statut && (
             <td className="px-4 py-5 text-xl text-center border">
               {td.statut}
             </td>
           )}
            {td.nombreDeProduit && (
              <td className="px-4 py-3 text-center border text-md">
                <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                  {td.quantite}
                </span>
              </td>
            )}
            {td.prix && (
              <td className="px-4 py-5 text-xl text-center border">
                {td.prix.toLocaleString("de-DE")}
              </td>
            )}
            {actions && (
              <td className="px-4 py-3 text-ms font-semibold border text-center">
                {actions.map((action, index) => (
                  <button
                    key={index}
                              className={`${action.color} p-1 text-white focus:ring-4 shadow rounded ml-2`}
                    onClick={() => action.handleClick(td._id)}
                  >
                    {action.icon}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
    </tbody>
  );
};

const Table = ({ thead, tbody, actions }) => {
  return (
    <section className="font-montserrat">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <Thead thead={thead} />
            <Tbody tbody={tbody} actions={actions} />
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
