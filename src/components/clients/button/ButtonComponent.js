import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComponent = ({className, onClick, texte, disabled, link}) => {
  return (
    <div>
      {link ? (
        <Link to={link}>
            <button className={className} onClick={onClick} disabled={disabled}
            >{texte}

            </button>
        </Link>
      ) : (
        <button className={className} onClick={onClick} disabled={disabled}
            >
            {texte}
            </button>
      )}
    </div>
  );
}

export default ButtonComponent


