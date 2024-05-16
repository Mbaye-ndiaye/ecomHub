import React from 'react'
import { Bars } from 'react-loader-spinner'

const SpinnerLoader = () => {
    
  return (
    <>
    <div className='grid justify-center items-center h-[500px]'>
        
    <Bars
  height="80"
  width="80"
  color="#333"
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
