import React from "react";

export default function ShoppingCart() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-md md:flex">
          <div className="md:w-7/12">
            <h2 className="mb-4 text-xl">Continue shopping</h2>
            <hr className="mb-4" />
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="mb-1">Shopping cart</p>
                <p className="mb-0">You have 4 items in your cart</p>
              </div>
              <div>
                <p className="text-gray-500">
                  Sort by:
                  <a href="#!" className="ml-1 text-blue-500">
                    price
                    <i className="ml-1 fas fa-angle-down"></i>
                  </a>
                </p>
              </div>
            </div>

            {/* Shopping cart items */}
            <div className="mb-4">
              <CartItem
                imageSrc="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                itemName="Iphone 11 pro"
                itemDetails="256GB, Navy Blue"
                quantity={2}
                price={900}
              />
              {/* Add more cart items here */}
            </div>
          </div>

          <div className="mt-8 md:w-5/12 md:mt-0 md:ml-4">
            {/* Payment details */}
            <div className="p-4 text-white rounded-lg bg-primary">
              {/* Payment details component goes here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CartItem({ imageSrc, itemName, itemDetails, quantity, price }) {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt="Shopping item"
          className="w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <h3 className="text-lg">{itemName}</h3>
          <p className="text-sm text-gray-500">{itemDetails}</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{quantity}</p>
        <p className="text-lg">${price}</p>
        <a href="#!" className="ml-2 text-gray-400">
          <i className="fas fa-trash"></i>
        </a>
      </div>
    </div>
  );
}
