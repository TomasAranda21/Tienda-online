import React from 'react'

const SelectProduct = ({product, text, children}) => {

    const tipe = text

  return (
    <>
    <div className="flex gap-4 items-center">
    
    <label htmlFor="" className="w-16 capitalize">{text}</label>
        <select name="" id="" className="  w-2/3 p-3 border bg-transparent border-gray-400 rounded-sm capitalize">
            <option value="" className="capitalize">{`Eligue el ${text}`}</option>
                {product?.tipe?.map(text => (

                    <option value={text} key={text} className="capitalize">{text}</option>

                ))}
                {children}
        </select>

    </div>
    
    </>
  )
}

export default SelectProduct