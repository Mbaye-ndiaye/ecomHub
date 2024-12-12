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
           
            {td.image || td.image === 0 ? (
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
            ) : null}
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
