import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TbEyeShare } from 'react-icons/tb'
import { MdOutlineDelete } from 'react-icons/md'
import axios from 'axios'
import useSidebare from '../../utils/hooks/useSidebare'
import Table from '../table/Table'
import HeaderTable from '../headerTable/HeaderTable'

const Messages = () => {
    const navigate = useNavigate()
    const {open, closedrop} = useSidebare()
    const [message, setMessage] = useState([])

    const table = [
        'Prenom', 'Email', 'Téléphone', 'Actions'
      ]

      const actions = [
        {
          // Voire Détails
          icon: <TbEyeShare/>,
          color: 'bg-green-500',
          handleClick: (id) => {
            navigate(id);
            console.log(id);
          }
        },
        {
          // Suppression
          icon: <MdOutlineDelete />,
          color: 'bg-red-600',
          handleClick: (id) => {
            deleteMessage(id)
          }
        }
      ]

      // Suppression Produit
      const deleteMessage = async (id) => {
        try {
          await axios.delete(`/messages/${id}`);

          const updatedMessgage = message.filter(
            (mes) => mes.id !== id
          );
          setMessage(updatedMessgage);
        } catch (error) {
          navigate("/error")
          console.error("Erreur lors de la suppression du Message:", error);
        }
      };


      useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/messages");
                console.log("message.data", response.data);
                const modifiedData = response.data.map(obj => {
                    return {
                      id: obj.id,
                      prenom: obj.prenom,
                      email: obj.email,
                      telephone: obj.telephone,
                    };
                  });
                  setMessage(modifiedData);
                  // console.log("nomMes", nomMes);
                
            } catch (error) {
                console.error("Erreur lors de la récupération des clients:", error);
            }
        };
        fetchClients();
    }, [message]);

  

  return (
    <div onClick={closedrop} className={`${open ? "md:ml-[225px]" : "md:ml-[85px]"} m-4 `}>
      <div className='my-7 mb-9'>
        <HeaderTable />
      </div>
      <Table thead={table} tbody={message} actions={actions} /> 
    </div>
  )
}

export default Messages



