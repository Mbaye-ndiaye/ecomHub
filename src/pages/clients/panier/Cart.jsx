import React, { useContext, usePanier } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/footer";
import { FaTrash } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Navbar from "../../../components/clients/navbar/navbar";
import { PanierContext } from "../../../utils/context/PanierContext";

export default function Cart() {
  const {
    items,
    totalItems,
    removeItem,
    deliveryCost,
    deliveryOption,
    setDeliveryOption,
    quantity,
    cartQuantities,
    updateQuantity,
    totalPrice,
  } = useContext(PanierContext);

  return (
    <section>
      <Navbar />
      <main className="flex justify-center bg-gray-200">
        <div className="container py-5 mx-auto my-20">
          <div className="flex flex-col justify-center w-full gap-8 lg:flex-row">
            <div className="w-full bg-white rounded-lg shadow-md lg:w-1/2">
              <div className="flex justify-between p-5">
                <h5 className="text-xl font-bold">Votre Panier</h5>
                <h5 className="">{totalItems} Produits</h5>
              </div>
              <hr />

              <div className="overflow-x-auto">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="flex justify-between p-3">
                      <div className="flex gap-8">
                        <div className="pl-2 mb-4 md:mb-0">
                          <img
                            src={item.image}
                            className="w-20 h-20"
                            alt={item.title}
                          />
                        </div>
                        <div className="md:mb-0">
                          <p className="mb-1 font-semibold">{item.title}</p>
                          <p>{item.category}</p>
                          <div className="">
                            <button
                              className="flex gap-1 mr-2 text-red-500 hover:text-red-700"
                              onClick={() => removeItem(item.id)}
                            >
                              Supprimer
                              <span className="mt-1">
                                <FaTrash />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex">
                          <button
                            className="px-3 mr-2 text-white bg-blue-600 border rounded-md h-9"
                            onClick={() => {
                              const newQuantity = Math.max(
                                cartQuantities[item.id] - 1,
                                1
                              );
                              updateQuantity(item.id, newQuantity);
                            }}
                          >
                            <FaMinus />
                          </button>
                          <input
                            className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                            type="number"
                            value={cartQuantities[item.id] || 1}
                            min={1}
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value);
                              updateQuantity(item.id, newQuantity);
                            }}
                          />
                          <button
                            className="px-3 ml-2 text-white bg-blue-600 border rounded-md h-9"
                            onClick={() => {
                              const newQuantity = cartQuantities[item.id] + 1;
                              updateQuantity(item.id, newQuantity);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <p className="mt-2 text-lg font-semibold text-center">
                          {item.prix} FCFA
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    Votre panier est vide!
                  </div>
                )}
              </div>

              <hr />
              <Link to="/Accueil">
                <p className="flex gap-1 px-5 py-6 font-semibold text-black">
                  <FaArrowLeftLong className="mt-1" />
                  <span>Retour à la boutique</span>
                </p>
              </Link>
            </div>
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6">
                  <h5 className="text-lg font-bold">Commande</h5>
                  <hr className="w-full mt-4 bg-black" />
                  <ul className="py-3 list-disc">
                    <li className="flex items-center justify-between my-4">
                      <span>Totals articles</span>
                      <span>{totalPrice} FCFA</span>
                    </li>
                    <div className="pb-2 mb-4">
                      <select
                        className="w-full p-2 bg-white rounded"
                        value={deliveryOption}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        required
                      >
                        <option value="" disabled hidden>
                          Choisir votre livraison
                        </option>

                        <option value="1">Livraison-Dakar-1000 FCFA</option>
                        <option value="2">Dakar-Banlieu-1500 FCFA</option>
                        <option value="3">Dakar-Rufisque-2000 FCFA</option>
                        <option value="4">Dakar-Thies-2500 FCFA</option>
                        <option value="5">Dakar-Regions-4000 FCFA</option>
                      </select>
                    </div>
                    {deliveryCost[deliveryOption] > 0 && (
                      <li className="flex items-center justify-between">
                        <strong>Total </strong>
                        <span className="text-lg font-bold text-red-500">
                          {totalPrice + deliveryCost[deliveryOption]}
                          {/* {totalPrice} FCFA */}
                        </span>
                      </li>
                    )}
                  </ul>
                  <hr />
                  <Link to="/checkout">
                    <button className="block w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md">
                      Go to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
