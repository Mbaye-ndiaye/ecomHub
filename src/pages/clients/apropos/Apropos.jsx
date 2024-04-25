import React from 'react';
import Navbar from './../../../components/clients/navbar/Navbar';
import Footer from './../../../components/footer/footer';



const AboutPage = () => {
  
  return (
    <section>
    <Navbar/>
    <div className="container py-16 mx-auto">
      <h1 className="text-3xl font-bold text-center">A propos de nous</h1>

      <div className="flex flex-col mt-8 md:flex-row">
        <div className="px-4 md:w-1/2">
          <p className="text-gray-600">
            Bienvenue sur notre site e-commerce ! Nous sommes ravis de vous
            proposer une large sélection de produits de haute qualité,
            soigneusement sélectionnés pour répondre à vos besoins et à vos
            envies. Notre mission est de vous offrir une expérience d'achat
            agréable et fluide, en vous proposant des produits de qualité à des
            prix compétitifs, ainsi qu'un service client irréprochable.
          </p>

          <h2 className="mt-4 text-2xl font-bold">Nos valeurs</h2>
          <ul className="mt-4 list-disc">
            <li className="text-gray-600">Qualité: Nous sélectionnons
              rigoureusement nos produits auprès de fournisseurs de confiance
              afin de vous garantir une qualité irréprochable.</li>
            <li className="text-gray-600">Prix compétitifs: Nous proposons des
              prix justes et transparents pour que vous puissiez faire vos
              achats en toute sérénité.</li>
            <li className="text-gray-600">Service client: Nous sommes
              soucieux de vous offrir un service client irréprochable et
              sommes toujours disponibles pour répondre à vos questions et à
              vos demandes.</li>
            <li className="text-gray-600">Engagement durable: Nous nous
              engageons à respecter l'environnement et à proposer des
              produits durables et écoresponsables.</li>
          </ul>
        </div>

        <div className="px-4 mt-8 md:w-1/2 md:mt-0">
          <h2 className="text-2xl font-bold">Notre équipe</h2>
          <p className="text-gray-600">
            Notre équipe est composée de passionnés de produits et de
            e-commerce qui sont à votre service pour vous accompagner dans
            votre expérience d'achat. Nous sommes toujours à l'écoute de vos
            suggestions et de vos besoins afin de vous proposer la meilleure
            expérience possible.
          </p>

          <h2 className="mt-4 text-2xl font-bold">Nous contacter</h2>
          <p className="text-gray-600">
            Si vous avez des questions, des suggestions ou des demandes,
            n'hésitez pas à nous contacter. Vous pouvez nous joindre par email
            à [adresse email] ou par téléphone au [numéro de téléphone].
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </section>
    
  );
};

export default AboutPage;
