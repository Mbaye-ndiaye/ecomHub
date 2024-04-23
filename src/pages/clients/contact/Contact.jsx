import React from 'react';
import { useForm } from 'react-hook-form';
import { GoogleMap, LoadScript } from '@react-google-maps/js';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container py-16 mx-auto">
      <h1 className="text-3xl font-bold text-center">Contactez-nous</h1>

      <div className="flex flex-col mt-8 md:flex-row">
        <div className="px-4 md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Nom</label>
              <input
                {...register('name', { required: true })}
                type="text"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md form-input"
              />
              {errors.name && <span className="text-red-500">Nom requis</span>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Adresse e-mail</label>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/i })}
                type="email"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md form-input"
              />
              {errors.email && <span className="text-red-500">Adresse e-mail invalide</span>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Sujet</label>
              <input
                {...register('subject', { required: true })}
                type="text"
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md form-input"
              />
              {errors.subject && <span className="text-red-500">Sujet requis</span>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700">Message</label>
              <textarea
                {...register('message', { required: true })}
                className="w-full h-24 px-4 py-2 bg-gray-200 border border-gray-300 rounded-md form-textarea"
              />
              {errors.message && <span className="text-red-500">Message requis</span>}
            </div>

            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Envoyer
            </button>
          </form>
        </div>

        <div className="px-4 mt-8 md:w-1/2 md:mt-0">
          <h2 className="text-2xl font-bold">Informations de contact</h2>
          <p className="text-gray-600">
            Adresse e-mail: [adresse e-mail] <br />
            Numéro de téléphone: [numéro de téléphone] <br />
            Adresse: [adresse physique]
          </p>

          <h2 className="mt-4 text-2xl font-bold">Carte</h2>
          {
            <LoadScript
              googleMapsApiKey="[API_KEY_GOOGLE_MAPS]"
              libraries={['places']}
            >
              <GoogleMap
                containerClassName="w-full h-400"
                zoom={15}
                center={{ lat: 48.8566, lng: 2.3522 }}
                mapOptions={{
                  disableDefaultUI: true,
                }}
              />
            </LoadScript>}
        </div>
    </div>
    </div>
  );
};

export default ContactPage
    
