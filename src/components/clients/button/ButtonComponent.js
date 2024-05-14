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


{/* <div className="flex items-center justify-between mx-auto max-w-7xl">
            {logo && (
              <div key={logo.id} className="flex items-center">
                <img 
                  className="mx-4 text-xl font-semibold text-white"
                  src={logo.logo} 
                  alt={logo.name} />
              </div>
            )}
          </div> */}