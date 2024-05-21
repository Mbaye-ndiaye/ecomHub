import React, { useEffect } from 'react'

const Input = ({label, type, value, name, onChange}) => {
  let classInput;
  let isRequired = type !== "file"; // Si le type n'est pas "file", alors l'input est requis

  if (type === "radio") {
    classInput = "bg-gray-200";
  } else {
    classInput = "mt-1 p-2 bg-gray-200 border focus:border text-gray-700 text-gray-400 focus:border-double focus:border-sky-600 outline-none rounded-md w-full";
  }

  return (
    <div className="w-full px-3 my-6 md:w-1/2 md:mb-0">
      <label className="block text-sm font-semibold text-gray-900">
        { label }
      </label>
      <input className={classInput} name={name} value={value} type={type} onChange={onChange} required={isRequired ? "required" : undefined} />
    </div>
  );
}

const Select = ({label, options, handleSelectChange }) => {
  return(
    <div className="w-full px-3 my-6 md:w-1/2 md:mb-0">
      <label className="block text-sm font-semibold text-gray-900">{label}</label>
      <select onChange={handleSelectChange} defaultValue=""  className="w-full p-2 mt-1 text-gray-700 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600">
        <option value="" disabled>Sélectionnez une catégorie</option>
        {options.map((option)=>(
          <option key={option._id} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

const Formulaire = ({inputs, selects, textarea, onSubmit, handleSelectChange }) => {

  const handleChangeFile = (e, setter) => {
      setter(e.target.files[0]);
  }
  const handleChange = (e, setter) => {
    if (setter) {
      setter(e.target.value);
    }
  }

  // useEffect(() => {
  //     handleSelectChange({ target: { value: '' } })    
  // }, [handleSelectChange]);
  

  return (
    <form className="w-full max-w-lg mx-3 "  onSubmit={onSubmit}>
      <div className="flex flex-wrap mb-6">
        {
          inputs.map((input, index)=>(
            input.type === "file" ?
            (<Input
              key={index}
              name={input.name} 
              type={input.type}
              label={input.label} 
              // value={input.value}
              onChange={(e) => handleChangeFile(e, input.setValue)} 
            /> ) : (
              <Input
              key={index}
              name={input.name} 
              type={input.type}
              label={input.label} 
              value={input.value} 
              onChange={(e) => handleChange(e, input.setValue)} 
            /> )
          ))
        } 
        {selects? 
        <>
        {selects.map((select, index)=>(
          <Select 
          key={index}
            label={select.label} 
            options={select.options} 
            handleSelectChange={handleSelectChange}  
          />
          ))}
        </>
        : null

        }

        {textarea ?
          <div className="w-full px-3 my-6 md:w-2/2 md:mb-0">
            <label className='block text-sm font-semibold text-gray-900'>Description</label>
            <textarea className="w-full p-2 mt-1 text-gray-700 bg-gray-200 border rounded-md outline-none focus:border focus:border-double focus:border-sky-600" value={textarea.value} onChange={(e) => handleChange(e, textarea.setValue)} >{textarea.value}</textarea>
          </div>
              : null
        }
      </div>

      <div className='w-full '>        
        <button className='px-5 py-3 mx-3 mb-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg shadow-lg focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-gray-850 shadow-gray-500/50 dark:shadow-sm me-2'>
          Enregistrer
        </button>
      </div>
</form>
  )
}

export default Formulaire
