import { useContext } from 'react'
import { CommandeContext } from '../context/CommandeContext';

const useCommandes = () => {
    const useCommandes = useContext(CommandeContext)
    return useCommandes
}

export default useCommandes;
