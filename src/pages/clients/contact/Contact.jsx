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
const [boutique, setBoutique] = useState([])
// const [telephone, setTelephone] = useState([]);
// const [email, setEmail] = useState([]);

useEffect(() => {
  fetchData();
  }, []);
  

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/shops");
        setBoutique(response.data);
        // if (response.data.length > 0) {
            // setTelephone(response.data);
            // setEmail(response.data);
        // }
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
              <div className='p-5'>
              <div className='flex flex-col gap-12'>
              <h1>Let's get in touch</h1>
              <p>We're open for any suggestion or just to have a chat</p>
              </div>
              <div>
              <div className='flex gap-4'>
              
              <p className='flex gap-2'>
              <b>Address:</b>
              198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              </div>
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
