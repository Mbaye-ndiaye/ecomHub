import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComponent = ({className, onClick, text, disabled, link}) => {
  return (
    <div>
      {link ? (
        <Link to={link}>
            <button className={className} onClick={onClick} disabled={disabled}
            text={text}>

            </button>
        </Link>
      ) : (
        <button className={className} onClick={onClick} disabled={disabled}
            text={text}>

            </button>
      )}
    </div>
  );
}

export default ButtonComponent
