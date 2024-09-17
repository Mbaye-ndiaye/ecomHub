import React,  {useState, useEffect} from "react";
import image1 from "../../../assets/exclusive_image.png"
import { Link, useNavigate } from "react-router-dom";
import useFormContext from "../../../utils/hooks/useFormContext";
import axios from "axios";
import LoaderCard from "../../../pages/clients/loaderCard/LoaderCard";




const BoutiqueUser = () => {
    const {formData} = useFormContext();
    const [boutiques, setBoutique] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBoutique = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/shops");
        setBoutique(response.data);
        setLoading(false)
        console.log("response.data", response.data);
        
      } catch (error) {
        console.error("Erreur lors de la recuperer des donnees", error);
        setLoading(false)
        
      }
    }

    fetchBoutique()
  }, [])


  if (loading) {
    return <LoaderCard />;

  }


  const uniqueBoutiqueIds = boutiques.map((boutique) => boutique.id);

  const nmbreBoutique = uniqueBoutiqueIds.length;
  console.log("nmbreBoutique", nmbreBoutique);

    return (
        <div className="bg-[#494C4F] p-5 h-screen">
            <h1 className="text-white font-bold text-2xl text-center mb-5">Le nombre de boutique existe:  {nmbreBoutique}</h1>
            <div className="grid grid-cols-4 gap-7">
            {[...uniqueBoutiqueIds].map((boutiqueId) => {
            
        // Filtrer les données de la boutique correspondant à l'identifiant unique
        const uniqueBoutiqueData = boutiques.find((boutique) => boutique.id === boutiqueId);
        // console.log("uniqueBoutiqueData", uniqueBoutiqueData);
        return (
            <div key={uniqueBoutiqueData.id}>
            <Link to={`/accueil/${uniqueBoutiqueData.id}`}>
            
          <div className=" flex items-center shadow-lg p-5 mx-1 my-2 bg-white rounded-lg ">
            <div className="flex gap-3 mx-4">
              <img
                src={uniqueBoutiqueData.logo}
                className="w-[30px] h-[30px] rounded-full"
                alt="/"
                />
            </div>
            <div className="">
              <h1 className="text-lg text-black font-bold">{uniqueBoutiqueData.name}</h1>
            <p className="text-center text-sm">{uniqueBoutiqueData.email}</p>
          </div>
          </div>
          </Link>
                </div>
        );
      })}
      </div>
        </div>
    )
}

export default BoutiqueUser;