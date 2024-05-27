import React from 'react'
import PanierContextProvider from '../../../utils/context/PanierContext';
import CardList from './CardList';



const CartContext = () => {
  return (
    <PanierContextProvider>
        <CardList />
    </PanierContextProvider>
  )
}

export default CartContext
