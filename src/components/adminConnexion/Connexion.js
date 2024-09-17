import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import loginImg from "../../assets/imagesback.jfif";
export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    navigate("/inscription");
  };
  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );

      const token = response.data.access_token;

      localStorage.setItem("tokenClient", token);
      localStorage.setItem("userId", response.data.user.id);

      console.log(response.data);
      console.log("token:", token);

      console.log("UserID:", response.data.user.id);

      // afficher le message succes
      await Swal.fire({
        icon: "success",
        title: "Connexion réussie!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/creeShop");
    } catch (error) {
      console.error(error);
      alert("Connexion échouée");
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute object-cover w-full h-full mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex items-center justify-center h-full ">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8 rounded"
          onSubmit={handleSubmit}
        >
          <h2 className="py-4 text-4xl font-bold text-center">Marhaba Store</h2>

          <div className="relative flex flex-col mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="relative flex flex-col ">
            <label htmlFor="password" className="block text-sm font-medium ">
              Mot de pass
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full p-2 mt-1 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* <Link to={"/Admin"}> */}
          <button
            type="submit"
            disabled={isButtonDisabled || isLoading}
            className={`w-full relative mt-8 px-4 py-2 text-white rounded-md bg-black flex gap-4 items-center justify-center  ${
              isButtonDisabled || isLoading
                ? "bg-gray-800  cursor-not-allowed text-disabled text-black relative"
                : "bg-gray-900 text-active text-white hover:bg-gray-900"
            } ${isLoading ? "relative" : ""}`}
          >
            Sign In
          </button>
          {/* </Link> */}
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>

          <p className="mt-8 text-center">
            Not a member?{" "}
            <span
              className="relative cursor-pointer"
              onClick={handleSignUpClick}
            >
              Sign up now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
