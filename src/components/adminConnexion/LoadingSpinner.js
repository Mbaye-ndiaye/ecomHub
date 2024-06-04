import React from 'react';
import { Oval } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <div>
      <Oval
  visible={true}
  height="20"
  width="20"
  color="#FFFF"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default LoadingSpinner
