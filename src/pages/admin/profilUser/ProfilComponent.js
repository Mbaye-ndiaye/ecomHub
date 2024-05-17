import React, { useState, useEffect } from 'react'
import useSidebare from "../../../utils/hooks/useSidebare";
import LoaderCard from "../../../pages/clients/loaderCard/LoaderCard"
import FormProfilUser from "../../../pages/admin/profilUser/FormProfilUser"

const ProfilComponent = () => {
  const { user, updateUserProfile, profile, setUser } = useSidebare();
  const [editedUser, setEditedUser] = useState({ ...user, profileImage: null });

  useEffect(() => {
    profile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(user);
    alert("profile modifie");
  };

  const handleChange = (e) => {
    if (e.target.name === "imgProfile") {
      const selectedImage = e.target.files[0];
      setEditedUser({ ...user, profileImage: selectedImage });
    } else {
      const { name, value } = e.target;
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };


  return (
    <div className=" p-6 bg-white rounded-md shadow-md  mt-">
    {user ? <FormProfilUser
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      editedUser={editedUser}
      user={user}
    /> : <LoaderCard />}
  </div>
  )
}

export default ProfilComponent
