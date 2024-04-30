import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const useGlobal = () => {
    const useGlobal = useContext(GlobalContext)
    return useGlobal
}

export default useGlobal;
