import React, { createContext, useState, useEffect } from "react";

export const PanierContext = createContext();

const PanierContextProvider = ({ children }) => {
  const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const validatedItems = storedItems.filter(
    (item) => item && typeof item.prix === "number"
  );
  const storedNotificationCount =
    JSON.parse(localStorage.getItem("notificationCount")) || 0;
  const storedCartQuantities =
    JSON.parse(localStorage.getItem("cartQuantities")) || {};

  const [cartQuantities, setCartQuantities] = useState(storedCartQuantities);
  const [items, setItems] = useState(validatedItems);
  const [notificationCount, setNotificationCount] = useState(
    storedNotificationCount
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    localStorage.setItem(
      "notificationCount",
      JSON.stringify(notificationCount)
    );
    localStorage.setItem("cartQuantities", JSON.stringify(cartQuantities));
  }, [items, notificationCount, cartQuantities]);

  const [deliveryOption, setDeliveryOption] = useState("");
  const deliveryCost = {
    1: 1000,
    2: 1500,
    3: 2000,
    4: 2500,
    5: 2000,
    6: 3000,
  };

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateQuantity = (id, newQuantity) => {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(newQuantity, 0),
    }));

    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
    );
    setItems(updatedItems);
  };

  useEffect(() => {
    const totalItemsCount = items.reduce(
      (total, item) => total + (cartQuantities[item.id] || 1),
      0
    );
    setTotalItems(totalItemsCount);
    setNotificationCount(totalItemsCount);

    const newTotalPrice = items.reduce((total, item) => {
      const itemPrice = item && typeof item.prix === "number" ? item.prix : 0;
      const quantite = cartQuantities[item.id] || 1;
      return total + itemPrice * quantite;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [items, cartQuantities]);

  const addProduitToCart = (newItem) => {
    // Convertir le prix en nombre
    const prixAsNumber = parseFloat(newItem.prix);

    if (!newItem || isNaN(prixAsNumber) || !newItem.name) {
      console.error(
        "L'article ajouté est invalide ou manque un champ requis (prix ou name).",
        newItem
      );
      return;
    }

    // Mise à jour du newItem avec le prix converti en nombre
    const newItemWithNumericPrice = { ...newItem, prix: prixAsNumber };

    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === newItemWithNumericPrice.id
      );
      if (existingItem) {
        setCartQuantities((prevQuantities) => ({
          ...prevQuantities,
          [newItemWithNumericPrice.id]:
            (prevQuantities[newItemWithNumericPrice.id] || 0) + 1,
        }));
        return prevItems.map((item) =>
          item.id === newItemWithNumericPrice.id
            ? { ...item, quantite: (item.quantite || 0) + 1 }
            : item
        );
      } else {
        setCartQuantities({
          ...cartQuantities,
          [newItemWithNumericPrice.id]: 1,
        });
        return [...prevItems, { ...newItemWithNumericPrice, quantite: 1 }];
      }
    });
    setNotificationCount((prevCount) => prevCount + 1);
  };

  const viderPanier = () => {
    setItems([]);
    setCartQuantities({});
    setNotificationCount(0);
    setDeliveryOption("");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("notificationCount");
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setNotificationCount(updatedItems.length);
  };

  const value = {
    items,
    setItems,
    deliveryOption,
    setDeliveryOption,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    deliveryCost,
    addProduitToCart,
    notificationCount,
    setNotificationCount,
    cartQuantities,
    viderPanier,
  };

  return (
    <PanierContext.Provider value={value}>{children}</PanierContext.Provider>
  );
};

export default PanierContextProvider;
