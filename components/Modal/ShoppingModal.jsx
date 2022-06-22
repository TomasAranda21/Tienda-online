import React, { useRef, useEffect } from 'react'

const ShoppingModal = ({setShopModal, productsShop}) => {

    console.log(productsShop)


    const deleteRef = useRef()

    const imgRef = useRef()

    
    const isHover = (leave) => {

        if(!leave){

            deleteRef.current.classList.remove("hidden")

        }else{

            deleteRef.current.classList.add("hidden")

        }

    }

  return (

    <div className="absolute  top-0 right-0 backdrop-brightness-50 w-full flex justify-end">
        
        <div className="bg-white h-screen">

                

                    <div className="p-14 py-20 flex flex-col">
                        <div className="flex flex-col gap-10">

                            <div className="flex justify-between text-2xl items-center">
                                <h2 className="font-bold">Tu Carrito</h2>
                                <button className="text-4xl" onClick={() => setShopModal(false)}>X</button>
                            </div>

                    {productsShop?.map(prod => (

                        <div className="flex gap-3" key={prod._id}>

                            <div className="flex gap-3 items-center">

                                <div className="relative h-20 w-16 hover:brightness-50" ref={imgRef} onMouseEnter={() => isHover()} onMouseLeave={() => isHover("hidden")}>
                                    <div className="h-20 w-16 overflow-hidden " >
                                        <img src={prod.urlImg} alt="" className=" object-cover "/>
                                    </div>


                                    <div className="hidden absolute top-1/3 left-1/3 text-xl text-white hover:brightness-200 " ref={deleteRef}>

                                        <button onClick={() => console.log(prod)}>X</button>
                                        
                                    </div>
                                    
                                </div>

                                <div className="text-sm flex flex-col gap-3">
                                    <p>{prod.name}</p>
                                    <p>{`${prod.cantidad} x $${prod.price}`}</p>
                                </div>
                            </div>

                        </div>
                    ))}

                        </div>


                        <div className="flex flex-col mt-80 gap-5">

                            <h3>{`Total: $2500`}</h3>

                            <button onClick={() => setShopModal(false)} className="bg-stone-900 text-white p-3 rounded-md">Comprar ahora</button>

                        </div>

                    </div>

                </div>

    </div>
  )


}

export default ShoppingModal