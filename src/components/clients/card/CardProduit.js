import React from 'react';
import CardList from './CardList';


const CardProduit = () => {
  const products = [
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300",
      price: 19.99
    },
    {
      name: "Product 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
      price: 24.99
    },
    {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },
      {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },
      {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },
      {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },
      {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },
      {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },
      {
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://via.placeholder.com/300",
        price: 24.99
      },

  ];

  return (
    <div className="flex flex-wrap mt">
      {products.map((product, index) => (
        <CardList key={index} product={product} />
      ))}
    </div>
  );
};

export default CardProduit;

