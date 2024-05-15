import React from 'react'
import { Bars } from 'react-loader-spinner'

const SpinnerLoader = () => {
    
  return (
    <>
    <div className='grid justify-center items-center h-[500px]'>
        <div className='mx-auto'>
        <p>Chargement</p>
        </div>
    <Bars
  height="80"
  width="80"
  color="#3333"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>
</>
  )
}

export default SpinnerLoader
