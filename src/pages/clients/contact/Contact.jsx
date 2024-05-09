import React, {useState, useEffect} from 'react';
import {  useFormContext } from 'react-hook-form';
import Navbar from '../../../components/clients/navbar/navbar';
import Footer from './../../../components/footer/footer';
import { BsTelephone } from 'react-icons/bs';
import { VscMail } from 'react-icons/vsc';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const ContactPage = () => {
  const {name} = useParams()
const {formData } = useFormContext();
const [telephone, setTelephone] = useState([]);
const [email, setEmail] = useState([]);

useEffect(() => {
  fetchData();
  }, []);
  
  
  useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/shops/");
        if (response.data.length > 0) {
            setTelephone(response.data[0].telephone);
            setEmail(response.data[0].email);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

// const telephone = formData.find((items) => items.telephone === telephone)
// console.log("telephone",telephone );


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
                  Téléphone: {telephone}
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
              <p>Emails: {email}</p>
              </div>
            </div>
          <div className="w-full px-4 border shadow-sm md:px-9 md:w-3/4">
            <h1 className="pt-4 pb-2 font-medium border border-t-0 border-s-0 border-e-0 ">
              Contactez-nous
            </h1>
            <form className="w-full py-4 mx-auto">
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
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-5 mt- align-center md:flex-row">
                  <textarea
                    required
                    rows={8}
                    name="message"
                    placeholder="Votre message"
                    className="w-full p-5 px-2 pt-3 mb-5 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-end mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-black rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Envoyer le message
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
