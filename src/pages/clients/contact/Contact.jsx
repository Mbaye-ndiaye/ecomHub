import React, {useState, useEffect, useContext} from 'react';
import {  useFormContext } from 'react-hook-form';
import Navbar from '../../../components/clients/navbar/navbar';
import Footer from './../../../components/footer/footer';
import { BsTelephone } from 'react-icons/bs';
import { VscMail } from 'react-icons/vsc';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useGlobal from '../../../utils/hooks/useGlobal';
import { FormShopContext } from '../../../utils/context/FormShopContext';
import LoadingSpinner from '../../../components/adminConnexion/LoadingSpinner';


const ContactPage = () => {
  const {name} = useParams()
    const {formData, afficheUneBoutique, boutique } = useContext(FormShopContext);
    const { closeDropdown } = useGlobal();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


// const [boutique, setBoutique] = useState([])
const [client, setClient] = useState({
  email: "",
  prenom: "",
  telephone: "",
  body: "",
  shop_id: boutique?.id
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setClient({ ...client, [name]: value });
};

 // Fonction pour mettre à jour le client avec le shop_id
 useEffect(() => {
  if (boutique) {
    setClient(prevClient => ({
      ...prevClient,
      shop_id: boutique.id 
    }));
  }
}, [boutique]);
useEffect(() => {
   afficheUneBoutique()
}, []);



const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  console.log("client:", client); 

  try {
    const response = await axios.post("http://localhost:8000/api/messages", {
      ...client,
      shop_id: boutique.id
    });
    console.log("message.data", response.data);
    
    if (response.status === 201) {
      setClient({
        prenom: "",
        telephone: "",
        email: "",
        body: "",
        shop_id: boutique?.id
      });
    } else {
      throw new Error("Erreur lors de l'ajout du produit");
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
  } finally {
    setIsLoading(false)
  }
}


const updateButtonDisabled = () => {
  if (formData.email.trim() !== "" && formData.password.trim() !== "") {
    setIsButtonDisabled(false);
  } else {
    setIsButtonDisabled(true);
  }
};

useEffect(() => {
  updateButtonDisabled();
}, [formData.email, formData.password]);

  return (
    <section className="bg-gray-100">
      <Navbar />
      <div className="w-full px-4 md:px-4 my-14">
        <h1 className="mb-4 text-3xl font-bold px-9">Contacts</h1>

        <div className="flex flex-col w-full gap-4 pt-4 md:px-9 md:flex-row md:gap-7">
            <div className="w-full py-4 border border-gray-200 rounded-md shadow-sm md:w-1/4">
              <div className="px-5 py-6">
                <h1 className="flex items-center gap-3 font-medium">
                  <div className="p-3 text-white rounded-full bg-slate-800">
                    <BsTelephone size={18} />
                  </div>
                  Appelez-nous
                </h1>
                <p className="my-5 text-sm">
                  Nous sommes disponibles 6j/7 de 9h à 19h
                </p>
                <p className="text-sm border-b-2 pb-9 border-slate-800">
                  Téléphone: {boutique?.telephone}
                </p>
                <h1 className="flex items-center gap-3 font-medium mt-7">
                  <div className="p-3 text-white rounded-full bg-slate-800">
                    <VscMail size={18} />
                  </div>
                  Ecrivez-nous
                </h1>
                <p className="my-5 text-sm">
                  Remplissez notre formulaire et nous vous contacterons sous
                  24h
                </p>
              <p>Emails: {boutique?.email}</p>
              </div>
            </div>
          <div className="w-full px-4 border shadow-sm md:px-9 md:w-3/4">
            <h1 className="pt-4 pb-2 font-medium border border-t-0 border-s-0 border-e-0 ">
              Contactez-nous
            </h1>
            <form onSubmit={handleSubmit} className="w-full py-4 mx-auto">
              <div className="mt-">
                <div className="flex flex-col justify-center w-full gap-5 mt-5 align-center md:flex-row">
                  <div className="w-full mb-0 md:mb-5 md:w-1/3">
                    <input
                      required
                      type="text"
                      id="prenom"
                      placeholder="Prénom"
                      name="prenom"
                      className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none px- focus:border focus:border-double focus:border-sky-600"
                      value={client?.prenom}
                      onChange={handleChange}
                    />
                  </div>
                 
                  <div className="w-full mb-0 mt- md:mb-5 md:w-1/3">
                    <input
                      required
                      type="tel"
                      id="tel"
                      placeholder="Téléphone"
                      name="telephone"
                      className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={client?.telephone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full mb-4 mt- md:w-1/3">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                      value={client.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
                  <textarea
                    required
                    rows={8}
                    name="body"
                    placeholder="Votre message"
                    className="w-full p-5 px-2 pt-3 mb-5 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                    value={client.body}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-end mt-2">
              <button
            type="submit"
            disabled={ isLoading}
            className={`w-full relative mt-8 px-4 py-2 text-white rounded-md bg-black flex gap-4 items-center justify-center ${
               isLoading
                ? "bg-gray-800 cursor-not-allowed text-disabled text-black"
                : "bg-gray-900 text-active text-white hover:bg-gray-900"
            }`}
          >
            {isLoading ? <LoadingSpinner /> : "Connexion"}
          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;