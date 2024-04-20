import React from 'react'

import trees from '../../assets/images.jfif'

export default function Inscription() {
  return (
    <div className='w-full h-screen flex  bg-gradient-to-r from-cyan-500 to-blue-500 '>
        <div className='  grid grid-cols-2 md:grid-cols-2 m-auto  h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-[130rem] h-full' src={trees} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around bg-white'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>EcomHub</h2>
                    <div className='mt-8'>
                        <input className='border p-2 mr-2' type="text" placeholder='Prenom' />
                        <input className='border p-2' type="text" placeholder='Nom' />
                    </div>
                    <div className='mt-8'>
                        <input className='border p-2 mr-2' type="text" placeholder='Adress' />
                        <input className='border p-2' type="Number" placeholder='Numero' />
                    </div>

                     <div className='mt-8'>
                        <input className='border p-2 mr-2' type="email" placeholder='Email' />
                        <input className='border p-2' type="password" placeholder='Password' />
                    </div>

                    <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Enregistre</button>
                    <p className='text-center'>Forgot Username or Password?</p>
                </form>
                <p className='text-center'>Sign Up</p>
            </div>
        </div>
    </div>
  )
}
