import { useContext } from 'react';
import { FormShopContext } from '../context/FormShopContext';

const useFormContext = () => {
  const formContext = useContext(FormShopContext);
  return formContext;
};

export default useFormContext;

