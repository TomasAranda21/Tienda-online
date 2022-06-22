import React from 'react'

const CardProductsTienda = ({product, modal, productModal}) => {

  return (


    <div className="grid gap-2">

        <div className=" w-64 h-88 overflow-hidden " onClick={() => {

            productModal(product)
            modal(true)
            
        }}>

            <img src={product.urlImg} alt="" className="w-64 object-cover cursor-pointer hover:scale-110 hover:duration-700 duration-700"/>

        </div>
        
        <div className="capitalize">
            <p className="font-light text-gray-500">{product.name}</p>
            <p className="text-gray-600">${product.price}</p>
        </div>


    </div>


  )
}

export default CardProductsTienda