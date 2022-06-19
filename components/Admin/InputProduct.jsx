import React from 'react'

const InputProduct = ({onChange, onBlur, name, type, touched, value, label}) => {
  return (

    <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-md"> {label} </label>
            <input 
            type={type}
            name={name}
            value={value}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            touched={touched}

            className="p-1 px-3 rounded-md bg-slate-100"

            />

    </div>
    
    
  )
}

export default InputProduct