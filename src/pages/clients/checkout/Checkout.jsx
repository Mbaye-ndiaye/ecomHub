import React, { useContext, useState } from "react";
import { PanierContext } from "../../../utils/context/PanierContext";
import { useNavigate } from "react-router-dom";
import useGlobal from "../../../utils/hooks/useGlobal";
import axios from "axios";
import ButtonComponent from "../../../components/clients/button/ButtonComponent";

function CheckoutPage() {
  const navigate = useNavigate();
  const { client } = useGlobal();
  const {
    deliveryOption,
    setDeliveryOption,
    totalItems,
    totalPrice,
    cartQuantities,
    items,
    deliveryCost,
    viderPanier,
  } = useContext(PanierContext);

  const [formData, setFormData] = useState({
    prenom: client?.prenom || "",
    name: client?.name || "",
    email: client?.email || "",
    telephone: client?.telephone || "",
    ville: client?.ville || "",
    adresse: client?.adresse || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderItems = items.map((item) => ({
      id: item.id,
      quantity: cartQuantities[item.id],
      prix: item.prix,
      Total: item.prix * cartQuantities[item.id],
      name: item.name,
    }));

    const prixLivraison = deliveryCost[deliveryOption].toString();
    const prixTotal = totalPrice + deliveryCost[deliveryOption].toString();
    const prixProduit = totalPrice;
    const produitsJsonString = JSON.stringify(orderItems);
    // const imageUrl = items.map(item => item.image);
    const orderData = {
      ...formData,
      // image: imageUrl,
      //  product_id: JSON.stringify(orderItems.map((item) => item.id)),
      //  produits: JSON.stringify(orderItems.map((item) => item.name)),
      product_id: orderItems.map((item) => item.id),
      produits: produitsJsonString,
      //  produits: JSON.stringify(orderItems.map((item) => item.prix)), // En JSON string
      quantite: orderItems.reduce((sum, item) => sum + item.quantity, 0), // Somme des quantités
      statut: "en attente",
      prixProduit: prixProduit, // Prix produits
      prixLivraison: prixLivraison, // Prix livraison en chaîne de caractères
      prixTotal: prixTotal,
    };

    console.log("orderData", orderData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/commandes",
        orderData
      );
      // const response = await axios.post(urlApiAdmin, orderData);
      console.log("response.commande", response);

      if (response.status === 201) {
        console.log("Commande ajoutée avec succès:", response.data);
        // toast.success('Commande approuvée avec succès!');
      } else {
        console.error("Erreur lors de l'ajout de commandes:", response.data);
        // toast.error("Erreur lors de l'ajout de commandes");
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi de la commande:",
        error.response?.data || error.message
      );
      // toast.error("Erreur lors de l'envoi de la commande");
    }
    viderPanier();
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit}>
        <section className="container grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-08">
          <div className="rounded-lg shadow-lg lg:col-span-2">
            <div className="card">
              <div className="p-8 card-body grid grid-cols-1">
                <h2 className="mb-4 text-xl font-bold">Billing Info</h2>
                <div className="flex flex-wrap justify-center mb-4">
                  <div className="w-full mb-6 lg:w-1/2 lg:pl-4 lg:mb-6">
                    <label
                      htmlFor="billing-name"
                      className="block text-xl font-bold font-medium text-gray-700"
                    >
                      Prenom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      className="block w-full p-2 mt-1 border border-black rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Entrer votre nom"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-6 lg:w-1/2 lg:pl-4 lg:mb-6">
                    <label
                      htmlFor="billing-name"
                      className="block text-xl font-bold font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="billing-name"
                      name="name"
                      className="block w-full p-2 mt-1 border border-black rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Entrer votre nom"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:w-1/2 lg:pl-4 lg:mb-6">
                    <label
                      htmlFor="billing-email-address"
                      className="block text-xl font-bold font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="billing-email-address"
                      name="email"
                      className="block w-full p-2 mt-1 border border-black rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Entrer votre email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:w-1/2 lg:pl-4 lg:mb-6">
                    <label
                      htmlFor="billing-phone"
                      className="block text-xl font-bold font-medium text-gray-700"
                    >
                      Téléphone
                    </label>
                    <input
                      type="number"
                      id="billing-phone"
                      name="telephone"
                      className="block w-full p-2 mt-1 border border-black rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Entrer votre téléphone"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:w-1/2 lg:pl-4 lg:mb-6">
                    <label
                      htmlFor="billing-city"
                      className="block text-xl font-bold font-medium text-gray-700"
                    >
                      Ville
                    </label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      className="block w-full p-2 border border-black mt-1 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Entrer votre ville"
                      value={formData.ville}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 lg:w-1/2 lg:pl-4 lg:mb-6">
                    <label
                      htmlFor="billing-address"
                      className="block text-xl font-bold font-bold font-medium text-gray-700"
                    >
                      Adresse
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      className="block w-full p-2 border border-black mt-1 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      placeholder="Entrer votre adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg lg:col-span-1">
            <div className="p-6 bg-white shadow-lg card">
              <div className="card-body">
                <h2 className="p-3 mb-4 text-xl font-bold bg-gray-200">
                  Order Summary
                </h2>
                <table className="w-full p-4 mx-6 table-auto">
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <h5 className="m-0 font-size-14 text-lg font-bold">
                          Total articles :
                        </h5>
                      </td>
                      <td className="text-lg">{totalPrice}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <h5 className="m-0 font-size-14 text-lg font-bold">
                          Prix livraison :
                        </h5>
                      </td>
                      <td className="text-lg">
                        {deliveryCost[deliveryOption]}
                      </td>
                    </tr>
                    <tr className="bg-light">
                      <td colSpan="2">
                        <h5 className="m-0 font-size-14 text-lg font-bold">
                          Total :
                        </h5>
                      </td>
                      <td className="text-lg">
                        {totalPrice + deliveryCost[deliveryOption]}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-2 my-4 mb-4 text-xl font-bold bg-gray-200">
                  <p className="flex justify-between text-lg font-bold">
                    Total:
                    <span className="text-red-500 text-lg">
                      {totalPrice + deliveryCost[deliveryOption]}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <ButtonComponent
              type="submit"
              disabled={items.length === 0}
              className={`flex justify-center px-3 py-2 mx-auto my-5 text-sm tracking-widest text-white rounded mt-10 ${
                items.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-slate-800 hover:bg-slate-900"
              }`}
              texte="Valider la commande"
            />
          </div>
        </section>
      </form>
    </main>
  );
}

export default CheckoutPage;
