import { useContext } from 'react'
import { ProduitsContext } from '../context/ProduitsContext';

const useProduit = () => {
    const useProduit = useContext(ProduitsContext)
    return useProduit
}

export default useProduit;