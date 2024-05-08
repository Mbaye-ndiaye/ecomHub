import React from 'react'
import CategorieContextProvider from '../../utils/context/CategorieContext'
import Categories from '../../pages/admin/Categories'
import ProduitContextProvider from '../../utils/context/ProduitsContext'

export default function CategoriesAdmin() {
  return (
    <CategorieContextProvider>
      <ProduitContextProvider>
        <Categories />
      </ProduitContextProvider>
    </CategorieContextProvider>
  )
}
