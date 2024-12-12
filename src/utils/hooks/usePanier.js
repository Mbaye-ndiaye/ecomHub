import React, {useContext} from 'react'
import { PanierContext } from '../context/PanierContext'


const usePanier = () => {
    const Panier = useContext(PanierContext);
    return Panier;
}

export default usePanier
