import React, { useState, useEffect, useRef } from 'react'
import SelectProduct from '../Inputs/SelectProduct'

const ModalCardsProducts = ({product, modal}) => {

    const [numberProduct, setNumberProduct] = useState(0)

    const [colorProduct, setColorProduct] = useState('')

    const [talleProduct, setTalleProduct] = useState('')

    const [shop, setshop] = useState([])

    const refNumber = useRef()



    const handleDelete = () => {

        if(numberProduct > 0){
            setNumberProduct( numberProduct - 1)

            return
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const {description, name, price, urlImg, _id} = product

        const productCard = {_id, name, price, urlImg ,color: colorProduct, cantidad: numberProduct , talle: talleProduct, description}

        if(productCard._id === productCard._id){
            
        } 

        
        setshop([...shop, productCard])


        // Validar si el usuario esta poniendo el mismo producto, en el caso de esta poniendo el mismo producto que este  se añada pero que cambie
        // en numero de veces

        const cardLocalStorage = JSON.stringify(shop)

        localStorage.setItem('products00142979120', cardLocalStorage)

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


                        {/* <div className="flex flex-col gap-8 w-full mx-auto"> */}

                            <form action="" className="flex flex-col gap-8 w-full mx-auto" onSubmit={handleSubmit}>

                                <SelectProduct product={product} text={'talle'} onChange={(e) => setTalleProduct(e.target.value)} value={talleProduct}>
                                    {product?.talle?.map(talle => (

                                    <option value={talle} key={talle} className="capitalize">{talle}</option>

                                    ))}
                                </SelectProduct>


                                <SelectProduct product={product} text={'color'} onChange={(e) => setColorProduct(e.target.value)} value={colorProduct}>
                                    {product?.color?.map(color => (

                                    <option value={color} key={color} className="capitalize">{color}</option>

                                    ))}
                                </SelectProduct>



                                <div className="flex flex-col gap-8">

                                    <div className="flex mx-auto gap-2 w-32 h-12 rounded-sm overflow-hidden border-2">

                                        <button className="w-11 text-xl border-r-2 font-bold" type="button"
                                        onClick={() => handleDelete()}

                                        >-</button>

                                        <input type="number" className="w-11 text-center outline-none" ref={refNumber} value={numberProduct} 

                                        onChange={() => setNumberProduct(numberProduct)}/> 

                                        <button onClick={() => setNumberProduct( numberProduct + 1)} type="button"
                                        
                                        className=" w-11 text-xl border-l-2 font-bold">+</button>

                                    </div>


                                    <button type='submit'
                                    
                                    className="bg-indigo-400 p-3 w-2/3 mx-auto rounded text-gray-50 font-bold uppercase">Añadir al carrito</button>


                                </div>
                            </form>

                        
                        {/* </div> */}

                    </div>
                </div>


                <button className="absolute right-5 top-5 text-xl font-bold" onClick={() => modal(false)}>X</button>
            </div>


        </div>


    </div>
  )
}

export default ModalCardsProducts