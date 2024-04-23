import React from "react";
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';


export default function ShoppingCart() {
  const cartItems = [
    { nom: "iPad Air", quantity: 1, categorie: "telephone", price: 799, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp" },
    { nom: "iPhone 12", quantity: 1, categorie: "telephone", price: 999, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/2.webp" },
    { nom: "Samsung Galaxy S21", categorie: "telephone", quantity: 1, price: 899, image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-peach bg-slate-200">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <p className="text-lg">{`(${cartItems.length} items in your cart)`}</p>
        </div>

        <div className="mb-8 bg-white">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-center">
                <th className="px-4 py-2">Produit</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cartItems.map((item, index) => (
                <tr key={index}>
                <td className="flex items-center justify-center mb-5 text-sm">
                <img
                    src={item.image}
                    alt={item.nom}
                    className="w-16 justify-left"
                />
                <div className="flex flex-col items-center content-between justify-center gap-1 ml-3 text-sm">
                    <h5>{item.nom}</h5>
                    <h5 className="text-blue-300">{item.categorie}</h5>
                    <h4
                        className="flex items-center text-red-500 cursor-pointer"
                    >
                        <span className="">Supprimer</span>
                        <MdDelete className="mt-1 text-sm font-bold text-red-500" />
                    </h4>
                </div>
            </td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{`$${item.price}`}</td>
                  <td className="px-4 py-2">{`$${item.quantity * item.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-5">
          <div className="float-right">
            <p className="mb-0 text-right text-gray-500">
              Order total:{" "}
              <span className="font-semibold">
                {`$${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}`}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-4 py-2 mr-2 text-gray-700 bg-white rounded-md">Continue shopping</button>
          <Link to="/Checkout" className="px-4 py-2 text-white bg-blue-600 rounded-md">Proceed to checkout</Link>
        </div>
      </div>
    </section>
  );
}
