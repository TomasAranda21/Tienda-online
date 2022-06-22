import React, { useState, useEffect, useRef } from 'react'
import SelectProduct from '../Inputs/SelectProduct'

const ModalCardsProducts = ({product, modal}) => {

    const [numberProduct, setNumberProduct] = useState(0)

    const refNumber = useRef()



    const handleDelete = () => {

        if(numberProduct > 0){
            setNumberProduct( numberProduct - 1)

            return
        }

    }


  return (

    <div className="absolute top-0 backdrop-brightness-50 w-full h-full">
        
        
        <div className="p-5 flex justify-center mt-10">

            <div className="relative shadow-xl bg-white w-2/3 rounded-sm flex">

                <div className="flex p-8 gap-14">

                    <div className="overflow-hidden " style={{width: '600px'}}>

                        <img src={product.urlImg} alt="" width=""/>

                    </div>



                    <div className="w-1/2 flex flex-col gap-20 mt-10">

                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl capitalize">{product.name} </h3>
                            <p className="font-bold">${product.price}</p>
                            <p>{product.description}</p>
                        
                        </div>


                        <div className="flex flex-col gap-8 w-full mx-auto">

                            <SelectProduct product={product} text={'talle'}>
                                {product?.talle?.map(talle => (

                                <option value={talle} key={talle} className="capitalize">{talle}</option>

                                ))}
                            </SelectProduct>


                            <SelectProduct product={product} text={'color'}>
                                {product?.color?.map(color => (

                                <option value={color} key={color} className="capitalize">{color}</option>

                                ))}
                            </SelectProduct>



                            <div className="flex flex-col gap-8">

                                <div className="flex mx-auto gap-2 w-32 h-12 rounded-sm overflow-hidden border-2">

                                    <button className="w-11 text-xl border-r-2 font-bold"
                                    onClick={() => handleDelete()}

                                    >-</button>

                                    <input type="number" className="w-11 text-center outline-none" ref={refNumber} value={numberProduct} 

                                    onChange={() => setNumberProduct(numberProduct)}/> 

                                    <button onClick={() => setNumberProduct( numberProduct + 1)}
                                    
                                    className=" w-11 text-xl border-l-2 font-bold">+</button>

                                </div>


                                <button className="bg-indigo-400 p-3 w-2/3 mx-auto rounded text-gray-50 font-bold uppercase">Añadir al carrito</button>


                            </div>
                        
                        </div>

                    </div>
                </div>


                <button className="absolute right-5 top-5 text-xl font-bold" onClick={() => modal(false)}>X</button>
            </div>


        </div>


    </div>
  )
}

export default ModalCardsProducts