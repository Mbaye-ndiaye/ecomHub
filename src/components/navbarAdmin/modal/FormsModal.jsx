import React, { useEffect, useState } from "react";

export default function FormsModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    image: "",
    logo: "",
    telephone: "",
    adresse: "",
    apropos: "",
    description: "",
  });

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateButtonDisabled = () => {
    if (
      formData.nom.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.image.trim() !== "" &&
      formData.logo.trim() !== "" &&
      formData.telephone.trim() !== "" &&
      formData.adresse.trim() !== "" &&
      formData.apropos.trim() !== "" &&
      formData.description.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [
    formData.nom,
    formData.email,
    formData.image,
    formData.logo,
    formData.telephone,
    formData.adresse,
    formData.apropos,
    formData.description,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center w-full h-full ">
      <form className=" w-full p-8 rounded">
        <div className="flex flex-row gap-5 mb-2">
          <div className="flex flex-col ">
            <label htmlFor="nom" className="block text-sm font-medium ">
              Nom du boutique
            </label>
            <input
              required
              type="text"
              id="nom"
              name="nom"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 mb-2">
          <div className="flex relative flex-col mb-4">
            <label htmlFor="image" className="block text-sm font-medium ">
              Image du banniere
            </label>
            <input
              required
              type="file"
              id="image"
              name="image"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="flex relative flex-col mb-2">
            <label htmlFor="logo" className="block text-sm font-medium ">
              Logo du site
            </label>
            <input
              required
              type="file"
              id="logo"
              name="logo"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.logo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 mb-2">
          <div className="flex relative flex-col mb-4">
            <label htmlFor="telephone" className="block text-sm font-medium ">
              Telephone
            </label>
            <input
              required
              type="number"
              id="telephone"
              name="telephone"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>

          <div className="flex relative flex-col mb-2">
            <label htmlFor="adresse" className="block text-sm font-medium ">
              Adresse du site
            </label>
            <input
              required
              type="text"
              id="adresse"
              name="adresse"
              className="w-[15rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.adresse}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex relative flex-col mb-2">
          <label htmlFor="apropos" className="block text-sm font-medium ">
            Apropos du site
          </label>
          <textarea
            required
            row="5"
            cols="16"
            id="apropos"
            name="apropos"
            className="w-[31rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={formData.apropos}
            onChange={handleChange}
          />
        </div>

        <div className="flex relative flex-col mb-2">
          <label htmlFor="description" className="block text-sm font-medium ">
            description du site
          </label>
          <textarea
            required
            row="5"
            cols="16"
            id="description"
            name="description"
            className="w-[31rem] p-2 mt-1  bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isButtonDisabled || isLoading}
          className={`w-full mt-8 px-4 py-2 text-white rounded-md md:w-1/2 ${
            isButtonDisabled || isLoading
              ? "bg-gray-800 opacity-85 cursor-not-allowed text-disabled text-black relative"
              : "bg-gray-900 text-active text-white hover:bg-gray-900"
          } ${isLoading ? "relative" : ""}`}
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
